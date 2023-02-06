import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import "./index.css";
import Neko from "../../../assets/image/neko.jpg";
import { useNavigate } from "react-router-dom";

export function ProfileUser() {
  const auth = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/user/edit");
  }

  return (
    <div>
      <Header />
      <div className="containerU">
        <div id="profile">
          <div className="profile-header">
            {auth.imageUrl ? (
              <img src={auth.imageUrl} className="image-profile" />
            ) : (
              <img src={Neko} />
            )}

            <div className="profile-description">
              <h2>{auth.name}</h2>
            </div>
          </div>
        </div>
        <Button onClick={handleClick} variant="outlined">
          Editar
        </Button>
      </div>
    </div>
  );
}
