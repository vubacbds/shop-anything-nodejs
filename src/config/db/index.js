const mongoose = require("mongoose");
const dotenv = require("dotenv");

async function connect() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Kết nối thành công nhé !");
  } catch (error) {
    console.log("Kết nối thất bại rồi T_T");
  }
}

module.exports = { connect };
