// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/Navbar.css';
import logo from '../assets/img/logo.png'; // Ajusta la ruta según donde tengas tu imagen

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Susalud Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/help">Ayuda</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;