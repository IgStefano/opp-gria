import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import AllCards from "./AllCards";
import data from "../mock-json/mock.json";
import PageBrowser from "./PageBrowser";

export default function Opportunities() {
  const [opportunityNumber, setOpportunityNumber] = useState(data.length);

  const [searchToggle, setSearchToggle] = useState(false);

  const pageRef = useRef(1);

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
      <PageBrowser pageRef={pageRef} />
    </div>
  );
}
