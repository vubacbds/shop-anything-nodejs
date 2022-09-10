const Bill = require("../models/bill.js");
const Product = require("../models/product.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class BillController {
  //[GET] /bill/get-all/:user-id/status
  async getall(req, res, next) {
    await Bill.find({})
      .sort({ createdAt: -1 })
      .populate({
        path: "products",
        // select: "title price",
        // strictPopulate: false,
      })
      .populate({
        path: "users",
        // select: "email",
        // strictPopulate: false,
      })
      .then((item) => {
        res.status(200).json(item);
      });
  }

  //[GET] /bill/get-bill
  async get(req, res, next) {
    await Bill.find({})
      .then((item) => {
        res.status(200).json(item);
        console.log("sản oharm______", item);
      })
      .catch((er) => next(er));
  }

  //[GET] /bill/get-bill/:id
  async getid(req, res, next) {
    await Bill.findOne({ _id: req.params.id })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[POST] /bill/create-bill
  async create(req, res, next) {
    const bill = new Bill(req.body);
    await bill
      .save()
      .then((item) => {
        res.status(200).json(item);
        console.log(res);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Thêm hóa đơn không thành công!",
          error: { next },
        });
      });
  }

  //[PUT] /bill/update-bill/:id
  async update(req, res, next) {
    await Bill.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật sản phẩm thất bại",
        })
      );
  }

  //[DELETE] /bill/delete-bill/:id
  async destroy(req, res, next) {
    await Bill.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa hóa đơn thành công",
        });
      })
      .catch(next);
  }
}

module.exports = new BillController();
