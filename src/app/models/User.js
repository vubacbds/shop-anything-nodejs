const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  image: String,
  isadmin: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
