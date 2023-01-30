import React from "react";
import "./index.css"
import neko from "../../assets/image/neko.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="user">
                <img src = {neko}/>
                    <div className="dados">
                        <h3 className="nome">
                        </h3>
                        <p className="data"></p>
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
                        <li><a href="#"><i className='bx bx-home-alt bx-lg'></i>
                            <p>home</p>
                        </a></li>
                        <li><a href="#"><i className='bx bx-notepad bx-lg'></i>
                            <p>New notes</p>
                        </a></li>
                        <li><a href="#"><i className='bx bx-user'></i>
                            <p>Perfil</p>
                        </a></li>
                        <li><a href="#"><i className='bx bx-cog'></i>
                            <p>Annotations</p>
                        </a></li>
                    </ul>
                </nav>
            </div>

            <div className="logout">
                <i className='bx bx-log-out bx-lg'></i>
            </div>
        </div>
    )
}