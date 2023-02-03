import React from "react";
import "./index.css";
import neko from "../../assets/image/neko.jpg";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    auth.logout();
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="user">
        <img src={auth.imageUrl} />
        <div className="dados">
          <h3 className="nome">{auth.name}</h3>
        </div>
      </div>
      <div className="menu">
        <nav className="navMenu">
          <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#">
                <i className="bx bx-home-alt bx-lg"></i>
                <p>home</p>
              </a>
            </li>
            <li>
              <a href="/annotation/new">
                <i className="bx bx-notepad bx-lg"></i>
                <p>New notes</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-user"></i>
                <p>Perfil</p>
              </a>
            </li>
            <li>
              <a href="/annotations">
                <i className="bx bx-cog"></i>
                <p>Annotations</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="logout">
        <button onClick={handleClick}>
          <i className="bx bx-log-out bx-lg">Logout</i>
        </button>
      </div>
    </div>
  );
}
