import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Opportunities from "./Opportunities";

function App() {
  return (
    <div>
      {
        <Routes>
          <Route path="/opportunities/" element={<Opportunities />} />

          <Route path="/opportunities/:page?" element={<Opportunities />} />
        </Routes>
      }
    </div>
  );
}

export default App;
