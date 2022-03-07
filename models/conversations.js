const mongoose = require("mongoose");

//grab schema from mongoose:
const { Schema } = mongoose;

//what a user does have:
const conversation = new Schema({
  members: {
    type: Array,
  },
});

module.exports = mongoose.model("conversations", conversation);
