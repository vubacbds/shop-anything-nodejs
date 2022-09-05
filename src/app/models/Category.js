const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-slug-generator"); //Tạo slug kiểu bỏ hết dấu nối liền lại có dấu gạch ngang,
mongoose.plugin(slug);

const Category = new Schema(
  {
    name: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("category", Category);
