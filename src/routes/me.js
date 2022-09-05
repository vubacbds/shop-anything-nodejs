const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/store/product", meController.storeproduct); //vì chạy từ trên xuống , khớp cái này trước nên để ở dưới

module.exports = router;
