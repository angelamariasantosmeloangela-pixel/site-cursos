export default function CourseCard({ provider }) {
  return (
    <div>
      <h2>{provider.nome}</h2>
      <p>{provider.tipo}</p>
      <p>{provider.area}</p>
      <a href={provider.link} target="_blank" rel="noreferrer">
        Acessar
      </a>
    </div>
  );
}
