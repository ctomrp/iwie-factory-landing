import React from 'react';

function ServiceSection2() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-12 md:pt-20 border-t border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos-id-cta>

            {/* Section header */}
            <h1 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-cta]">Análisis y procesamiento de datos </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-cta]">Este servicio nos permite procesar información con cámaras, sensores y softwares que capturan datos de alta calidad y precisión sobre diferentes variables, como el terreno, el clima y la vegetación.</p>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-cta]">Esta información se envía a una plataforma en la nube, donde se almacena y se analiza mediante técnicas de inteligencia artificial, generando un detallado informe de mapas, gráficos y estadísticas.</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection2;
