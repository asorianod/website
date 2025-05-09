// components/Gallery.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

type ImageType = {
  src: string; // Debe ser string
  alt: string;
};

const Gallery: React.FC<{ images: ImageType[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.src} // Este src ahora es string
              alt={image.alt}
              width={500} // Aumentado a 400 para que sean más grandes
              height={500} // Aumentado a 300 para que sean más grandes
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal para la imagen seleccionada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Cierra el modal al hacer clic en el fondo
        >
          <div
            className="relative max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            {/* Previene el cierre al hacer clic en la imagen */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-2xl text-white opacity-75 transition-opacity hover:opacity-100"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform text-2xl text-white opacity-75 transition-opacity hover:opacity-100"
            >
              &#9664;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform text-2xl text-white opacity-75 transition-opacity hover:opacity-100"
            >
              &#9654;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = selectedImage.src;
                link.download = selectedImage.alt;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded bg-white px-4 py-2 text-black opacity-75 transition-opacity hover:opacity-100"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
