const product = require("../models/Product.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class SiteController {
  home(req, res, next) {
    //Viết bằng Callback
    // product.find({}, (err, products) => {
    //   if (!err) res.json(products);
    //   else
    //     res.status(400).json({
    //       error: "Lỗi",
    //     });
    // });

    //Viết bằng Promise
    product
      .find({})
      .then((products) => {
        res.render("home", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch((er) => next(er));
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
