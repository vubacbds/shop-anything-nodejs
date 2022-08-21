const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/:slug", newsController.show);
router.get("/", newsController.index); //vì chạy từ trên xuống , khớp cái này trước nên để ở dưới

module.exports = router;
