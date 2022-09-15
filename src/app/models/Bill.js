const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product.js");
const User = require("./User.js");

const Bill = new Schema(
  {
    amount: { type: Number },
    total_price: { type: Number },
    name: { type: String },
    phone: { type: String },
    address: { type: String },
    size: { type: String, default: "" },
    color: { type: String, default: "" },
    status: { type: Number, default: 0 },
    products:
      //Thêm cái này để nối với table Product: vì tên table khi lưu vào mongodb sẽ là chữ thường có s
      {
        type: mongoose.Schema.Types.ObjectId, //Có nghĩa là khi nhập products này là nhập id của product
        ref: Product, //Đây là Model của Product cần import vào
      },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bill", Bill);
