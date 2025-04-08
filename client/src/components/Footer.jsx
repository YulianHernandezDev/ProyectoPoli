// src/Footer.jsx
import React from 'react';
import '../assets/style/Footer.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section1">
        </div>
        <div className="footer-section">
          <h3>Susalud</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor neque et lorem tincidunt tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis. </p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i>  Facebook</a>
            <a href="#"><i className="fab fa-twitter"></i>  Instagram</a>
            <a href="#"><i className="fab fa-instagram"></i>  LinkedIn</a>
            <a href="#"><i className="fab fa-twitter"></i>  Twitter</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contactos</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-whatsapp"></i>  Facebook</a>
            <a href="#"><i className="fa-solid fa-map-location-dot"></i>  Instagram</a>
            <a href="#"><i className="fa-solid fa-phone"></i>  LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Terminos y Condiciones</h3>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-internet-explorer"></i>  Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Susalud. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;