import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';


function TestimonialsCarousel() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos-id-testimonialcar>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonialcar]">Beneficios de los drones en la agricultura</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-testimonialcar]">El uso de estos eficientes robots aéreos en la agricultura trae múltiples beneficios, tales como la optimización de los recursos, el seguimiento de los cultivos, la detección de plagas y enfermedades, además de una mayor productividad y eficacia.</p>
          </div>

          {/* Check list */}
          <div className="max-w-3xl mx-auto pb-16">
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center text-lg text-gray-400 -mx-3 -my-2">
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Reducción de costos</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Precisión en Topografía</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Optimización de Recursos Hídricos</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Recolección de Datos Científicos</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Estudios de Cambio Climático</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;