const Reply = require("../models/Reply.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class ReplyController {
  //[POST] /reply/create-reply
  async create(req, res, next) {
    const reply = new Reply(req.body);
    await reply
      .save()
      .then((item) => {
        res.status(200).json(item);
        console.log("thêm thành công", item);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Thêm không thành công!",
          error: { next },
        });
      });
  }

  //[DELETE] /reply/delete-reply/:id
  async destroy(req, res, next) {
    await Reply.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa thành công",
        });
      })
      .catch(next);
  }
}

module.exports = new ReplyController();
