// src/app/page.tsx
import React from "react";
import Image1 from "../photos/IMG_2039.jpg";
import Image2 from "../photos/IMG_2043.jpg";
import Image3 from "../photos/IMG_2046.jpg";
import Image4 from "../photos/IMG_2052.jpg";
import Image5 from "../photos/IMG_2053.jpg";
import Image6 from "../photos/IMG_2055.jpg";
import Image from "next/image";
import BackgroundImage from "../photos/IMG_2039.jpg"; // Reemplaza con tu imagen de fondo

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative h-screen">
        <Image
          src={BackgroundImage} // Cambia esto por la ruta de tu imagen de fondo
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Hola Andrés</h1>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">Mis Proyectos</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: Image1, alt: "Proyecto 1" },
            { src: Image2, alt: "Proyecto 2" },
            { src: Image3, alt: "Proyecto 3" },
            { src: Image4, alt: "Proyecto 4" },
            { src: Image5, alt: "Proyecto 5" },
            { src: Image6, alt: "Proyecto 6" },
          ].map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <Image
                src={project.src} // Ahora utiliza el objeto con la imagen
                alt={project.alt}
                width={500}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.alt}</h3>
                <p className="text-gray-600">
                  Breve descripción de este proyecto. Aquí puedes hablar sobre
                  el concepto y lo que lo hace especial.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
