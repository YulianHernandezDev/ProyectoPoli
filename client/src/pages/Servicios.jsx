import React from 'react';
import '../assets/style/Servicios.css';

import afpIcon from '../assets/img/logo.png';
import ccffIcon from '../assets/img/logo.png';
import epsIcon from '../assets/img/logo.png';
const Servicios = () => {
    return (
      <div>
        <h1>Nuestros Servicios</h1>
        <main className="servicios-main">
          <section className="servicio-card">
            <div className="servicio-icon">
              <img src={afpIcon} alt="AFP Icon" />
            </div>
            <div className="servicio-content">
              <h2>Fondo de pensiones (AFP)</h2>
              <p>Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión</p>
              <button className="servicio-btn">Más detalles</button>
            </div>
          </section>

          <section className="servicio-card">
            <div className="servicio-icon">
              <img src={ccffIcon} alt="CCFF Icon" />
            </div>
            <div className="servicio-content">
              <h2>Caja de compensación (CCFF)</h2>
              <p>Beneficios y compensaciones familiares Beneficios y compensaciones familiares Beneficios y compensaciones familiares Beneficios y compensaciones familiares</p>
              <button className="servicio-btn">Más detalles</button>
            </div>
          </section>
      </main>
      <main className="servicios-main">

          <section className="servicio-card">
            <div className="servicio-icon">
              <img src={ccffIcon} alt="CCFF Icon" />
            </div>
            <div className="servicio-content">
              <h2>Caja de compensación (CCFF)</h2>
              <p>Beneficios y compensaciones familiares Beneficios y compensaciones familiares Beneficios y compensaciones familiares Beneficios y compensaciones familiares</p>
              <button className="servicio-btn">Más detalles</button>
            </div>
          </section>
      </main>
      <main className="servicios-main">
          <section className="servicio-card">
            <div className="servicio-icon">
              <img src={afpIcon} alt="AFP Icon" />
            </div>
            <div className="servicio-content">
              <h2>Fondo de pensiones (AFP)</h2>
              <p>Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión</p>
              <button className="servicio-btn">Más detalles</button>
            </div>
          </section>

          <section className="servicio-card">
            <div className="servicio-icon">
              <img src={ccffIcon} alt="CCFF Icon" />
            </div>
            <div className="servicio-content">
              <h2>Caja de compensación (CCFF)</h2>
              <p>Beneficios y compensaciones familiares Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión Gestión y administración de sus fondos de pensión</p>
              <button className="servicio-btn">Más detalles</button>
            </div>
          </section>
      </main>
      </div>
    );
  };
  
  export default Servicios; // Esta línea es crucial