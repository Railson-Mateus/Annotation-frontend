import React, { useState } from "react";
import "./index.css";

export function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main">
    
    <div id="form-login">
      <div id="submenu">
        
        <a href="/login"><h4>LOGIN</h4></a>
        
        <h4 id="currentPage">CADASTRAR-SE</h4>
      </div>
      
      <form>
      <fieldset className="field">
          <legend>Nome</legend>
          <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} required/>
        </fieldset>

        <fieldset className="field">
          <legend>Email</legend>
          <input type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
        </fieldset>

        <fieldset className="field">
          <legend>Senha</legend>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </fieldset>

        <button id="btn-submit" type="submit">CADASTRAR</button>
      </form>
    </div>
  </div>
  );
}
