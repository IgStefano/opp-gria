import SingleCard from "./SingleCard";
import data from "../mock-json/mock.json";

// Essa função está responsável por renderizar os cards no componente agregador
export default function AllCards(props: {
  filteredCompaniesByName: Array<object>;
  filteredCompaniesByPlace: Array<object>;
  setOpportunityNumber: Function;
  searchToggle: boolean;
  currentPage: number;
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
      <div
        key={currentCompany.nome}
        className="col-lg-3 col-md-4 col-sm-6 col-xs-12
        d-flex justify-content-between cardMobile rounded"
      >
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
      <div
        key={currentCompany.nome}
        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 cardMobile"
      >
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

  //   Caso o "searchToggle" seja true, ele renderiza a versão filtrada. Caso contrário, todos os cards são renderizados.
  props.searchToggle
    ? props.setOpportunityNumber(filteredCards.length)
    : props.setOpportunityNumber(data.length);

  // Caso hajam mais do que 16 cards, apenas os primeiros 16 são renderizados
  const page1 = cards.slice(0, 16);

  const allPage1 = allCards.slice(0, 16);

  const page2 = cards.slice(17, 32);

  const allPage2 = allCards.slice(17, 32);

  const showPageObj = { first: page1, second: page2 };

  const showAllObj = { first: allPage1, second: allPage2 };

  const currentPage = Object.values(showPageObj)[props.currentPage];

  const currentAllPage = Object.values(showAllObj)[props.currentPage];

  return (
    <div className="d-flex flex-wrap">
      {props.searchToggle ? currentPage : currentAllPage}
    </div>
  );
}
