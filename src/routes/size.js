const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const sizeController = require("../app/controllers/SizeController");

router.get("/get-size", sizeController.get);

router.post("/create-size", sizeController.create);
router.put("/update-size/:id", sizeController.update);
router.delete("/delete-size/:id", sizeController.destroy);

module.exports = router;
