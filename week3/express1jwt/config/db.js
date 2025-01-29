const mongoose = require("mongoose");
require("dotenv").config();
const connecton = mongoose.connect(process.env.MONGO_URL);
module.exports = { connecton };
