const Home = require("../models/homeModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorHander");

// create
exports.createHome = catchAsyncErrors(async (req, res, next) => {
  // req.body.user = req.user.id;

  const home = await Home.create(req.body);

  res.status(200).json({ success: true, home });
});

// all
exports.getAllHomes = catchAsyncErrors(async (req, res, next) => {
  const homes = await Home.find();

  res.status(200).json({ success: true, homes });
});

// all admin
exports.getAdminHomes = catchAsyncErrors(async (req, res, next) => {
  const homes = await Home.find();

  res.status(200).json({ success: true, homes });
});

// detail
exports.getHomeDetails = catchAsyncErrors(async (req, res, next) => {
  const home = await Home.findById(req.params.id);

  if (!home) {
    return next(ErrorHander("Home not found"));
  }
  res.status(200).json({ success: true, home });
});

// update

exports.updateHome = catchAsyncErrors(async (req, res, next) => {
  let home = await Home.findById(req.params.id);

  if (!home) {
    return next(new ErrorHander("Home not found", 404));
  }

  home = await Home.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    home,
  });
});

// delete
exports.deleteHome = catchAsyncErrors(async (req, res, next) => {
  const home = await Home.findById(req.params.id);
  if (!home) {
    return next(ErrorHander("Home not found", 404));
  }

  await home.remove();

  res.status(200).json({
    success: true,
    message: "About Delete Successfully",
  });
});
