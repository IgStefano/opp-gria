import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import AllCards from "./AllCards";
import data from "../mock-json/mock.json";
import PageBrowser from "./PageBrowser";
import SearchResults from "./SearchResults";

export default function Opportunities() {
  const [opportunityNumber, setOpportunityNumber] = useState(data.length);

  const [searchToggle, setSearchToggle] = useState(false);

  function toNormalizeInput(input: string) {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  const [filteredCompanies, setFilteredCompanies] = useState([{}]);

  function filterCompaniesByName(input: string) {
    const searchResult = data.filter(
      (currentCompany) =>
        toNormalizeInput(currentCompany.nome).includes(
          toNormalizeInput(input)
        ) ||
        toNormalizeInput(currentCompany.cargo).includes(
          toNormalizeInput(input)
        ) ||
        toNormalizeInput(currentCompany.nivel).includes(toNormalizeInput(input))
    );
    console.log(searchResult);
    setFilteredCompanies([...searchResult]);
  }

  function filterCompaniesByPlace(input: string) {
    const searchResult = data.filter((currentCompany) =>
      toNormalizeInput(currentCompany.local).includes(toNormalizeInput(input))
    );
    console.log(searchResult);
    setFilteredCompanies([...searchResult]);
  }

  return (
    <div>
      <Navbar />
      <div className="container pt-5">
        <SearchBar
          companies={data}
          filterCompaniesByName={filterCompaniesByName}
          filterCompaniesByPlace={filterCompaniesByPlace}
          setSearchToggle={setSearchToggle}
          searchToggle={searchToggle}
          setOpportunityNumber={setOpportunityNumber}
        />
        <h2>Encontramos {opportunityNumber} oportunidades cadastradas</h2>
        {!searchToggle ? (
          <AllCards />
        ) : (
          <SearchResults
            setOpportunityNumber={setOpportunityNumber}
            filteredCompanies={filteredCompanies}
            searchToggle={searchToggle}
          />
        )}
      </div>
      <PageBrowser />
    </div>
  );
}
