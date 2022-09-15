const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Size = new Schema(
  {
    name: { type: String },
    status: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("size", Size);
