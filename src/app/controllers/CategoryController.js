const Category = require("../models/Category.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class CategoryController {
  //[GET] /category/get-category
  async get(req, res, next) {
    await Category.find({})
      .sort({ createdAt: -1 })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[GET] /category/get-category/:id
  async getid(req, res, next) {
    await Category.findOne({ _id: req.params.id })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[POST] /category/create-category
  async create(req, res, next) {
    const category = new Category(req.body);
    await category
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

  //[PUT] /category/update-category/:id
  async update(req, res, next) {
    await Category.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật sản phẩm thất bại",
        })
      );
  }

  //[DELETE] /category/delete-category/:id
  async destroy(req, res, next) {
    await Category.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa sản phẩm thành công",
        });
      })
      .catch(next);
  }
}

module.exports = new CategoryController();
