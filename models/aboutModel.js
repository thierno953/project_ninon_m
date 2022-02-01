const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter your Title"],
    },
    description: {
      type: String,
      required: [true, "Please Enter your Description"],
    },

    images: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
