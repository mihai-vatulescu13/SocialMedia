const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  likes: {
    type: Array,
    default: []
  },
  comments: {
    type: Array,
    default: []
  }
}, { timestamps: true })