const Color = require("../models/Color.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class ColorController {
  //[GET] /size/get-size
  async get(req, res, next) {
    await Color.find({})
      .sort({ createdAt: -1 })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[POST] /size/create-size
  async create(req, res, next) {
    const color = new Color(req.body);
    await color
      .save()
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Thêm không thành công!",
          error: { next },
        });
      });
  }

  //[PUT] /size/update-size/:id
  async update(req, res, next) {
    await Color.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật thất bại",
        })
      );
  }

  //[DELETE] /color/delete-color/:id
  async destroy(req, res, next) {
    await Color.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa thành công",
        });
      })
      .catch(next);
  }
}

module.exports = new ColorController();
