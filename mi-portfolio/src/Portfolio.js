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
      <section className="section">
        <h2 className="section-title">Proyecto Spring</h2>
        <p className="section-content">
          Este pequeño proyecto es una api creada con spring que se encarga del inicio de sesion en una aplicacion utilizando ademas autentificacion por rol.
        </p>
        br
        <p><a href="https://github.com/aitorgl52/spring-api-registro-usuarios">Api inicio de sesion</a></p>
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
