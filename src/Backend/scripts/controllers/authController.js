const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Cadastro de usuário
exports.register = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos!" });
  }

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    await pool.query("INSERT INTO usuarios (email, senha) VALUES ($1, $2)", [email, hashedPassword]);
    res.status(201).json({ msg: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao cadastrar usuário" });
  }
};

// Login do usuário
exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao fazer login" });
  }
};
