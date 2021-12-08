import SingleCard from "./SingleCard";
import data from "../mock-json/mock.json";

export default function AllCards() {
  const cards = data.map((currentCompany) => {
    return (
      <div key={currentCompany.nome} className="col-4 d-flex">
        <SingleCard
          nome={currentCompany.nome}
          cargo={currentCompany.cargo}
          nivel={currentCompany.nivel}
          periodo={currentCompany.periodo}
          local={currentCompany.local}
          data={currentCompany.data}
          imagem={currentCompany.imagem}
        />
      </div>
    );
  });

  return <div className="d-flex flex-wrap">{cards}</div>;
}
