const Course = require("../models/Course.js");
const { mongooseToObject } = require("../../util/mongoose.js");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((item) => {
        res.render("courses/show", { course: mongooseToObject(item) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
