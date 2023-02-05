import React from "react";
import "./index.css";

export function EditAnnotation() {
  return (
    <div className="myAnotations">
      <h2>Editar Anotações</h2>
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
          <span id="category">Categoria</span>
          <div className="category-buttons">
            <button>Estudo</button>
            <button>Trabalho</button>
            <button>Vida</button>
          </div>
          <div id="important">
            <input type="checkbox" name="" id="checkbox" />
            <span>Importante</span>
          </div>
          <input type="button" className= "salvar" value="Salvar" />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
