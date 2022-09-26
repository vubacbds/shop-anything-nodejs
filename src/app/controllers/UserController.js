const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("../../util/mailer");
require("dotenv").config();

class UserController {
  // [POST] /user/signup
  async signup(req, res) {
    const body = req.body;
    if (!(body.email && body.password)) {
      return res.status(400).send({ error: "Không có dữ liệu" });
    }
    const user = new User(body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    user.save().then(async (doc) => {
      mailer.sendMail(
        doc.email,
        process.env.MAIL_TITLE || "FROM_SHOP_ANYTHING",
        `Xác nhận email của bạn: <a href=${
          process.env.APP_URL || "http://localhost:3000"
        }/user/verify/${doc._id}>Nhấn vào đây</a>`
      );
      res.status(201).send(doc);
    });
  }

  //[GET] /user/verify
  async verify(req, res, next) {
    await User.updateOne({ _id: req.params.userid }, { isverify: true })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật user thất bại",
        })
      );
  }

  //[POST] /user/resetpassword
  async resetpassword(req, res, next) {
    const indexstr = req.body.email.indexOf("@");
    const passwordRandom = `${req.body.email.slice(
      0,
      indexstr - 1
    )}$${Math.floor(Math.random() * 100000)}`;
    mailer.sendMail(
      req.body.email,
      process.env.MAIL_TITLE || "FROM_SHOP_ANYTHING",
      `Mật khẩu mới của bạn là: <b style="">${passwordRandom}</b> <p>Bạn cần vào tài khoản để thay đổi lại mật khẩu</p>`
    );

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(passwordRandom, salt);

    await User.updateOne({ email: req.body.email }, { password: newPassword })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Đổi mật khẩu thất bại",
        })
      );
  }

  // [POST] /user/login
  async login(req, res, next) {
    try {
      await User.findOne({ email: req.body.email })
        .sort({ createdAt: -1 })
        .then((user) => {
          if (!user) {
            return res.status(400).json({
              message: "Email không tồn tại",
              error: { next },
            });
          }
          if (!user.isverify) {
            return res.status(400).json({
              message: "Chưa xác minh email! Vui lòng vào email xác minh",
              error: { next },
            });
          }
          if (
            user &&
            bcrypt.compareSync(req.body.password, user.password) &&
            user.isverify
          ) {
            const token = jwt.sign(
              {
                userId: user._id,
              },
              process.env.ACCESS_TOKEN_SECRET || "jwt6688",
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

  //[PUT] /user/update/:id
  async update(req, res, next) {
    await User.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật user thất bại",
        })
      );
  }

  //[GET] /user/get
  async get(req, res, next) {
    await User.find({})
      .sort({ createdAt: -1 })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[GET] /user/get-email
  async getemail(req, res, next) {
    await User.find({ email: req.body.email })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[PUT] /user/update-pass/:id
  async update_pass(req, res, next) {
    const salt = await bcrypt.genSalt(10);
    const NewPass = await bcrypt.hash(req.body.password, salt);
    await User.updateOne({ _id: req.params.id }, { password: NewPass })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(500).json({
          message: "Cập nhật mật khẩu thất bại",
        })
      );
  }

  //[DELETE] /user/delete/:id
  async destroy(req, res, next) {
    await User.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa tài khoản thành công",
        });
      })
      .catch(next);
  }
}

module.exports = new UserController();
