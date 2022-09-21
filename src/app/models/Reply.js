const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product.js");
const User = require("./User.js");
const Evaluation = require("./Evaluation.js");

const Reply = new Schema(
  {
    body: { type: String },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    evaluations: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reply", Reply);
