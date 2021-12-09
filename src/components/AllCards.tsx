import SingleCard from "./SingleCard";
import data from "../mock-json/mock.json";

export default function AllCards(props: {
  filteredCompaniesByName: Array<object>;
  filteredCompaniesByPlace: Array<object>;
  setOpportunityNumber: Function;
  searchToggle: boolean;
}) {
  const filteredCards = data.filter((currentCompany) => {
    if (
      props.filteredCompaniesByName.includes(currentCompany) &&
      props.filteredCompaniesByPlace.includes(currentCompany)
    ) {
      return currentCompany;
    } else {
      return null;
    }
  });

  const allCards = data.map((currentCompany) => {
    return (
      <div key={currentCompany.nome} className="col-3 d-flex">
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

  const cards = filteredCards.map((currentCompany) => {
    return (
      <div key={currentCompany.nome} className="col-3 d-flex">
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

  props.searchToggle
    ? props.setOpportunityNumber(filteredCards.length)
    : props.setOpportunityNumber(data.length);

  return (
    <div className="d-flex flex-wrap">
      {props.searchToggle ? cards : allCards}
    </div>
  );
}
