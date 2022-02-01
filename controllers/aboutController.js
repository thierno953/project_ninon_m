const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const About = require("../models/aboutModel");
const ErrorHander = require("../utils/errorHander");

exports.createAbout = catchAsyncErrors(async (req, res) => {
  const about = await About.create(req.body);

  res.status(201).json({
    success: true,
    about,
  });
});

exports.getAllAbouts = catchAsyncErrors(async (req, res) => {
  const abouts = await About.find();
  res.status(201).json({
    success: true,
    abouts,
  });
});

exports.getAdminAbouts = catchAsyncErrors(async (req, res) => {
  const abouts = await About.find();
  res.status(201).json({
    success: true,
    abouts,
  });
});

exports.getAboutDetail = catchAsyncErrors(async (req, res) => {
  const about = await About.findById(req.params.id);

  if(!about) {
    return next(new ErrorHander("About not found"));
  }
  res.status(200).json({ success: true, about });
})