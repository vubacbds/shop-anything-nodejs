const jwt = require("jsonwebtoken");
require("dotenv").config();

const authPage = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  let data = null;
  if (!token) {
    res.send("không tồn tại");
  } else {
    try {
      data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log("dữ liệu", data);
      next();
    } catch (error) {}
  }
};

module.exports = {
  authPage,
};
