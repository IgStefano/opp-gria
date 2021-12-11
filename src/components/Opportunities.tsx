import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import AllCards from "./AllCards";
import data from "../mock-json/mock.json";
import PageBrowser from "./PageBrowser";

// Componente agregador de todos os outros

export default function Opportunities() {
  // Variável que mostra na tela a quantidade de vagas encontrada seguindo o número total ou o filtro utilizado pelo usuário
  const [opportunityNumber, setOpportunityNumber] = useState(data.length);

  // Toggle para definir se uma busca está ou não sendo realizada (no false, mostra todas as opções). É atualizada para true ao clicar no botão "Pesquisar" e de volta para false ao clicar no botão "Limpar Filtros"
  const [searchToggle, setSearchToggle] = useState(false);

  // Ref da página atual
  const pageRef = useRef(1);

  // Função utilizada para retirar os acentos das letras (assim a busca retorna tanto "Junior" quanto "Júnior")
  function toNormalizeInput(input: string) {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // Dois states diferentes para duas buscas diferentes; o primeiro que busca por nome da oportunidade, do cargo ou do nível. O segundo, pelo local. Possibilidade de feature futura seria acrescentar o nome da empresa no filtro.
  const [filteredCompaniesByName, setFilteredCompaniesByName] = useState([{}]);
  const [filteredCompaniesByPlace, setFilteredCompaniesByPlace] = useState([
    {},
  ]);

  // Essa função cria uma array filtrada, comparando a forma normalizada do input do usuário com a forma normalizada dos dados no banco.
  function filterCompaniesByName(input: string) {
    const searchResultByName = data.filter(
      (currentCompany) =>
        toNormalizeInput(currentCompany.nome).includes(
          toNormalizeInput(input)
        ) ||
        toNormalizeInput(currentCompany.cargo).includes(
          toNormalizeInput(input)
        ) ||
        toNormalizeInput(currentCompany.nivel).includes(toNormalizeInput(input))
    );
    setFilteredCompaniesByName(searchResultByName);
  }

  function filterCompaniesByPlace(input: string) {
    const searchResultByPlace = data.filter((currentCompany) =>
      toNormalizeInput(currentCompany.local).includes(toNormalizeInput(input))
    );
    setFilteredCompaniesByPlace(searchResultByPlace);
  }

  return (
    <div className="bodybg">
      <Navbar />
      <div className="mx-5 pt-5 px-5">
        <div style={{ width: "99%" }} className="row pt-5 mt-5">
          <SearchBar
            filterCompaniesByName={filterCompaniesByName}
            filterCompaniesByPlace={filterCompaniesByPlace}
            setSearchToggle={setSearchToggle}
            searchToggle={searchToggle}
            setOpportunityNumber={setOpportunityNumber}
          />
        </div>
        <div className="row pt-4 mt-2">
          <h2
            style={{
              fontWeight: "600",
              fontSize: "1.2rem",
            }}
          >
            <span
              style={{
                borderBottom: "3px solid #2665FE",
                paddingBottom: "3px",
              }}
            >
              {/* Aqui, está sendo sublinhado */}
              Encontra
            </span>
            mos {opportunityNumber} oportunidades cadastradas
          </h2>
        </div>
        <div className="row cardMobile">
          <AllCards
            currentPage={0}
            setOpportunityNumber={setOpportunityNumber}
            filteredCompaniesByName={filteredCompaniesByName}
            filteredCompaniesByPlace={filteredCompaniesByPlace}
            searchToggle={searchToggle}
          />
        </div>
      </div>
      <footer>
        <PageBrowser pageRef={pageRef} />
      </footer>
    </div>
  );
}
