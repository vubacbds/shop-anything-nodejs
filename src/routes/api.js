const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const apiController = require("../app/controllers/ApiController");

router.get("/get-product", apiController.get);
router.get("/get-product/:id", authPage, apiController.getid);

router.post("/create-product", apiController.create);
router.put("/update-product/:id", apiController.update);
router.delete("/delete-product/:id", apiController.destroy);

module.exports = router;
