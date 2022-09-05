const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  // [POST] /signup
  async signup(req, res) {
    const body = req.body;
    if (!(body.email && body.password)) {
      return res.status(400).send({ error: "Không có dữ liệu" });
    }
    const user = new User(body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
  }

  // [POST] /login
  async login(req, res, next) {
    try {
      await User.findOne({ email: req.body.email })
        .then((user) => {
          if (!user) {
            return res.status(400).json({
              message: "Email không tồn tại",
              error: { next },
            });
          }
          if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
              {
                userId: user._id,
              },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: "1d" }
            );

            res.status(200).json({
              token,
              user,
            });
          } else {
            return res.status(400).json({
              message: "Password không chính xác !",
            });
          }
        })
        .catch((next) => {
          return res.status(500).json({
            message: "Lỗi hệ thống 1",
            error: { next },
          });
        });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Lỗi hệ thống 2",
        error,
      });
    }
  }
}

module.exports = new UserController();
