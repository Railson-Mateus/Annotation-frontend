import React from "react";
import "./index.css";

export function CreateAnnotation() {
  return (
    <div className="myAnotations">
      <h2>MyAnotations</h2>
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
          <div className="data"><input type="date" name="date" id="date" /></div>
          <input type="button" value="Limpar" />
          <input type="button" className= "salvar" value="Salvar" />
          <p>Important <input type="checkbox" name="" id="checkbox"/></p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
