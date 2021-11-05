const mongoose = require('mongoose');

//grab schema from mongoose:
const { Schema } = mongoose;

//what a user does have:
const userSchema = new Schema({
  name: {
    type: String,
    minlength: 4,
    maxlength: 25,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  following: {
    type: Array,
    default: []
  },
  followed: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('users', userSchema);
