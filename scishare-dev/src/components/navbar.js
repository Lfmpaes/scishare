import React from "react";
import userIcon from "./user-icon.svg";
import "./navbar.css";

class navbar extends React.Component {
  // state = {  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand align-middle" href="#" id="siteName">
          ScienceShare
        </a>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item align-middle">
            <a className="nav-link" href="#">
              Início
            </a>
          </li>
        </ul>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <img
              src={userIcon}
              className="navbar-item"
              alt="user"
              id="navbar-usericon"
            />
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton">
            <h6 class="dropdown-header">Usuário</h6>
            <a class="dropdown-item" href="#">
              Perfil
            </a>
            <a class="dropdown-item" href="#">
              Configurações
            </a>
            <a class="dropdown-item" href="#">
              Ajuda
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Encerrar sessão
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
