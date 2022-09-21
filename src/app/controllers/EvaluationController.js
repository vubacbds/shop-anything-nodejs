const Evaluation = require("../models/Evaluation.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class EvaluationController {
  //[GET] /evaluation/get-evaluation/:product_id/:amount  //Lấy theo số lượng
  async get(req, res, next) {
    await Evaluation.find({ products: req.params.product_id })
      .sort({ createdAt: -1 })
      .populate({
        path: "users",
      })
      .populate({
        path: "replies",
        populate: { path: "users" },
      })
      .then((item) => {
        const amountNum = parseInt(req.params.amount);
        const newItem = item.filter((i, index) => {
          return index >= amountNum - 1 && index < amountNum + 2;
        });

        console.log("danh gia_____+++++", newItem.length);
        res.status(200).json({ data: newItem, totalData: item.length });
      });
  }

  //[POST] /evaluation/create-evaluation
  async create(req, res, next) {
    const evaluation = new Evaluation(req.body);
    await evaluation
      .save()
      .then((item) => {
        res.status(200).json(item);
        console.log("thêm evaluation thành công", item);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Thêm đánh giá không thành công!",
          error: { next },
        });
      });
  }

  //[DELETE] /evaluation/delete-evaluation/:id
  async destroy(req, res, next) {
    await Evaluation.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa đánh giá thành công",
        });
      })
      .catch(next);
  }

  //[PUT] /evaluation/update-evaluation/:id
  async update(req, res, next) {
    await Evaluation.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật thất bại",
        })
      );
  }
}

module.exports = new EvaluationController();
