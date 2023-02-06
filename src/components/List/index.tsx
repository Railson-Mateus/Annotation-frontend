import React from "react";
import "./index.css";
import { Card } from "../Card/index";

export function List(props) {
  const data = props.value.data;

  return (
    <div className="content-list">
      <ul className="list">
        {data ? (
          data?.map((item, index) => (
            <li key={index}>
              <Card data={item} />
            </li>
          ))
        ) : (
          <p>A pesquisa não retornou resultados</p>
        )}
      </ul>
    </div>
  );
}
