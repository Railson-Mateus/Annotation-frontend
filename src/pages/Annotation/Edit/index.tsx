import React, { useEffect, useState } from "react";
import "./index.css";
import AnnotationService from "../../../services/annotationService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import Header from "../../../components/Header";

export default function EditAnnotation() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [important, setImportant] = useState(true);
  const [categoty, setCategory] = useState("Study");

  const url = window.location.pathname.split("/");
  const id = url[3];

  useEffect(() => {
    AnnotationService.getAnnotationById(id).then((res) => {
      const annotation = res.data.annotation;
      setTitle(annotation.title);
      setContent(annotation.content);
      setImportant(annotation.important);
      setCategory(annotation.category);
    });
  }, []);

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

    AnnotationService.update(id, Annotation);
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="myAnotations">
        <h2>Editar Anotações</h2>
        <div className="posts">
          <div className="titulo">
            <input
              type="text"
              name="tituloDocument"
              id="tituloDocument"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Insira um Titulo"
            />
          </div>
          <div className="assunto">
            <textarea
              name="assunto"
              id="assunto"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Assunto"
            ></textarea>
          </div>
          <div className="rodape">
            <div className="data">
              <input type="date" name="date" id="date" />
            </div>
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
            <input
              type="button"
              className="salvar"
              value="Salvar"
              onClick={handleSubmit}
            />
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
