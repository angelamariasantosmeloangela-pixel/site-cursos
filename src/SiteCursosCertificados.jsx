import { useState } from "react";

export default function SiteCursosCertificados() {
  const [busca, setBusca] = useState("");

  const providers = [
    {
      nome: "Fundação Bradesco",
      tipo: "Gratuito",
      area: "Tecnologia",
      link: "https://www.ev.org.br/",
    },
    {
      nome: "Sebrae",
      tipo: "Gratuito e pago",
      area: "Negócios",
      link: "https://sebrae.com.br/",
    },
    {
      nome: "SENAI",
      tipo: "Técnico",
      area: "Indústria",
      link: "https://play.senai.br/",
    },
    {
      nome: "Coursera",
      tipo: "Pago",
      area: "Tecnologia",
      link: "https://www.coursera.org/",
    },
  ];

  const filtrados = providers.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎓 Cursos Online Confiáveis</h1>

      <input
        type="text"
        placeholder="Buscar plataforma..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          padding: "10px",
          marginTop: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        {filtrados.map((p, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <h2>{p.nome}</h2>
            <p>Tipo: {p.tipo}</p>
            <p>Área: {p.area}</p>
            <a href={p.link} target="_blank" rel="noreferrer">
              Acessar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
