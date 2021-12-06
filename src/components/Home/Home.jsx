import "./Home.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import TweetsHome from "./TweetsHome";
export default function Home() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-1 col-sm-1 col-1">
          <Navbar />
        </div>
        <div
          id="middleSideHome"
          className="col-lg-6 col-md-11 col-sm-11 col-11"
        >
          <div id="inicio">
            <h1>Inicio</h1>
          </div>

          {user && (
            <div id="QueEstasPensando">
              <div className="row">
                <div className="col-lg-2">
                  <img
                    src={user.image}
                    alt={user.firstname + " " + user.lastname}
                  />
                </div>
                <div className="col-lg-10">
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Qué estás pensando?"
                      name="tweet"
                      id="tweet"
                    />
                    <p>Cualquier persona puede responder</p>
                    <hr />
                    <div className="d-flex justify-content-around">
                      <i className="far fa-image"></i>
                      <i className="fas fa-gift"></i>
                      <i className="fas fa-question"></i>
                      <i className="fas fa-smile-beam"></i>
                      <i className="fas fa-calendar-times"></i>

                      <button className="btn btn-primary">Twittear</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          )}

          <TweetsHome />
          {/* Right side */}
        </div>
      </div>
    </div>
  );
}
