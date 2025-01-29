const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  createAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
