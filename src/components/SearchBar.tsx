export default function SearchBar() {
  return (
    <div className="pt-5">
      <div>
        <p>Pesquisar por:</p>
        <div>
          <input
            className="me-3"
            placeholder="Cargo, habilidades ou empresa"
          ></input>
          <input className="me-3" placeholder="País, cidade ou estado"></input>
          <button className="me-3">LIMPAR FILTROS</button>
          <button className="mx-3">PESQUISAR</button>
        </div>
      </div>
    </div>
  );
}
