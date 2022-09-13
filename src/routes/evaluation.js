const express = require("express");
const router = express.Router();
const { authPage } = require("../app/middleware/authPage");

const evaluationController = require("../app/controllers/EvaluationController");

router.get("/get-evaluation/:product_id/:amount", evaluationController.get);
router.post("/create-evaluation", evaluationController.create);
router.delete("/delete-evaluation/:id", evaluationController.destroy);
router.put("/update-evaluation/:id", evaluationController.update);

module.exports = router;
