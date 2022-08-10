//import { engine } from "express-handlebars"; //Dễ viết code HTML

const path = require("path");
const express = require("express"); //Framework
const morgan = require("morgan"); //Nhận biết thông tin các Request //Nodemon : Để khi sửa thì node tự cập nhật và có Bug
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resourses", "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
