const mongoose = require("mongoose");

// Define the schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mailid: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create and export the model
const User = mongoose.model("User", UserSchema);
module.exports = User;
