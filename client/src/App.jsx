import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import './assets/style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Ayuda from './pages/Ayuda';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

const App = () => {
  const carouselImages = [
    'https://via.placeholder.com/1200x400?text=Slide+1',
    'https://via.placeholder.com/1200x400?text=Slide+2',
    'https://via.placeholder.com/1200x400?text=Slide+3'
  ];

  return (
    <div className="app">
      <Navbar />
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/help" element={<Ayuda />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/about" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;