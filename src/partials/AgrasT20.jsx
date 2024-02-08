import React from 'react';
import { Link } from 'react-router-dom';

import NewsImageInner from '../images/agrast20p.png';
import NewsImageInner2 from '../images/agrast20-png.png';
import NewsImage04 from '../images/dron-dji-agras-t40-.jpg';
import NewsImage05 from '../images/dji-mavic-3multispectral.jpg';



function BlogSingle() {

  const videoUrl =
    "https://www.youtube.com/embed/FSH1VShvhPE?autoplay=1&loop=1&mute=1";
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
                    Agras T20P
                  </h1>
                  <p
                    className="text-xl text-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    El DJI Agras T20P es un dron de la marca DJI Agriculture que es ligero y ágil, y tiene un rendimiento potente. Puede transportar una carga útil de pulverización de hasta 20 litros y una carga util para solidos de hasta  25 kg. 
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
                  Cuenta con un sistema de pulverización con atomizador doble y boquilla centrifuga, caudal de 12 litros por minuto, radar activo de antenas en fase y visión binocular. Admite múltiples operaciones, desde levantamiento y mapeo hasta pulverización y fertilizacion, lo que ofrece un rendimiento y una versatilidad superiores al mejor precio.
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
                    Tanque de Pulverización : El T20P presenta un tanque de pulverización de 20 litros para aplicaciones precisas de productos químicos y fertilizantes.
                  </li>
                  <li className="mb-8">
                    Radar Omnidireccional Esférico:
                    Equipado con un radar omnidireccional esférico, este dron garantiza una detección avanzada de obstáculos, garantizando vuelos seguros y eficientes.
                  </li>
                  <li className="mb-8">
                    Protección IP67 : Con nivel de protección IP67, el T20P es resistente al polvo y al agua, adaptándose a diversas condiciones climáticas.
                  </li>
                  <li className="mb-8">
                    Monitoreo en Tiempo Real Dual FPV : Ofrece monitoreo en tiempo real dual FPV para un control óptimo y visualización de datos en vuelo.
                  </li>
                  <li className="mb-8">
                    Operación Automática de Alta Precisión : La operación automática de alta precisión asegura una aplicación eficiente de productos fitosanitarios.
                  </li>
                  <li className="mb-8">
                    Plataforma de Nube de Agricultura Inteligente : La integración con la plataforma de nube de agricultura inteligente permite un seguimiento y análisis detallado de los datos agrícolas.
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
                    Precisión en la Pulverización : Con el T20P, logra una aplicación precisa de productos químicos, optimizando la salud de tus cultivos y reduciendo el desperdicio.
                  </li>
                  <li className="mb-4">
                    Eficiencia Operativa : Aumenta la eficiencia con la capacidad de cubrir grandes extensiones de cultivos en un solo vuelo, reduciendo los tiempos y costos operativos.
                  </li>
                  <li className="mb-4">
                    Gestión Ambientalmente Sostenible : Minimiza el uso de productos químicos, promoviendo prácticas agrícolas más sostenibles y respetuosas con el medio ambiente.
                    significativamente la eficiencia operativa, lo que resulta
                    en ahorros de tiempo y costos.
                  </li>
                </ul>
                <h3 className="h3 mb-4 text-gray-200">Conclusiones</h3>
                <p className="mb-8">
                  El DJI Agras T40 representa la excelencia en la pulverización
                  agrícola. Su precisión, eficiencia y capacidad de reducir la
                  cantidad de productos químicos utilizados lo convierten en una
                  herramienta indispensable para los agricultores modernos. Si
                  buscas mejorar la salud de tus cultivos, reducir costos y
                  adoptar prácticas agrícolas más sostenibles, el Agras T40 es
                  tu aliado perfecto.
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
                    <Link to="/mavic-3" className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={NewsImage05}
                          width="352"
                          height="198"
                          alt="News 04"
                        />
                      </figure>
                    </Link>
                    <h3 className="h4 mb-2">
                      <Link
                        to="/mavic-3"
                        className="hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        DJI Mavic 3 Multiespectral
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