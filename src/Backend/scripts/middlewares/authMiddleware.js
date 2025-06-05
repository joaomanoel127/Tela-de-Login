const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ erro: "Token ausente" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(403).json({ erro: "Token inválido" });
  }
};