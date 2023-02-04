import React from "react";
import "./index.css";

export function EditAnnotation() {
  return (
    <div className="myAnotations">
      <h2>Editar Anotations</h2>
      <div className="posts">
        <div className="titulo">
          <input
            type="text"
            name="tituloDocument"
            id="tituloDocument"
            placeholder="Insira um Titulo"
          />
        </div>
        <div className="assunto">
          <textarea
            name="assunto"
            id="assunto"
            placeholder="Assunto"
          ></textarea>
        </div>
        <div className="rodape">
          <div className="data">
            <input type="date" name="date" id="" /></div>
          <input type="button" value="Apagar" />
          <input type="button" value="Salvar"></input>
          <p>Important <input type="checkbox" name="" id="checkbox" /></p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
