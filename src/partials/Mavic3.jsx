import React from 'react';
import { Link } from 'react-router-dom';

import NewsImageInner from '../images/mavic3-features.jpg';
import NewsImageInner2 from '../images/mavic3-png.png';
import NewsImage04 from '../images/dron-dji-agras-t40-.jpg';
import NewsImage05 from '../images/dji-mavic-3multispectral.jpg';



function BlogSingle() {

  const videoUrl =
    "https://www.youtube.com/embed/4f8NiLApHLk?autoplay=1&loop=1&mute=1";
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <article>
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 mb-4" data-aos="fade-up">
                    DJI Mavic 3 Multiespectral
                  </h1>
                  <p
                    className="text-xl text-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    El DJI Mavic 3 Multiespectral es una revolución en la agricultura de precisión, combinando la portabilidad de un dron compacto con la potencia de una cámara multiespectral de vanguardia.
                  </p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-3">
                </div>
              </header>

              {/* Video Hero iframe */}
              <div>
                <div
                  className="relative flex justify-center mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="w-full flex flex-col justify-center">
                    <iframe
                      className="w-full aspect-video rounded-xl shadow-2xl"
                      src={videoUrl}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Article content */}
              <div className="text-lg text-gray-400">
                <p className="mb-8">
                   Descubre cómo este dron puede cambiar la forma en que gestionas tus cultivos y optimizas tus decisiones agrícolas.
                </p>
                <figure className="mb-8">
                  <img
                    className="w-full"
                    src={NewsImageInner}
                    width="768"
                    height="432"
                    alt="News inner"
                  />
                </figure>
                <h3 className="h3 mb-4 text-gray-200">Características Clave</h3>
                <ul className="list-disc list-inside mb-8">
                  <li className="mb-8">
                    Cámara Multiespectral 4x5 MP G/R/RE/NIR : Equipado con una cámara multiespectral de 4x5 megapíxeles, captura datos en bandas espectrales G/R/RE/NIR para un análisis detallado de la salud del cultivo.
                  </li>
                  <li className="mb-8">
                    Cámara RGB de 20 MP :
                    Además, cuenta con una cámara RGB de 20 megapíxeles para obtener imágenes visuales de alta resolución.
                  </li>
                  <li className="mb-8">
                    Seguridad y Fiabilidad : Sensores de evasión de obstáculos, transmisión a 15 km y posición precisa gracias a la tecnología RTK garantizan un vuelo seguro y confiable.
                  </li>
                  <li className="mb-8">
                    Eficiencia : Con una eficiencia impresionante, puede cubrir hasta 200 hectáreas por vuelo, proporcionando datos detallados de manera rápida y efectiva.
                  </li>
                </ul>
                <figure className="mb-8">
                  <img
                    className="w-full"
                    src={NewsImageInner2}
                    width="768"
                    height="432"
                    alt="News inner"
                  />
                </figure>
                <h4 className="h4 text-gray-200 mb-4">
                  Beneficios en la Agricultura
                </h4>
                <ul className="list-disc list-inside mb-8">
                  <li className="mb-4">
                    Salud del Cultivo en Detalle : La cámara multiespectral permite un análisis preciso de la salud del cultivo, identificando problemas antes de que sean visibles a simple vista.
                  </li>
                  <li className="mb-4">
                    Imágenes de Alta Resolución : La cámara RGB captura imágenes de alta resolución, proporcionando detalles visuales para complementar la información multiespectral.
                  </li>
                  <li className="mb-4">
                    Seguridad en el Vuelo : Los sensores de evasión de obstáculos aseguran vuelos seguros, incluso en entornos complejos, reduciendo el riesgo de daños.
                  </li>
                </ul>
                <h3 className="h3 mb-4 text-gray-200">Conclusiones</h3>
                <p className="mb-8">
                  El DJI Mavic 3 Multiespectral es una herramienta indispensable para los agricultores que buscan llevar su producción al siguiente nivel. Con sus capacidades avanzadas, ofrece una visión detallada de la salud del cultivo y mejora la toma de decisiones agrícolas. Descubre cómo este dron puede transformar tu enfoque hacia la agricultura de precisión.
                </p>
              </div>

            </article>
          </div>

          {/* Related articles */}
          <aside className="mt-20">
            <div className="max-w-sm mx-auto md:max-w-none">
              {/* Section title */}
              <h4 className="h4 py-6 mb-10 border-t border-b border-gray-700">
                Mas de Nuestros Drones
              </h4>

              {/* Articles container */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {/* 1st article */}
                <article className="flex flex-col h-full" data-aos="fade-up">
                  <header>
                    <Link to="/agras-t40" className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={NewsImage04}
                          width="352"
                          height="198"
                          alt="News 04"
                        />
                      </figure>
                    </Link>
                    <h3 className="h4 mb-2">
                      <Link
                        to="/agras-t40"
                        className="hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        DJI Agras T40
                      </Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow">
                    Es un dron agrícola de vanguardia diseñado para revolucionar la forma en que gestionas tus cultivos. Con una amplia gama de características y una tecnología de última generación, este dron está diseñado para optimizar la producción agrícola y reducir costos operativos.
                  </p>
                </article>

                {/* 2nd article */}
                <article className="flex flex-col h-full" data-aos="fade-up">
                  <header>
                    <Link to="/agras-t20p" className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={NewsImage04}
                          width="352"
                          height="198"
                          alt="News 04"
                        />
                      </figure>
                    </Link>
                    <h3 className="h4 mb-2">
                      <Link
                        to="/agras-t20p"
                        className="hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        DJI Agras T20p
                      </Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow">
                    Es un dron de la marca DJI Agriculture que es ligero y ágil, y tiene un rendimiento potente. Puede transportar una carga útil de pulverización de hasta 20 litros y una carga util para solidos de hasta 25 kg.
                  </p>
                </article>

              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default BlogSingle;