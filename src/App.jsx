import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseCard from "./components/CourseCard";

export default function App() {
  const [busca, setBusca] = useState("");
  const [providers, setProviders] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/cursos")
      .then((res) => res.json())
      .then((data) => {
        setProviders(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error("Erro:", error);
        setCarregando(false);
      });
  }, []);

  const filtrados = providers.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.area.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Header />

      <SearchBar busca={busca} setBusca={setBusca} />

      {carregando ? (
        <p>Carregando cursos...</p>
      ) : filtrados.length > 0 ? (
        filtrados.map((p) => (
          <CourseCard key={p.id} provider={p} />
        ))
      ) : (
        <p>Nenhum curso encontrado.</p>
      )}

      <footer style={{ marginTop: "30px", textAlign: "center" }}>
        Desenvolvido por <strong>Alexsandro Souza Melo</strong>
      </footer>
    </div>
  );
}
