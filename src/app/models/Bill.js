const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bill = new Schema(
  {
    product_id: { type: String },
    user_id: { type: String },
    amount: { type: Number },
    total_price: { type: Number },
    phone: { type: Number },
    address: { type: String },
    status: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bill", Bill);
