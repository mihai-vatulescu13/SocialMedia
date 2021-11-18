const mongoose = require("mongoose");

//grab schema from mongoose:
const { Schema } = mongoose;

//what a user does have:
const userSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 25,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      default: ''
    },
    following: {
      type: Array,
      default: [],
    },
    followed: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
