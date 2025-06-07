const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("./db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/cadastro", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Email e senha são obrigatórios." });
  }

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const result = await pool.query(
      "INSERT INTO usuarios (email, senha) VALUES ($1, $2) RETURNING id",
      [email, hashedPassword]
    );

    return res.status(201).json({ mensagem: "Usuário cadastrado!", id: result.rows[0].id });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ erro: "Email já cadastrado." });
    }
    console.error(error);
    return res.status(500).json({ erro: "Erro no servidor." });
  }
});

const authRoutes = require("./routes/auth"); // Ajuste o caminho se necessário
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
