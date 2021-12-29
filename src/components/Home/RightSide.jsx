import "./RightSide.css";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Link } from "react-router-dom";
import Follow from "../Follow";

export default function RightSide() {
  const [users, setUsers] = useState([]);
  const { token } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BACKEND}/api/timeline`;
    const fetchTimeline = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(() => response.data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTimeline();
    return () => {};
  }, [token, user]);

  return (
    <div>
      <div id="buscador" className="form-floating">
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Buscar en twitter"
        />
        <label htmlFor="search">
          <i className="fas fa-search"></i> Buscar en Twitter
        </label>
      </div>

      <div id="tendencias">
        <h3>Tendencias para ti</h3>

        <div className="noticia">
          <p>Politíca - Tendencias</p>
          <h4>Ortega</h4>
          <p>36,3 mil Tweets</p>
        </div>

        <div className="noticia">
          <p>Tendencia en Uruguay</p>
          <h4>URSS</h4>
          <p>2.093 Tweets</p>
        </div>

        <div className="noticia">
          <p>Tendencia en Uruguay</p>
          <h4>#Arcane</h4>
          <p>120 mil Tweets</p>
        </div>

        <div className="noticia">
          <p>Entretenimiento - Tendencias</p>
          <h4>#Eternals</h4>
          <p>36,3 mil Tweets</p>
        </div>

        <div className="noticia">
          <p>Tendencia en Uruguay</p>
          <h4>Teletón</h4>
          <p>6.678 Tweets</p>
        </div>
        <a href="/">Mostrar más</a>
      </div>

      <div id="whoToFollow">
        <h3>A quién seguir</h3>

        {users.length >= 1 ? (
          users.map((User) => (
            <div key={uuidv4()} className="toFollow">
              <img
                src={User.image}
                alt={User.firstname + " " + User.lastname}
              />
              <div id="userInfo">
                <h5>
                  <Link to={`/users/${User.username}`}>
                    {User.firstname.substr(0, 1) +
                      ". " +
                      User.lastname.substr(0, 6)}
                  </Link>

                  <i
                    style={{ color: "skyBlue" }}
                    className="fa fa-check-circle"
                  ></i>
                </h5>
                <p>@{User.username}</p>
                <p>People</p>
              </div>
              <div id="followBtn">
                <Follow User={User} />
              </div>
            </div>
          ))
        ) : (
          <a href="/"> No hay usuarios para seguir</a>
        )}
        <a href="/">Mostrar más</a>
      </div>

      <div id="copyright">
        <p>Condiciones de Servicio Política de Privacidad</p>
        <p>
          Política de cookies Información de anuncios
          <br />
          Más opciones © 2021 Twitter, Inc.
        </p>
      </div>
    </div>
  );
}
