const Product = require("../models/product.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class ApiController {
  //[GET] /api/get-product

  async get(req, res, next) {
    await Product.find({})
      .sort([
        ["ghim", "descending"],
        ["updatedAt", "descending"],
      ])
      .then((item) => {
        res.status(200).json(item);
        console.log("sản oharm______", item);
      })
      .catch((er) => next(er));
  }

  //[GET] /api/get-product/:id
  async getid(req, res, next) {
    await Product.findOne({ _id: req.params.id })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[GET] /api/create-product
  //   {
  //     name: { type: String, maxLength: 50 },
  //     description: { type: String, maxLength: 300 },
  //     image: { type: String, maxLength: 300 },
  //     slug: { type: String, slug: "name", unique: true }, //Tạo slug từ trường name,

  async create(req, res, next) {
    // const fdata = {
    //   name: req.body.name,
    //   description: req.body.description,
    //   image: req.body.image,
    // };
    const product = new Product(req.body);
    await product
      .save()
      .then((item) => {
        res.status(200).json(item);
        console.log(res);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Thêm sản phẩm không thành công!",
          error: { next },
        });
      });
  }

  //[PUT] /api/update-product/:id
  async update(req, res, next) {
    await Product.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật sản phẩm thất bại",
        })
      );
  }

  //[DELETE] /api/delete-product/:id
  async destroy(req, res, next) {
    await Product.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa sản phẩm thành công",
        });
      })
      .catch(next);
  }
}

module.exports = new ApiController();
