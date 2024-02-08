import React from 'react';

import HeroImage from '../images/about-us-header.jpg';

function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0">
              <img className="w-full h-full object-cover" src={HeroImage} width="1440" height="394" alt="About" />
        <div className="absolute inset-0 bg-gray-900 opacity-75" aria-hidden="true"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">¿Quiénes somos?</h1>
            <p className="text-xl text-gray-400">Iwie Agro es una empresa que se crea en el año 2019, sus pilares fundamentales son el poder incorporar la tecnologia a los diferentes procesos de la agricultura. </p>
            <br />
            <p className="text-xl text-gray-400">La agricultura digital es el uso de tecnologías digitales para mejorar la eficiencia y la productividad en la agricultura. El uso de drones, sensores, análisis de datos, inteligencia artificial y otras tecnologías para ayudar a los agricultores a tomar decisiones informadas sobre el manejo de sus cultivos. La agricultura digital ayuda a los agricultores a monitorear el clima, el suelo y otros factores que pueden afectar la producción de cultivos, convirtiéndose en una herramienta valiosa para mejorar la sostenibilidad y la rentabilidad de la agricultura, así como para reducir el impacto ambiental de la agricultura.</p>
            
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroAbout;