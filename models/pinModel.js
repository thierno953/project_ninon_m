const mongoose = require("mongoose");

const pinSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter your Title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter your Description"],
  },
  long: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter your Category"],
  },

  property_address: {
    type: String,
    required: [true, "Please Enter your Adress"],
  },
  property_owner: {
    type: String,
    required: [true, "Please Enter your Property owner"],
  },
  function_owner: {
    type: String,
    required: [true, "Please Enter your Function owner"],
  },
  condition_of_the_property: {
    type: String,
    required: [true, "Please Enter your Period"],
  },
  occupation: {
    type: String,
    required: [true, "Please Enter your Occupation"],
  },
  term: {
    type: String,
    required: [true, "Please Enter your Term"],
  },
  date_of_entry: {
    type: String,
    required: [true, "Please Enter your Date of Enter"],
  },
  release_date: {
    type: String,
    required: [true, "Please Enter your Release Date"],
  },
  number_occupants: {
    type: String,
    required: [true, "Please Enter your Number of Occupants"],
  },

  user: {
    type: mongoose.Schema.ObjectId, 
    ref: "User",
    required: true,
  }
},
{ timestamps: true });

module.exports = mongoose.model("Pin", pinSchema);
 