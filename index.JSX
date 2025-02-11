import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Aitor García</h1>
        <p className="text-lg text-gray-400 mt-4">Desarrollador Full-Stack | Angular & Spring Boot</p>
      </section>

      {/* About Me */}
      <section className="px-10 md:px-20 lg:px-40 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 border-gray-600">Sobre mí</h2>
        <p className="text-gray-300 mt-4">
          Me especializo en desarrollo web con Angular y Spring Boot. Me apasiona crear aplicaciones eficientes y escalables.
        </p>
      </section>

      {/* Experience */}
      <section className="px-10 md:px-20 lg:px-40 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 border-gray-600">Experiencia</h2>
        <div className="mt-4">
          <h3 className="text-xl font-medium">MellT Technologies, S.L</h3>
          <p className="text-gray-400">Desarrollador Full-Stack Junior (03/2023 - 09/2024)</p>
          <p className="text-gray-300 mt-2">
            Desarrollo de aplicaciones CRM con Angular y Spring Boot, trabajando tanto en frontend como en backend. Mantenimiento de una aplicación en PHP con CodeIgniter y jQuery.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-10 md:px-20 lg:px-40 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 border-gray-600">Habilidades</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <li className="bg-gray-800 p-3 rounded">Angular</li>
          <li className="bg-gray-800 p-3 rounded">Spring Boot</li>
          <li className="bg-gray-800 p-3 rounded">Tailwind CSS</li>
          <li className="bg-gray-800 p-3 rounded">MySQL</li>
          <li className="bg-gray-800 p-3 rounded">TypeScript</li>
          <li className="bg-gray-800 p-3 rounded">JPA & Hibernate</li>
          <li className="bg-gray-800 p-3 rounded">CodeIgniter</li>
          <li className="bg-gray-800 p-3 rounded">jQuery</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="px-10 md:px-20 lg:px-40 py-10 text-center">
        <h2 className="text-3xl font-semibold border-b pb-2 border-gray-600">Contacto</h2>
        <p className="text-gray-300 mt-4">Correo: <a href="mailto:aitorgl52@gmail.com" className="text-blue-400">aitorgl52@gmail.com</a></p>
        <p className="text-gray-300 mt-2">Ubicación: Rivas-Vaciamadrid</p>
      </section>
    </div>
  );
};

export default Portfolio;
