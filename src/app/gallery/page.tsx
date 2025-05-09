// app/gallery/page.tsx
"use client"; // Marca la página como Client Component si usas hooks

import React from "react";
import Gallery from "../../components/Gallery";

// Importar las imágenes directamente desde la carpeta photos
// src/app/gallery/page.tsx
import Image1 from "../../photos/IMG_2039.jpg";
import Image2 from "../../photos/IMG_2043.jpg";
import Image3 from "../../photos/IMG_2046.jpg";
import Image4 from "../../photos/IMG_2052.jpg";
import Image5 from "../../photos/IMG_2053.jpg";
import Image6 from "../../photos/IMG_2055.jpg";
import Image7 from "../../photos/IMG_2058.jpg";
import Image8 from "../../photos/IMG_2059.jpg";
import Image9 from "../../photos/IMG_2064.jpg";
import Image10 from "../../photos/IMG_2067.jpg";
import Image11 from "../../photos/IMG_2070.jpg";
import Image12 from "../../photos/IMG_2072.jpg";
import Image13 from "../../photos/IMG_2074.jpg";
import Image14 from "../../photos/IMG_2077.jpg";
import Image15 from "../../photos/IMG_2080.jpg";
import Image16 from "../../photos/IMG_2086.jpg";
import Image17 from "../../photos/IMG_2089.jpg";
import Image18 from "../../photos/IMG_2093.jpg";
import Image19 from "../../photos/IMG_2094.jpg";
import Image20 from "../../photos/IMG_2097.jpg";
import Image21 from "../../photos/IMG_2099.jpg";
import Image22 from "../../photos/IMG_2106.jpg";
import Image23 from "../../photos/IMG_2110.jpg";
import Image24 from "../../photos/IMG_2114.jpg";

const images = [
  { src: Image1.src, alt: "IMG_2039" },
  { src: Image2.src, alt: "IMG_2043" },
  { src: Image3.src, alt: "IMG_2046" },
  { src: Image4.src, alt: "IMG_2052" },
  { src: Image5.src, alt: "IMG_2053" },
  { src: Image6.src, alt: "IMG_2055" },
  { src: Image7.src, alt: "IMG_2058" },
  { src: Image8.src, alt: "IMG_2059" },
  { src: Image9.src, alt: "IMG_2064" },
  { src: Image10.src, alt: "IMG_2067" },
  { src: Image11.src, alt: "IMG_2070" },
  { src: Image12.src, alt: "IMG_2072" },
  { src: Image13.src, alt: "IMG_2074" },
  { src: Image14.src, alt: "IMG_2077" },
  { src: Image15.src, alt: "IMG_2080" },
  { src: Image16.src, alt: "IMG_2086" },
  { src: Image17.src, alt: "IMG_2089" },
  { src: Image18.src, alt: "IMG_2093" },
  { src: Image19.src, alt: "IMG_2094" },
  { src: Image20.src, alt: "IMG_2097" },
  { src: Image21.src, alt: "IMG_2099" },
  { src: Image22.src, alt: "IMG_2106" },
  { src: Image23.src, alt: "IMG_2110" },
  { src: Image24.src, alt: "IMG_2114" },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Gallery</h1>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryPage;
