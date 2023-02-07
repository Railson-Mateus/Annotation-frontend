import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import "./index.css";
import previewImage from "../../../assets/image/neko.jpg";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/userService";
import {
  getUserSessionStorage,
  setUserSessionStorage,
} from "../../../context/AuthProvider/util";

export function EditUser() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (auth.token) {
      setName(auth.name);
      setImage(auth.imageUrl);
      setEmail(auth.email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      imageUrl: image,
      email: email,
      password: password,
    };

    UserService.update(user)
      .then((res) => {
        const u = getUserSessionStorage();

        u.name = res.name;
        u.imageUrl = res.imageUrl;
        u.email = res.email;
        auth.setUser(u)
        setUserSessionStorage(u);
        navigate("/user/perfil");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <div>
      <Header />
      <div id="edit-profile">
        <h2>Edite seus dados</h2>
        <p className="subtitle">Adicione uma imagem de perfil</p>
        {auth.imageUrl ? (
          <img className="profile-image" src={auth.imageUrl} alt={auth.name} />
        ) : (
          <img className="profile-image" src={previewImage} />
        )}
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome do Perfil:</span>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name || ""}
            />
          </label>

          <label>
            <span>Novo email:</span>
            <TextField
              variant="outlined"
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
          </label>

          <label>
            <span>Imagem do Perfil:</span>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Link da image"
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label>
            <span>Quer alterar sua senha ?</span>
            <TextField
              variant="outlined"
              type="password"
              placeholder="Digite sua nova senha"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <Button type="submit" variant="contained" size="small">
            Atualizar
          </Button>
        </form>
      </div>
    </div>
  );
}
