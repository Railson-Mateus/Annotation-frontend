import React from "react";
import Header from "../../components/Header";
import "./index.css";
import Card from "../../components/Card";

export default function Home() {
  const a = " qualquer frase "
  return (

    <div>
      <Header/>
      <div>
        <Card value= {a}/> 
      </div>
    </div>
  );
}
