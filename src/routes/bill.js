const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const billController = require("../app/controllers/BillController");

router.get("/get-bill", billController.get);
router.post("/create-bill", billController.create);
router.put("/update-bill/:id", billController.update);

router.get("/get-bill/:id", billController.getid);
router.get("/get-all", billController.getall);
router.delete("/delete-bill/:id", billController.destroy);

module.exports = router;
