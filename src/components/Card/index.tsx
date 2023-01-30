import React from "react";
import "./index.css"

export default function Card(props) {
    return (
        
        <div className="posts">
            <div className="titulo">
                <h2>{props.a}</h2>
                <p>08:30</p>
            </div>
            <div className="assunto">
              <p>Assunto</p>

            </div>
            <div className="rodape">
                <div className="data">data
                <p>data</p>
                </div>
                <input type="checkbox" name="" id="checkbox"/>
            </div>
        </div>
    )
}