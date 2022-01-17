const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Pin = require('../models/pinModel');
const ApiFeatures = require('../utils/apifeatures');
const ErrorHander = require('../utils/errorHander');

exports.createPin = catchAsyncErrors(async (req, res, next) => {
    const pin = await Pin.create(req.body);

  res.status(201).json({ success: true, pin });
});

exports.getAllPin = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 8;
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