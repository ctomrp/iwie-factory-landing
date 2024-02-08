import React, { useState } from "react";

function HeroHome() {
  const videoUrl =
    "https://www.youtube.com/embed/gUUKmTvgYaQ?autoplay=1&loop=1&mute=1";

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Transformando la Agricultura <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                con Tecnología de Vanguardia.
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                En{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                  Iwie Agro
                </span>{" "}
                nos apasiona liderar la revolución en la agricultura a través de
                la innovación y la tecnología de vanguardia. Creemos firmemente
                que el futuro de la agricultura se basa en la aplicación
                inteligente de la tecnología, y nuestros drones agrícolas son la
                vanguardia de ese futuro.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              ></div>
            </div>
          </div>

          {/* CTA button */}
            <div className="flex justify-center mb-20">
              <a target="_blank"
                className="btn text-white bg-purple-600 hover:bg-purple-700"
                href="https://forms.gle/PZJpLHoXJMWq9xL57"
              >
                Curso DGAC SAG
              </a>
            </div>

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
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
