const Course = require("../models/Course.js");
const { mutipleMongooseToObject } = require("../../util/mongoose.js");

class SiteController {
  home(req, res, next) {
    //Viết bằng Callback
    // Course.find({}, (err, courses) => {
    //   if (!err) res.json(courses);
    //   else
    //     res.status(400).json({
    //       error: "Lỗi",
    //     });
    // });

    //Viết bằng Promise
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch((er) => next(er));
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
