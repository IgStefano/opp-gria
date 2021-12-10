import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/opportunities/");
  });

  return (
    <div className="d-flex justify-content-center align-items-center h-100 w-100">
      <h1>Página não encontrada. Redirecionando...</h1>
    </div>
  );
}
