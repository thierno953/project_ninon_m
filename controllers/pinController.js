const Pin = require("../models/pinModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHander = require("../utils/errorHander");
const cloudinary = require("cloudinary");

// create pin
exports.createPin = catchAsyncErrors(async (req, res) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) { 
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "pins",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  req.body.user = req.user.id;
  const pin = await Pin.create(req.body);

  res.status(201).json({ success: true, pin });
});

// all pins
exports.getAllPin = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 4;
  const pinsCount = await Pin.countDocuments();

  const apiFeature = new ApiFeatures(Pin.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const pins = await apiFeature.query;

  res.status(200).json({
    success: true,
    pins,
    pinsCount,
    resultPerPage,
  });
});

// all admin pins
exports.getAdminPin = catchAsyncErrors(async (req, res) => {
  const pins = await Pin.find();

  res.status(200).json({ success: true, pins });
});

// details pin
exports.getPinDetail = catchAsyncErrors(async (req, res, next) => {
  const pin = await Pin.findById(req.params.id);

  if (!pin) {
    return next(new ErrorHander("Pin not found", 404));
  }

  res.status(200).json({
    success: true,
    pin,
  });
});

// update pin
exports.updatePin = catchAsyncErrors(async (req, res, next) => {
  let pin = await Pin.findById(req.params.id);
  if (!pin) {
    return next(new ErrorHander("Project not found", 404));
  }

    // Images Start Here
    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
  
    if (images !== undefined) {
      // Deleting Images From Cloudinary
      for (let i = 0; i < pin.images.length; i++) {
        await cloudinary.v2.uploader.destroy(pin.images[i].public_id);
      }
  
      const imagesLinks = [];
  
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "pins",
        });
  
        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
  
      req.body.images = imagesLinks;
    }

  pin = await Pin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    pin,
  });
});

// delete pin
exports.deletePin = catchAsyncErrors(async (req, res, next) => {
  const pin = await Pin.findById(req.params.id);
  if (!pin) {
    return next(new ErrorHander("Project not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < pin.images.length; i++) {
    await cloudinary.v2.uploader.destroy(pin.images[i].public_id);
  }

  await pin.remove();

  res.status(200).json({ success: true, message: "Pin Delete Successfully" });
});
