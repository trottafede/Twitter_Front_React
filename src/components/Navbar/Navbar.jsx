import "./Navbar.css";
import React from "react";
import NavbarUser from "./NavbarUser";
import TwittearButton from "./TwittearButton";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-home"></i> Inicio
          </a>
        </li>
        <li className="disabled">
          <i className="fas fa-hashtag"></i> <a href="/">Explorar</a>
        </li>
        <li className="disabled">
          <i className="far fa-bell"></i> <a href="/">Notificaciones</a>
        </li>
        <li className="disabled">
          <i className="far fa-envelope"></i> <a href="/">Mensajes</a>
        </li>
        <li className="disabled">
          <i className="far fa-bookmark"></i> <a href="/">Guardados</a>
        </li>
        <li className="disabled">
          <i className="far fa-list-alt"></i> <a href="/">Listas</a>
        </li>
        <li>
          <a href="/users/<%- passportUser.username %>">
            <i className="far fa-user"></i> Perfil
          </a>
        </li>
        <li className="disabled">
          <i className="fas fa-angle-double-right"></i>
          <a href="/">Más opciones</a>
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
          Twittear
        </a>
      </div>
      <TwittearButton />
      <NavbarUser />
    </nav>
  );
}
