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
          <div className="data">data</div>
          <button type="submit" className="delete">
            Deletar
          </button>
          <button type="submit" className="salvar">
            Salvar
          </button>
          <input type="checkbox" name="" id="checkbox" />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
