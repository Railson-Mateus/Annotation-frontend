import React from "react";
import "./index.css";

export function Card(props) {
  return (
    <div className="card">
      <div className="titulo">
        <h2>{props.value}</h2>
        <p>08:30</p>
      </div>
      <div className="assunto">
        <p>Assunto</p>
      </div>
      <div className="rodape">
        <div className="data">
          <p>data</p>
        </div>
        <input type="checkbox" name="" id="checkbox" checked />
      </div>
    </div>
  );
}
