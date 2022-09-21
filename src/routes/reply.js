const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const replyController = require("../app/controllers/ReplyController");

router.post("/create-reply", replyController.create);
router.delete("/delete-reply/:id", replyController.destroy);

module.exports = router;
