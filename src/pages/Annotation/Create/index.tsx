import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import AnnotationService from "../../../services/annotationService";
import "./index.css";

export function CreateAnnotation() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [important, setImportant] = useState(true);
  const [categoty, setCategory] = useState("Study");

  const navigate = useNavigate();

  function Category(e) {
    console.log(e.target.value);
    setCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const Annotation = {
      title: title,
      content: content,
      important: important,
      category: categoty,
    };

    console.log(Annotation);

    AnnotationService.create(Annotation);

    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="myAnotations">
        <h2>MyAnnotations</h2>
        <form className="posts" onSubmit={handleSubmit}>
          <div className="titulo">
            <input
              type="text"
              name="tituloDocument"
              id="tituloDocument"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Insira um Titulo"
            />
          </div>
          <div className="assunto">
            <textarea
              name="assunto"
              id="assunto"
              placeholder="Assunto"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="rodape">
            <span id="category">Categoria</span>
            <div className="category-buttons">
              <input type="text" value="Estudo" />
              <input type="text" value="Trabalho" />
              <input type="text" value="Vida" />
            </div>
            <div id="important">
              <input type="checkbox" name="important" id="checkbox" />
              <span>Importante</span>
            </div>
            <input type="submit" className="salvar" value="Salvar" />
          </div>
        </form>

        <div className="footer"></div>
      </div>
    </div>
  );
}
