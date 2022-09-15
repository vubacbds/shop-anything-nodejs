const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const colorController = require("../app/controllers/ColorController");

router.get("/get-color", colorController.get);

router.post("/create-color", colorController.create);
router.put("/update-color/:id", colorController.update);
router.delete("/delete-color/:id", colorController.destroy);

module.exports = router;
