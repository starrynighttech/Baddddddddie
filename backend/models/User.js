const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  balance: { type: Number, default: 0 },
  referralCode: String,
  referredBy: String,
  role: { type: String, default: "user" }
})

module.exports = mongoose.model("User", UserSchema)
