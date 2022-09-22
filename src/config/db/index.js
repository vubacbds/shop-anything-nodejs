const mongoose = require("mongoose");
const dotenv = require("dotenv");

async function connect() {
  try {
    await mongoose
      .connect(`${process.env.DATABASE_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Kết nối thành công nhé !");
      })
      .catch((err) => {
        console.log("Kết nối thất bại rồi T_T", err);
      });
  } catch (error) {
    console.log("Kết nối MongoDB thất bại! Lỗi hệ thống gì rồi");
  }
}

module.exports = { connect };
