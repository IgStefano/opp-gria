import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
    setShowMenu(!showMenu);
  }

  return (
    <div className="position-fixed w-100 pb-5">
      <div className="navbar bg-dark text-light d-flex justify-content-between px-4">
        <div>Gria</div>
        {/* Aqui será uma imagem */}
        <div className="d-flex justify-content-between">
          <ul className="list-inline pe-5">
            <li>
              <button className="btn btn-light">
                <span>Oportunidades</span>
              </button>
            </li>
          </ul>
          <ul className="list-inline pe-5">
            <li>
              <div className="btn btn-light" onClick={handleClick}>
                <span>Login</span>
                {showMenu ? (
                  <div className="menu d-flex flex-column">
                    <button className="btn btn-dark my-1"> Candidato </button>
                    <button className="btn btn-dark my-1"> Empresa </button>
                  </div>
                ) : null}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
