const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  resetPasswordToken : String,
  resetPasswordExpires : Date,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserSchema = mongoose.model('user', UserSchema);
