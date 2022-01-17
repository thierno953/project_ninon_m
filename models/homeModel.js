const mongoose = require("mongoose");

const homeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter your Title"],
    },
    description: {
      type: String,
      required: [true, "Please Enter your Description"],
    },

    /*   user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },  */
  },
  { timestamps: true }
);

module.exports = mongoose.model("Home", homeSchema);
