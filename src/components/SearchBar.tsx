import { useEffect, useState } from "react";
import data from "../mock-json/mock.json";

export default function SearchBar(props: {
  filterCompaniesByName: any;
  filterCompaniesByPlace: any;
  searchToggle: boolean;
  setSearchToggle: any;
  setOpportunityNumber: Function;
}) {
  const [inputByName, setInputByName] = useState("");
  const [inputByPlace, setInputByPlace] = useState("");

  // Funções que lidam com os inputs nas barras de pesquisa
  function handleChangeByName(event: any) {
    setInputByName(event.target.value);
  }

  function handleChangeByPlace(event: any) {
    setInputByPlace(event.target.value);
  }

  // Função que limpa os filtros e leva a página de volta ao estado padrão
  function resetFilters() {
    setInputByName("");
    setInputByPlace("");
    props.setSearchToggle(false);
    props.setOpportunityNumber(data.length);
  }

  // Função que habilita os filtros
  function submitSearch(event: React.MouseEvent) {
    props.setSearchToggle(true);
  }

  // Função que permite habilitar os filtros de dentro dos inputs
  function handleKeyPressSearch(event: any) {
    if (event.key === "Enter") {
      props.setSearchToggle(true);
    }
  }

  useEffect(() => {
    props.filterCompaniesByName(inputByName);
  }, [inputByName]);

  useEffect(() => {
    props.filterCompaniesByPlace(inputByPlace);
  }, [inputByPlace]);

  return (
    <div
      style={{ boxShadow: "0px 2px 0px rgba(17,17,26,0.1)" }}
      className="p-3 searchbg rounded"
    >
      <div>
        <div className="pb-md-4 pb-sm-4 pb-xs-4 ">
          <p style={{ fontSize: "0.9rem" }}>Pesquisar por:</p>
        </div>
        <div className="d-flex justify-content-between col-lg-12 searchMobile">
          <div className="col-lg-9 d-flex searchMobile">
            <div className="col-lg-6 ">
              <input
                onChange={handleChangeByName}
                onKeyPress={handleKeyPressSearch}
                value={inputByName}
                style={{ width: "90%" }}
                className="me-3 border-0 mb-sm-5 mb-xs-5 border-bottom border-bottom-dark searchMobile"
                placeholder="Cargo, habilidades ou empresa"
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                onChange={handleChangeByPlace}
                onKeyPress={handleKeyPressSearch}
                value={inputByPlace}
                style={{ width: "90%" }}
                className="me-3 mb-sm-3 mb-xs-3 border-0 border-bottom border-bottom-dark"
                placeholder="País, cidade ou estado"
              ></input>
            </div>
          </div>
          <div className="col-lg-3 searchBtnMobile">
            <button
              style={{
                backgroundColor: "white",
                color: "#590A9D",
                fontSize: "12px",
                fontWeight: "500",
                border: "1px solid #590A9D",
              }}
              onClick={resetFilters}
              className="me-md-4 me-sm-4 py-1 px-3 rounded searchBtnMobile"
            >
              LIMPAR FILTROS
            </button>
            <button
              style={{
                backgroundColor: " #590A9D",
                color: "white",
                fontSize: "12px",
                fontWeight: "500",
                border: "1px solid #590A9D",
              }}
              onClick={submitSearch}
              className="ms-md-2 ms-sm-2 py-1 px-3 rounded searchBtnMobile"
            >
              PESQUISAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
