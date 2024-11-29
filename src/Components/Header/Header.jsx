import './Header.css'
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <h2>ScheduleTime 🕐🖐</h2>
      <nav>
        <ul>
          <li><Link to="Home">Home</Link></li>
          <li><Link to="Sobre">Contato</Link></li>
          <li><Link to="entrar">Entrar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
