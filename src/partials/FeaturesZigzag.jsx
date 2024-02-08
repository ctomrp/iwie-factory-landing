import React from 'react';

import FeatImage01 from '../images/pulverizacion-fertilizacion.jpg';
import FeatImage02 from '../images/fotogrametria-termal.jpg';
import FeatImage03 from '../images/fotogrametria-multiespectral.jpg';

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Pulverización y fertilización</h3>
                  <p className="text-xl text-gray-400 mb-4">Tenemos servicios de pulverización con dron para diferentes tipos de cultivos, como frutales, olivares, viñedos, cereales, hortalizas, etc.</p>
                  <p className="text-xl text-gray-400 mb-4">También se pueden emplear para tratamientos específicos, como la prevención o el control de plagas y enfermedades, la fertilización o el riego.</p>
                  <p className="text-xl text-gray-400 mb-4">Este servicio, el cual ofrece muchas ventajas respecto a los métodos tradicionales, da mayor eficiencia en la optimización de recursos pues, ajustando la dosis, podemos adaptarnos a la forma y altura de su cultivo cubriendo toda la superficie con una distribución homogénea. </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Fotogrametría termal</h3>
                  <p className="text-xl text-gray-400 mb-4">Los servicios de fotogrametría termal son una herramienta muy útil para realizar análisis y mediciones de superficies con variaciones de temperatura.</p>
                  <p className="text-xl text-gray-400 mb-4">Esta consiste en obtener imágenes aéreas o terrestres con cámaras térmicas que captan la radiación infrarroja emitida por los objetos.</p>
                  <p className="text-xl text-gray-400 mb-4">Estas imágenes se procesan con software especializado para generar modelos tridimensionales, mapas de calor, ortofotos y otros productos cartográficos.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width="540" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Fotogrametría multiespectral </h3>
                  <p className="text-xl text-gray-400 mb-4">La fotografía multiespectral consiste en capturar diferente bandas de espectro electromagnético desde el visible hasta el infrarrojo cercano, permitiéndole obtener información detallada sobre el estado de salud, el crecimiento, fertilidad, la presencia de plagas y enfermedades, y otros parámetros para el interés de los agricultores.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;