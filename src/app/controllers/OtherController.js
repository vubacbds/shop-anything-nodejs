const Other = require("../models/other.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class OtherController {
  //[GET] /other/get-other
  async get(req, res, next) {
    await Other.find({})
      .sort({ createdAt: -1 })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[POST] /other/create-other
  async create(req, res, next) {
    const other = new Other(req.body);
    await other
      .save()
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Thêm sản phẩm không thành công!",
          error: { next },
        });
      });
  }

  //[PUT] /other/update-other/:id
  async update(req, res, next) {
    await Other.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật thành công",
        })
      );
  }
}

module.exports = new OtherController();
