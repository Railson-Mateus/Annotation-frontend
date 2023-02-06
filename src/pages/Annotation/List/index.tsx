import React, { useEffect, useState } from "react";
import { Calendar } from "../../../components/Calendar";
import "./index.css";
import AnnotationService from "../../../services/annotationService";
import { List } from "../../../components/List";
import { TextField } from "@mui/material";
import Header from "../../../components/Header";

export function ListAnnotations() {
  const [annotations, setAnnotations] = useState([]);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      AnnotationService.getSearchAnnotation(search).then((annotations) => {
        setAnnotations(annotations);
      });
    }
  }

  return (
    <div className="container">
      <Header />
      <Calendar />
      <div className="search">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <List value={annotations} />
    </div>
  );
}
