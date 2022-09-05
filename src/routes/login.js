// const express = require("express");
// const jwt = require("jsonwebtoken");

// const router = express.Router();
// require("dotenv").config();

// // const meController = require("../app/controllers/MeController");

// router.post("/", (req, res, next) => {
//   try {
//     const token = jwt.sign(
//       {
//         userId: 6688,
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.status(200).json({
//       success: true,
//       userId: 6688,
//       token,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "không có tài khoản",
//       error,
//     });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UserController");

router.post("/", userController.login);

module.exports = router;
