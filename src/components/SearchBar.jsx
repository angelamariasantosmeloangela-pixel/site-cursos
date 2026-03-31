export default function SearchBar({ busca, setBusca }) {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  );
}
