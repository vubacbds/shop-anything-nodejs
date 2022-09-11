const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const otherController = require("../app/controllers/OtherController");

router.get("/get-other", otherController.get);
router.post("/create-other", otherController.create);
router.put("/update-other/:id", otherController.update);

module.exports = router;
