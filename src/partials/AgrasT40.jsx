import React from 'react';
import { Link } from 'react-router-dom';

import AgrasT40 from '../videos/agrast40.mp4'

import NewsImageInner from '../images/agrast40-features.jpg';
import NewsImageInner2 from "../images/agrast40.png";
import NewsImage04 from '../images/agrast20p-hd.jpg';
import NewsImage05 from '../images/dji-mavic-3multispectral.jpg';

function BlogSingle() {
  const videoUrl =
    "https://www.youtube.com/embed/qB0N4pwrjE8?autoplay=1&loop=1&mute=1";

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
                    Agras T40
                  </h1>
                  <p
                    className="text-xl text-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    El DJI Agras T40 es un dron agrícola de vanguardia diseñado
                    para revolucionar la forma en que gestionas tus cultivos.
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
                  El DJI Agras T40 es un dron agrícola de vanguardia diseñado
                  para revolucionar la forma en que gestionas tus cultivos. Con
                  una amplia gama de características y una tecnología de última
                  generación, este dron está diseñado para optimizar la
                  producción agrícola y reducir costos operativos.
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
                    Tanque de Pulverización de 40L : El Agras T40 cuenta con un
                    tanque de pulverización de 40 litros que permite cubrir
                    grandes extensiones de cultivo de manera eficiente,
                    reduciendo la necesidad de recargas frecuentes.
                  </li>
                  <li className="mb-8">
                    Tanque de Dispersión de Sólidos de 50 kg : Además del tanque
                    de líquido, este dron está equipado con un tanque de
                    dispersión de sólidos de 50 kg para la aplicación precisa de
                    fertilizantes y otros productos fitosanitarios.
                  </li>
                  <li className="mb-8">
                    Rotor Doble Coaxial : La tecnología de rotor doble coaxial
                    garantiza una estabilidad excepcional en vuelo, lo que es
                    esencial para una pulverización precisa y uniforme.
                  </li>
                  <li className="mb-8">
                    Atomización Doble : El Agras T40 utiliza un sistema de
                    atomización doble que asegura una distribución uniforme de
                    líquidos, lo que mejora la eficacia de los tratamientos.
                  </li>
                  <li className="mb-8">
                    Bomba de Impulsor de Accionamiento Magnético : Esta
                    característica asegura una entrega precisa y consistente de
                    los productos químicos, reduciendo el desperdicio y
                    minimizando la exposición al ambiente.
                  </li>
                  <li className="mb-8">
                    Aspersor Centrífugo Atomizado Doble : Para una aplicación
                    aún más precisa y uniforme de líquidos, el Agras T40 utiliza
                    aspersores centrífugos atomizados dobles.
                  </li>
                  <li className="mb-8">
                    Plataforma de Nube de Agricultura Inteligente : La
                    tecnología de nube inteligente te permite realizar un
                    seguimiento y una gestión en tiempo real de los datos de
                    pulverización, lo que facilita el monitoreo y la toma de
                    decisiones basadas en datos.
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
                    Tanque de Pulverización de 40L : El Agras T40 cuenta con un
                    tanque de pulverización de 40 litros que permite cubrir
                    grandes extensiones de cultivo de manera eficiente,
                    reduciendo la necesidad de recargas frecuentes.
                  </li>
                  <li className="mb-4">
                    Pulverización Precisa: El Agras T40 permite una
                    pulverización precisa y uniforme de productos químicos y
                    fertilizantes, lo que mejora la salud de los cultivos y
                    reduce el desperdicio.
                  </li>
                  <li className="mb-4">
                    Eficiencia Operativa: Con una gran capacidad de tanque y una
                    velocidad de pulverización eficiente, este dron aumenta
                    significativamente la eficiencia operativa, lo que resulta
                    en ahorros de tiempo y costos.
                  </li>
                  <li className="mb-4">
                    Reducción de Productos Químicos: La precisión en la
                    pulverización reduce la cantidad de productos químicos
                    necesarios, lo que beneficia al medio ambiente y a la salud
                    de los cultivos.
                  </li>
                  <li className="mb-4">
                    Detección Temprana de Problemas: El Agras T40 puede detectar
                    problemas en los cultivos en las primeras etapas, lo que
                    permite una acción preventiva y un mayor rendimiento.
                  </li>
                  <li className="mb-4">
                    Ahorro de Recursos: La gestión eficiente de recursos como
                    agua y fertilizantes ahorra recursos valiosos.
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

              {/* Article footer */}
              <footer>
                <div className="md:flex md:items-center md:justify-between text-center md:text-left">
                  {/* <ul className="inline-flex mt-4 md:ml-4 md:mb-0">
                    <li>
                      <Link
                        to="#"
                        className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                        </svg>
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link
                        to="#"
                        className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                        </svg>
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link
                        to="#"
                        className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                        </svg>
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </footer>
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