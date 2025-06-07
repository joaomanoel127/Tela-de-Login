const { Pool } = require("pg");

// Aqui você define o pool
const pool = new Pool({
  user: "postgres",
  password: "joao1227.",
  host: "localhost",
  port: 5432,
  database: "Tela login"
});

// Aqui você exporta o pool (depois de declarar)
module.exports = pool;
