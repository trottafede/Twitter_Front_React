import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

import NavbarUser from "./NavbarUser";
import TwittearButton from "./TwittearButton";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>{" "}
            <span className="navTextToHide">Inicio</span>
          </Link>
        </li>
        <li className="disabled">
          <Link to="/explorar">
            <i className="fas fa-hashtag"></i>{" "}
            <span className="navTextToHide">Explorar</span>
          </Link>
        </li>
        <li className="disabled">
          <Link to="/notificaciones">
            <i className="far fa-bell"></i>{" "}
            <span className="navTextToHide">Notificaciones</span>
          </Link>
        </li>
        <li className="disabled">
          <Link to="/mensajes">
            <i className="far fa-envelope"></i>{" "}
            <span className="navTextToHide">Mensajes</span>
          </Link>
        </li>
        <li className="disabled">
          <Link to="/bookmarks">
            <i className="far fa-bookmark"></i>{" "}
            <span className="navTextToHide">Guardados</span>
          </Link>
        </li>
        <li className="disabled">
          <Link to="/listas">
            <i className="far fa-list-alt"></i>{" "}
            <span className="navTextToHide">Listas</span>
          </Link>
        </li>
        <li>
          <Link to="/users/user.username">
            <i className="far fa-user"></i>{" "}
            <span className="navTextToHide">Perfil</span>
          </Link>
        </li>
        <li className="disabled">
          <Link to="/options">
            <i className="fas fa-angle-double-right"></i>{" "}
            <span className="navTextToHide">Más opciones</span>
          </Link>
        </li>
      </ul>
      <div id="buttonHome">
        <a
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#twittearModal"
          href="/"
          draggable="false"
        >
          <span id="twitterText">Twittear</span>
          <span id="twitterFeather">
            <i className="fas fa-feather-alt"></i>
          </span>
        </a>
      </div>
      <TwittearButton />
      <NavbarUser />
    </nav>
  );
}
