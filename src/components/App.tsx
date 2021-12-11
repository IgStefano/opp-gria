import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Opportunities from "./Opportunities";
import OpportunitiesPage2 from "./OpportunitiesPage2";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      {/* Usei o React Router para organizar os componentes. Todas as rotas redirecionam ao componente "Opportunities", exceto a /opportunities/2, que redireciona para segunda página */}
      {
        <Routes>
          <Route path="/opportunities/" element={<Opportunities />} />

          {/* Especificar o /1 é importante nessa rota para permitir a navegação entre as páginas de maneira de simples entendimento */}
          <Route path="/opportunities/1" element={<Opportunities />}></Route>

          <Route path="/opportunities/2/" element={<OpportunitiesPage2 />} />

          {/* Not Found para redirecionar URLs não encontradas à página principal */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
    </div>
  );
}

export default App;
