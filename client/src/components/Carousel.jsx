// src/Carousel.jsx
import React, { useState, useEffect } from 'react';
import '../assets/style/Carousel.css';

// 1. Importa todas las imágenes directamente
import slide1 from '../assets/img/carousel/Slide 1.png'; // Asegúrate de que la ruta sea correcta
import slide2 from '../assets/img/carousel/Slide 2.png'; // Importa slide2
import slide3 from '../assets/img/carousel/Slide 3.png'; // Ya tienes esta importación

// 2. Crea el array de imágenes importadas
const imageImports = [slide1, slide2, slide3];

const Carousel = () => { // 3. Elimina la prop 'images' ya que usamos las importadas
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === imageImports.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [imageImports.length]); // 4. Usa imageImports.length

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageImports.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageImports.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrev}>&#10094;</button>
      <div className="carousel-slide">
        <img 
          src={imageImports[currentIndex]} // 5. Usa imageImports en lugar de images
          alt={`Slide ${currentIndex + 1}`} 
        />
      </div>
      <button className="carousel-button next" onClick={goToNext}>&#10095;</button>
      <div className="carousel-indicators">
        {imageImports.map((_, index) => ( // 6. Mapea imageImports
          <span 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;