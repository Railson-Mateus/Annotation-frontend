import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.authenticate(email, password);

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container">
    
    <div id="form-login">
      <div id="submenu">
        <h4 id="title">LOGIN</h4>
        <h4>CADASTRAR-SE</h4>
      </div>
      
      <form onSubmit={handleSubmit}>
        <fieldset className="field">
          <legend>Email</legend>
          <input type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </fieldset>

        <fieldset className="field">
          <legend>Senha</legend>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </fieldset>

        <button id="btn-submit" type="submit">ENTRAR</button>
      </form>
    </div>
  </div>
  );
}
