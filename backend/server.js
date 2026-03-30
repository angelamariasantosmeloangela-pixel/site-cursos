const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const cursosPath = path.join(__dirname, "cursos.json");

function lerCursos() {
  const dados = fs.readFileSync(cursosPath, "utf-8");
  return JSON.parse(dados);
}

app.get("/api/cursos", (req, res) => {
  try {
    const cursos = lerCursos();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao carregar cursos." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});