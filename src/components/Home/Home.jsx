import "./Home.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";
export default function Home() {
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
          <MiddleSide />
        </div>
        <div class="col-lg-3">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
