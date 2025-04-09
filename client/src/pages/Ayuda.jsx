import React, { useState } from 'react';
import Acordeon from '../components/Acordeon';

const Ayuda = () => {
    return (
      <div>
        <h1>Preguntas Frecuentes</h1>
        <div className="page-container">
          <Acordeon />
        </div>
      </div>
    );
  };
  
  export default Ayuda; // Esta línea es crucial