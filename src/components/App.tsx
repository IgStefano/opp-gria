import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Opportunities from "./Opportunities";
import OpportunitiesPage2 from "./OpportunitiesPage2";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      {
        <Routes>
          <Route path="/opportunities/" element={<Opportunities />} />

          <Route path="/opportunities/1" element={<Opportunities />}></Route>
          <Route path="/opportunities/2/" element={<OpportunitiesPage2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
    </div>
  );
}

export default App;
