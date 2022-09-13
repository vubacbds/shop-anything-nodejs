const Evaluation = require("../models/Evaluation.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class EvaluationController {
  //[GET] /evaluation/get-evaluation/:product_id
  async get(req, res, next) {
    await Evaluation.find({ products: req.params.product_id })
      .sort({ createdAt: -1 })
      .populate({
        path: "users",
      })
      .then((item) => {
        res.status(200).json(item);
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
}

module.exports = new EvaluationController();
