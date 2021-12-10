import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import AllCards from "./AllCards";
import data from "../mock-json/mock.json";
import PageBrowser from "./PageBrowser";

export default function OpportunitiesPage2() {
  const [opportunityNumber, setOpportunityNumber] = useState(data.length);

  const [searchToggle, setSearchToggle] = useState(false);

  const pageRef = useRef(2);

  function toNormalizeInput(input: string) {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  const [filteredCompaniesByName, setFilteredCompaniesByName] = useState([{}]);
  const [filteredCompaniesByPlace, setFilteredCompaniesByPlace] = useState([
    {},
  ]);

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
    <div>
      <Navbar />
      <div className="container pt-5">
        <SearchBar
          filterCompaniesByName={filterCompaniesByName}
          filterCompaniesByPlace={filterCompaniesByPlace}
          setSearchToggle={setSearchToggle}
          searchToggle={searchToggle}
          setOpportunityNumber={setOpportunityNumber}
        />
        <h2>Encontramos {opportunityNumber} oportunidades cadastradas</h2>
        <AllCards
          currentPage={1}
          setOpportunityNumber={setOpportunityNumber}
          filteredCompaniesByName={filteredCompaniesByName}
          filteredCompaniesByPlace={filteredCompaniesByPlace}
          searchToggle={searchToggle}
        />
      </div>
      <PageBrowser pageRef={pageRef} />
    </div>
  );
}
