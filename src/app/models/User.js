const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, default: new ObjectId() },
    name: { type: String, default: "" },
    email: { type: String },
    password: { type: String },
    phone: { type: String, default: "" },
    address: { type: String, default: "" },
    image: { type: String, default: "" },
    isadmin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
