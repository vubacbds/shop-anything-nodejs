const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 50 },
  description: { type: String, maxLength: 300 },
  image: { type: String, maxLength: 300 },
  slug: { type: String, maxLength: 300 },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
