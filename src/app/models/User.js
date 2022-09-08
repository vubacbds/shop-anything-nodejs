const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String },
  password: { type: String },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  image: { type: String, default: "" },
  isadmin: { type: Boolean },
});

module.exports = mongoose.model("User", UserSchema);
