const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

console.log("JWT_SECRET:", process.env.JWT_SECRET);
module.exports = router;
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/protegido", authMiddleware, (req, res) => {
  res.json({ msg: `Você está autenticado, usuário ${req.userId}` });
});