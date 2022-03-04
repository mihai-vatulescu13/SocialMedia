const mongoose = require("mongoose");

//grab schema from mongoose:
const { Schema } = mongoose;

//what a user does have:
const message = new Schema(
  {
    conversationId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("messages", message);
