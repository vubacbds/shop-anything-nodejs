const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);
router.get("/", siteController.home); //vì chạy từ trên xuống , khớp cái này trước nên để ở dưới

module.exports = router;
