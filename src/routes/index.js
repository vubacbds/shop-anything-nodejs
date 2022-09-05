const newsRouter = require("./news");
const meRouter = require("./me");
const siteRouter = require("./site");
const productRouter = require("./product");
const apiRouter = require("./api");
const loginRouter = require("./login");
const signupRouter = require("./signup");
const categoryRouter = require("./category");

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
  app.use("/login", loginRouter);
  app.use("/signup", signupRouter);
  app.use("/category", categoryRouter);
}

module.exports = route;
