const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");

function route(app) {
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });

  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/search", siteRouter);
  app.use("/course", courseRouter);
}

module.exports = route;
