const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UserController");

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.put("/update/:id", userController.update);
router.get("/get", userController.get);
router.get("/get-email", userController.getemail);
router.put("/update-pass/:id", userController.update_pass);
router.delete("/delete/:id", userController.destroy);

module.exports = router;
