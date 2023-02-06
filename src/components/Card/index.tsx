import React from "react";
import "./index.css";
import AnnotationService from "../../services/annotationService";
import { useNavigate } from "react-router-dom";

export function Card(props) {
  const annotation = props.data;
  const id = annotation.id;
  const url = "/annotation/update/" + id;
  const day = annotation.createdAt;
  const navigate = useNavigate();

  function excluiAnnotation(id) {
    AnnotationService.delete(id).then(() => {
      alert("Annotation deleted");
      navigate("/");
    });
  }

  return (
    <div className="card">
      <div className="titulo">
        <h2>{annotation.title}</h2>
        <p>08:30</p>
      </div>
      <div className="assunto">
        <p>{annotation.content}</p>
      </div>
      <div className="rodapeCard">
        <div className="data">
          <p>{day}</p>
        </div>
        <input type="checkbox" name="" id="checkbox" checked />
      </div>
      <a href={url}>
        <input type="button" className="editar" value="Editar" />
      </a>
      <button onClick={() => excluiAnnotation(id)}>Excluir</button>
    </div>
  );
}
