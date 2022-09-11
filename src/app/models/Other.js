const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-slug-generator"); //Tạo slug kiểu bỏ hết dấu nối liền lại có dấu gạch ngang,
mongoose.plugin(slug);

const Other = new Schema(
  {
    web_title: { type: String, default: "SHOP" },
    web_hotline: { type: String, default: "0868609878" },
    web_mail: { type: String, default: "vubacbds@gmail.com" },
    web_facebook: { type: String, default: "https://fb.com/" },
    web_youtube: { type: String, default: "https://www.youtube.com/" },
    web_finish: {
      type: String,
      default:
        "© 2022 Copyright:  Website built on ReactJS and NodeJS platform by BAC",
    },
    web_cs: { type: String, default: "Chính sách mua hàng" },
    web_bh: { type: String, default: "Bảo hành" },
    web_hd: { type: String, default: "Hướng dẫn" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("other", Other);
