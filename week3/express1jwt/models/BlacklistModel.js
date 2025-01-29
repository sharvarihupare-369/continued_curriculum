const mongoose = require("mongoose");

const blackListSchema = mongoose.Schema({
  token: { type: String },
  createAt: { type: Date, default: Date.now },
});

const BlackListModel = mongoose.model("blackList", blackListSchema);

module.exports = { BlackListModel };
