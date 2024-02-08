import React from 'react';

function ServiceSection1() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-12 md:pt-20 border-t border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos-id-cta>

            {/* Section header */}
            <h1 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-cta]">Agro insumos</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-cta]">Proporcionamos productos agrícolas para los recursos necesarios para el desarrollo de tus cultivos, tales como semillas, fertilizantes, pesticidas, maquinaria de igual forma ofrecemos un servicio personalizado, según las necesidades y preferencias de cada cliente.</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection1;
