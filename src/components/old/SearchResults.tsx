import SingleCard from "../SingleCard";
import data from "../../mock-json/mock.json";

export default function SearchResults(props: {
  filteredCompanies: Array<object>;
  setOpportunityNumber: Function;
  searchToggle: boolean;
}) {
  props.searchToggle
    ? props.setOpportunityNumber(props.filteredCompanies.length)
    : props.setOpportunityNumber(data.length);
  const cards = props.filteredCompanies.map((currentCompany: any) => {
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

  return <div className="d-flex flex-wrap">{cards}</div>;
}
