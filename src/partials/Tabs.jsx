import React from 'react';

import product1 from '/product1.jpg'
import product2 from '/product2.png'
import product3 from '/product3.png'

function Tabs() {
  return (
    <section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2
              className="h2 mb-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Nuestros productos más populares
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <img src={product1} alt="pieza de repuesto" className='mx-auto mb-3 rounded-md' />
              <div className="flex justify-evenly gap-5 mb-3">
              <span className="text-white bg-purple-400 rounded-full px-3 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Hélices
                </span>
                <span className="text-white bg-blue-400 rounded-full px-3 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Agras Serie T
                </span>
              </div>
              <h2 className='text-center mx-auto font-black text-xl text-gray-400 w-4/5'>Hélices para drones DJI Agras T30 y T40</h2>
              <p className='text-gray-400 text-justify w-4/5 mx-auto'>
              Entre nuestros productos más vendidos se encuentran estas hélices de gran calidad y durabilidad. Conoce nuestras ofertas y vuela con confianza.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={product2} alt="pieza de repuesto" className='mx-auto mb-3 rounded-md' />
              <div className="flex justify-evenly gap-5 mb-3">
              <span className="text-white bg-pink-400 rounded-full px-3 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Bombas
                </span>
                <span className="text-white bg-blue-400 rounded-full px-3 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Agras Serie T
                </span>
              </div>
              <h2 className='text-center mx-auto font-black text-xl text-gray-400 w-4/5'>Bombas de émbolo para drones DJI Agras T30</h2>
              <p className='text-gray-400 text-justify w-4/5 mx-auto'>
              Siendo este modelo de dron uno de los más utilizados en la industria, nos mantenemos al día con las necesidades de nuestros clientes.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={product3} alt="pieza de repuesto" className='mx-auto mb-3 rounded-md' />
              <div className="flex justify-evenly gap-5 mb-3">
              <span className="text-white bg-purple-400 rounded-full px-3 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Motores
                </span>
                <span className="text-white bg-teal-400 rounded-full px-3 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Agras Serie T
                </span>
              </div>
              <h2 className='text-center mx-auto font-black text-xl text-gray-400 w-4/5'>Motores para drones DJI Agras T40</h2>
              <p className='text-gray-400 text-justify w-4/5 mx-auto'>
                La confiable tecnología de estos motores, combinada con nuestro excelente servicio y accesibles precios, te brindarán la mayor seguridad.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
