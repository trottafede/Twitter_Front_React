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

        <MiddleSide />
        <RightSide />
      </div>
    </div>
  );
}
