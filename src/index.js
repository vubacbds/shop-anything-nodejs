//import { engine } from "express-handlebars"; //Dễ viết code HTML

const path = require("path"); //để sử dụng phương thức path có sẵn
const express = require("express"); //Framework
const morgan = require("morgan"); //Nhận biết thông tin các Request //Nodemon : Để khi sửa thì node tự cập nhật và có Bug
const handlebars = require("express-handlebars");
const route = require("./routes");

const app = express();
const port = 3000;

//về kết nối database MongoDB
const db = require("./config/db");
db.connect();

app.use(
  //Nhận thông tin khi submit qua Body, trường hợp Form //Còn .query có sẵn ở middlewarre nhưng chỉ dùng vơi Get
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); //Nhận thông tin khi submit qua Body, trường hợp qua Axios, fectch,..
app.use(express.static(path.join(__dirname, "public"))); //Để truy cập dc các file Public
app.use(morgan("combined"));

//về thiết lập thư mục views
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resourses", "views"));

route(app); //về router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
