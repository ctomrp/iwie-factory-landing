import React from 'react';

import NewsImage10 from '../images/agrast40-features.jpg';
import NewsImage11 from '../images/agrast20-title.png';
import NewsImage12 from '../images/mavic3-features.jpg';

function CaseStudies() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Ventas de drones agrícolas y forestal</h2>
            <p className="text-xl text-gray-400">Con un asesoramiento personalizado le ayudamos a elegir el dron más adecuado a sus necesidades, dependiendo del tipo de cultivo, terreno, clima y objetivos. Máquinas que le ayudarán a mejorar su unidad de trabajo.</p>
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">

            {/* 1st article */}
            <article className="flex flex-col h-full" data-aos="fade-up">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={NewsImage10} width="352" height="198" alt="News 10" />
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="/agras-t40">DJI Agras T40</a>
                </h3>
                <div>
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                    <span className="text-sm">Cotizar ahora</span>
                    <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 2nd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={NewsImage11} width="352" height="198" alt="News 11" />
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="/agras-t20p">DJI Agras T20P</a>
                </h3>
                <div>
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                    <span className="text-sm">Cotizar ahora</span>
                    <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 3rd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={NewsImage12} width="352" height="198" alt="News 12" />
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="/mavic-3">DJI Mavic 3 M</a>
                </h3>
                <div>
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                    <span className="text-sm">Cotizar ahora</span>
                    <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
