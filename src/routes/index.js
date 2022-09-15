const newsRouter = require("./news");
const meRouter = require("./me");
const siteRouter = require("./site");
const productRouter = require("./product");
const apiRouter = require("./api");
const categoryRouter = require("./category");
const billRouter = require("./bill");
const userRouter = require("./user");
const otherRouter = require("./other");
const evaluationRouter = require("./evaluation");
const sizeRouter = require("./size");
const colorRouter = require("./color");

function route(app) {
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });

  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
  app.use("/search", siteRouter);
  app.use("/product", productRouter);
  app.use("/api", apiRouter);
  app.use("/category", categoryRouter);
  app.use("/bill", billRouter);
  app.use("/user", userRouter);
  app.use("/other", otherRouter);
  app.use("/evaluation", evaluationRouter);
  app.use("/size", sizeRouter);
  app.use("/color", colorRouter);
}

module.exports = route;
