import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
    setShowMenu(!showMenu);
  }

  return (
    <div className="position-fixed w-100 navfont">
      <div className="navbar navbarbg text-light d-flex justify-content-between">
        <div className="col-3 d-flex justify-content-center text-align-center">
          <img
            alt="Gria"
            src="https://www.gria.io/static/media/gria-logo-topbar.f3a2419c.svg"
          />
        </div>

        <div className="d-flex justify-content-around col-3 align-items-center mt-1 pe-5 me-5 navbarMenuMobile">
          <ul className="list-inline">
            <li>
              <button className="btn">
                <span style={{ fontSize: "1rem" }} className="navfont">
                  Oportunidades
                </span>
              </button>
            </li>
          </ul>
          <ul className="list-inline ">
            <li>
              <div
                className="btn dropdown-toggle navfont "
                onClick={handleClick}
              >
                <span style={{ fontSize: "1rem" }} className="navfont pe-2">
                  LOGIN
                </span>

                {showMenu ? (
                  <ul
                    style={{ backgroundColor: "#CF1B92" }}
                    className="menu dropdown-menu d-flex flex-column"
                  >
                    <li
                      className="dropdown-item my-1"
                      style={{
                        fontWeight: "500",
                        fontSize: "1rem",
                        backgroundColor: "#CF1B92",
                        color: "white",
                      }}
                    >
                      CANDIDATO
                    </li>
                    <li
                      style={{
                        fontWeight: "500",
                        fontSize: "1.1rem",
                        backgroundColor: "#CF1B92",
                        color: "white",
                      }}
                      className="dropdown-item my-1"
                    >
                      EMPRESA
                    </li>
                  </ul>
                ) : null}
              </div>
            </li>
          </ul>
          <div className="navbarHamburger navbarMenuHamburgerBrowser dropstart pe-5">
            <MenuIcon
              onClick={handleClick}
              className="navbarHamburger"
              data-bs-toggle="dropdown"
            />
            <ul className="list-inline ">
              {showMenu ? (
                <div className="dropstart">
                  <ul
                    style={{ backgroundColor: "#CF1B92" }}
                    className="dropdown-menu d-flex flex-column"
                  >
                    <li
                      className="dropdown-item pe-5"
                      style={{
                        fontWeight: "500",
                        fontSize: "1rem",
                        backgroundColor: "#CF1B92",
                        color: "white",
                      }}
                    >
                      <AccountCircleIcon />
                    </li>
                    <li
                      style={{
                        fontWeight: "500",
                        fontSize: "1rem",
                        backgroundColor: "#CF1B92",
                        color: "white",
                      }}
                      className="dropdown-item my-1"
                    >
                      <BusinessIcon />
                    </li>
                  </ul>
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
