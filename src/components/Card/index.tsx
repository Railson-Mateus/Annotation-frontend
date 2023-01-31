import React from "react";
import "./index.css";

export function Card(props) {
  const annotation = props.data;
  const url = "/annotation/update/" + annotation.id;
  const day = annotation.createdAt;

  return (
    <div className="card">
      <a href={url}>Editar</a>
      <div className="titulo">
        <h2>{annotation.title}</h2>
        <p>08:30</p>
      </div>
      <div className="assunto">
        <p>{annotation.content}</p>
      </div>
      <div className="rodape">
        <div className="data">
          <p>{day}</p>
        </div>
        <input type="checkbox" name="" id="checkbox" checked />
      </div>
    </div>
  );
}
