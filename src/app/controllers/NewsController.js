class NewsController {
  index(req, res) {
    res.render("news");
  }

  //Get / news / :Slug
  show(req, res) {
    res.send("New Detail");
  }
}

module.exports = new NewsController();
