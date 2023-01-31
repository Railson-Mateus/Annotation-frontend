import React from "react";
import "./index.css";

export function Calendar() {
  const data = new Date();

  return (
    <div className="container">
      <div className="boxdata">
        <h2>{data.toDateString()}</h2>
        <div>
          <p>&lt;</p>
          <p>&gt;</p>
        </div>
      </div>
      <div className="diasSem">
        <div className="dia">
          <p>D</p>
          <p>29</p>
        </div>
        <div className="dia">
          <p>S</p>
          <p>30</p>
        </div>
        <div className="dia">
          <p>T</p>
          <p>31</p>
        </div>
        <div className="dia">
          <p>Q</p>
          <p>01</p>
        </div>
        <div className="dia">
          <p>Q</p>
          <p>02</p>
        </div>
        <div className="dia">
          <p>S</p>
          <p>03</p>
        </div>
        <div className="dia">
          <p>S</p>
          <p>04</p>
        </div>
      </div>
    </div>
  );
}
