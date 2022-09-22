const product = require("../models/Product.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class MeController {
  // [GET] store/product
  storeproduct(req, res, next) {
    product.find({}).then((item) =>
      res.render("me/store-product", {
        product: mutipleMongooseToObject(item),
      })
    );
  }
}

module.exports = new MeController();
