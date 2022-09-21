const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product.js");
const User = require("./User.js");
const Reply = require("./Reply.js");

const Evaluation = new Schema(
  {
    body: { type: String },
    image: { type: String, default: "" },
    products: { type: mongoose.Schema.Types.ObjectId },
    likes: [],
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Reply,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("evaluation", Evaluation);
