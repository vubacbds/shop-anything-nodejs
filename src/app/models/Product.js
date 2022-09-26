const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-slug-generator"); //Tạo slug kiểu bỏ hết dấu nối liền lại có dấu gạch ngang,
mongoose.plugin(slug);

const Product = new Schema(
  {
    title: { type: String },
    description: { type: String },
    price: { type: Number, default: 0 },
    amount: { type: Number, default: 0 },
    category: { type: String },
    images: [],
    sizes: [],
    colors: [],
    promotion: { type: Number, default: 0 },
    promotion_date: { type: Date, default: "" },
    ghim: { type: Number, default: 0 },
    slug: { type: String, slug: "title", unique: true }, //Tạo slug từ trường name,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", Product);
