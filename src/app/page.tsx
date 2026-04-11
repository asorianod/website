// src/app/page.tsx
import React from "react";
import Image1 from "../photos/IMG_2039.jpg";
// import Image2 from "../photos/IMG_2043.jpg";
// import Image3 from "../photos/IMG_2046.jpg";
// import Image4 from "../photos/IMG_2052.jpg";
// import Image5 from "../photos/IMG_2053.jpg";
// import Image6 from "../photos/IMG_2055.jpg";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative h-screen">
        <Image
          src="https://res.cloudinary.com/dudmp4xwa/image/upload/v1727462439/asorianod/ovkmbo8mec3a2kozarcy.jpg" // Cambia esto por la ruta de tu imagen de fondo
          alt="foto"
          fill
          style={{ objectFit: "contain" }}
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Andrés Soriano</h1>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">Proyectos</h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: Image1, alt: "Comunión Juan" },
            // { src: Image2, alt: "Proyecto 2" },
            // { src: Image3, alt: "Proyecto 3" },
            // { src: Image4, alt: "Proyecto 4" },
            // { src: Image5, alt: "Proyecto 5" },
            // { src: Image6, alt: "Proyecto 6" },
          ].map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* CONTENEDOR CON PROPORCIÓN */}
              <Link
                href="/gallery"
                className="text-lg transition duration-200 hover:font-bold" // Añade un tamaño de fuente fijo
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="https://res.cloudinary.com/dudmp4xwa/image/upload/v1775934303/asorianod-DSC06930_xbvauf.jpg"
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.alt}</h3>
                  <p className="text-sm text-gray-500">
                    Galería de fotos de la comunión de Juan
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
