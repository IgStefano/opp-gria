import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import AllCards from "./AllCards";
import data from "../mock-json/mock.json";
import PageBrowser from "./PageBrowser";

export default function Opportunities() {
  const opportunityNumber = data.length;

  return (
    <div>
      <Navbar />
      <div className="container pt-5">
        <SearchBar />
        <h2>Encontramos {opportunityNumber} oportunidades cadastradas</h2>
        <AllCards />
      </div>
      <PageBrowser />
    </div>
  );
}
