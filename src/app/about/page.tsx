// app/about/page.tsx
import React from "react";
import Image from "next/image";
import profileImage from "../../photos/profile.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-4xl font-bold">About Me</h1>

      <div className="flex flex-col items-center md:flex-row md:space-x-8">
        {/* Imagen de perfil */}
        <div className="relative mb-8 h-40 w-40 md:mb-0">
          <Image
            src={profileImage} // Asegúrate de reemplazar esta ruta con la imagen correcta
            alt="Andrés Soriano"
            layout="fill" // Hace que la imagen cubra el contenedor con ancho y alto definidos
            objectFit="cover" // Asegura que la imagen mantenga su proporción
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Información personal */}
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            Hi, Im <span className="font-semibold">Andrés Soriano</span>, a
            passionate photographer specializing in capturing stunning moments
            and stories through my lens. With a keen eye for detail and
            creativity, I strive to bring emotions to life in every shot.
          </p>
          <p className="mb-4">
            My journey in photography began several years ago, and since then, I
            have worked on various projects ranging from portraits to events and
            landscapes. Im always eager to explore new perspectives and continue
            growing in this incredible art form.
          </p>
          <p className="mb-4">
            Feel free to explore my portfolio, and dont hesitate to contact me
            for any collaboration or photography inquiries. Im looking forward
            to working with you and capturing your unique moments!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
