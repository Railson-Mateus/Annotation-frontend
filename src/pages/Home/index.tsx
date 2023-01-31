import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./index.css";
import { List } from "../../components/List/index";
import AnnotationService from "../../services/annotationService";

export default function Home() {
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    AnnotationService.list().then((annotations) => {
      setAnnotations(annotations);
    });
  });

  return (
    <div className="homeContainer">
      <Header />
      <List value={annotations} />
    </div>
  );
}
