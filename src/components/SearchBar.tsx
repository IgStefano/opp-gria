import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../mock-json/mock.json";

export default function SearchBar(props: {
  filterCompaniesByName: any;
  filterCompaniesByPlace: any;
  companies: Array<Object>;
  searchToggle: boolean;
  setSearchToggle: any;
  setOpportunityNumber: Function;
}) {
  const [inputByName, setInputByName] = useState("");
  const [inputByPlace, setInputByPlace] = useState("");

  function handleChangeByName(event: any) {
    setInputByName(event.target.value);
  }

  function handleChangeByPlace(event: any) {
    setInputByPlace(event.target.value);
  }

  function resetFilters() {
    setInputByName("");
    setInputByPlace("");
    props.setSearchToggle(false);
    props.setOpportunityNumber(data.length);
  }

  function submitSearch(event: React.MouseEvent) {
    props.setSearchToggle(true);
  }

  useEffect(() => {
    props.filterCompaniesByName(inputByName);
  }, [inputByName]);

  useEffect(() => {
    props.filterCompaniesByPlace(inputByPlace);
  }, [inputByPlace]);

  return (
    <div className="pt-5">
      <div>
        <p>Pesquisar por:</p>
        <div>
          <input
            onChange={handleChangeByName}
            value={inputByName}
            className="me-3"
            placeholder="Cargo, habilidades ou empresa"
          ></input>
          <input
            onChange={handleChangeByPlace}
            value={inputByPlace}
            className="me-3"
            placeholder="País, cidade ou estado"
          ></input>
          <button onClick={resetFilters} className="me-3">
            LIMPAR FILTROS
          </button>
          <button onClick={submitSearch} className="mx-3">
            PESQUISAR
          </button>
        </div>
      </div>
    </div>
  );
}
