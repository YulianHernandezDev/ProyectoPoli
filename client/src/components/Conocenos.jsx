import React from 'react';
import '../assets/style/Conocenos.css';
import teamImage from '../assets/img/logo.png'; // Imagen de equipo opcional

const Conocenos = () => {
  return (
    <div className="conocenos-container">

      <main className="conocenos-content">
        <section className="about-section">
          <div className="about-card">
            <h2>Misión</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laculis leo faucibus nunc vestibulum fringilla. 
              Aenean a laculis risus, ut finibus purus. Suspendisse cursus nulla eget pretium dapibus. 
              Curabitur ut turpis vel felis imperdiet condimentum et quis urna.
            </p>
          </div>

          <div className="about-card">
            <h2>Visión</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laculis leo faucibus nunc vestibulum fringilla. 
              Aenean a laculis risus, ut finibus purus. Suspendisse cursus nulla eget pretium dapibus. 
              Curabitur ut turpis vel felis imperdiet condimentum et quis urna.
            </p>
          </div>

          <div className="about-card">
            <h2>Historia</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laculis leo faucibus nunc vestibulum fringilla. 
              Aenean a laculis risus, ut finibus purus. Suspendisse cursus nulla eget pretium dapibus. 
              Curabitur ut turpis vel felis imperdiet condimentum et quis urna.
            </p>
          </div>
        </section>

        <section className="company-description">
          <div className="company-image">
            <img src={teamImage} alt="Equipo Susalud" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Conocenos;