const express = require("express");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/protegido", authMiddleware, (req, res) => {
  res.json({ msg: `Olá usuário ${req.userId}, você está autenticado!` });
});
