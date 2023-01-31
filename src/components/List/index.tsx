import React from "react";
import "./index.css";
import { Card } from "../Card/index";

export function List(props) {
  const data = props.value.data;

  return (
    <div className="content-list">
      <ul className="list">
        {data?.map((item, index) => (
          <li key={index}>
            <Card data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
