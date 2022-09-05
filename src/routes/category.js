const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const categoryController = require("../app/controllers/CategoryController");

router.get("/get-category", categoryController.get);
router.get("/get-category/:id", authPage, categoryController.getid);

router.post("/create-category", categoryController.create);
router.put("/update-category/:id", categoryController.update);
router.delete("/delete-category/:id", categoryController.destroy);

module.exports = router;
