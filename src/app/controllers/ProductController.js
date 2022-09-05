const Product = require("../models/product.js");
const { mongooseToObject } = require("../../util/mongoose.js");

class ProductController {
  // [GET] product/:slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((item) => {
        res.render("products/show", { product: mongooseToObject(item) });
      })
      .catch(next);
  }

  // [GET] product/create
  create(req, res, next) {
    res.render("products/create");
  }

  // [POST] product/store
  store(req, res, next) {
    const formData = req.body;
    formData.image =
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg";
    formData.price = 1000;
    const product = new Product(formData);
    product
      .save()
      .then((ii) => {
        res.redirect("/me/store/product");
      })
      .catch((err) => {});
  }

  // [GET] product/:id/edit
  edit(req, res, next) {
    Product.findOne({ _id: req.params.id })
      .then((item) => {
        res.render("products/edit", { product: mongooseToObject(item) });
      })
      .catch(next);
  }

  update(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/store/product");
      })
      .catch(next);
  }

  destroy(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new ProductController();
