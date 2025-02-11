import React from "react";
import './Portfolio.css'; // Importa el archivo CSS

const Portfolio = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Aitor García</h1>
        <p>Desarrollador Full-Stack | Angular & Spring Boot</p>
      </section>

      {/* About Me */}
      <section className="section">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-content">
          Me especializo en desarrollo web con Angular y Spring Boot. Me apasiona crear aplicaciones eficientes y escalables.
        </p>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h2 className="section-title">Contacto</h2>
        <p className="section-content">
          Correo: <a href="mailto:aitorgl52@gmail.com">aitorgl52@gmail.com</a>
        </p>
        <p className="section-content">Ubicación: Rivas-Vaciamadrid</p>
      </section>
    </div>
  );
};

export default Portfolio;
