import React, { useState } from 'react';
import '../assets/style/Ubicacion.css';

const ContactoFAQ = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      descripcion: '',
      aceptaTerminos: false
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Formulario enviado:', formData);
      alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
    };
  
    return (
      <div className="contacto-faq-container">
  
        <section className="form-section">
          <h2>Déjanos tus datos</h2>
          <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="terminos"
              name="aceptaTerminos"
              checked={formData.aceptaTerminos}
              onChange={handleChange}
              required
            />
            <label htmlFor="terminos">Acepto términos y condiciones</label>
          </div>

          <button type="submit" className="submit-btn">Registrar</button>
          </form>
        </section>
  
        <section className="map-section">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.78593150804!2d-74.0839056847346!3d4.632622996633029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3e0e5b1f3b%3A0x9d0b9c9c9c9c9c9c!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="600px" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Mapa de ubicación Susalud"
            ></iframe>
          
            <div className="social-below-map">
              <div className="social-icons1">
                <a href="#" className="social-icon"><i className="fa-brands fa-whatsapp"></i>    3232497278</a>
                <a href="#" className="social-icon"><i className="fa-solid fa-map-location"></i> XXXX</a>
                <a href="#" className="social-icon"><i className="fa-solid fa-phone-volume"> </i> 33333333333</a>
              </div>
            </div>
          </div>
        </section>
  
  
      </div>
    );
  };

export default ContactoFAQ;