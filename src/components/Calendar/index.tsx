import React from "react";
import "./index.css";

export function Calendar() {
  const data = new Date();

  return (
    <div className="containerC">
      <div className="boxdata">
        <h2>{data.toDateString()}</h2>
        <div>
          <p>&lt;</p>
          <p>&gt;</p>
        </div>
      </div>
      <div className="diasSem">
        <div className="dia">
          <p className="sem">D</p>
          <p className="num">29</p>
        </div>
        <div className="dia">
          <p className="sem">S</p>
          <p className="num">30</p>
        </div>
        <div className="dia">
          <p className="sem">T</p>
          <p className="num">31</p>
        </div>
        <div className="dia">
          <p className="sem">Q</p>
          <p className="num">01</p>
        </div>
        <div className="dia">
          <p className="sem">Q</p>
          <p className="num">02</p>
        </div>
        <div className="dia">
          <p className="sem">S</p>
          <p className="num">03</p>
        </div>
        <div className="dia">
          <p className="sem">S</p>
          <p className="num">04</p>
        </div>
      </div>
    </div>
  );
}
