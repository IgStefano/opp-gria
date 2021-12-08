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
              <button>
                <span>Oportunidades</span>
              </button>
            </li>
          </ul>
          <ul className="list-inline pe-5">
            <li>
              <button onClick={handleClick}>
                <span>Login</span>
                {showMenu ? (
                  <div className="menu">
                    <button> Candidato </button>
                    <button> Empresa </button>
                  </div>
                ) : null}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
