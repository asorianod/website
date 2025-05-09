// src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="transition duration-200 hover:font-bold">
            Andrés Soriano
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-lg transition duration-200 hover:font-bold" // Añade un tamaño de fuente fijo
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg transition duration-200 hover:font-bold" // Añade un tamaño de fuente fijo
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-lg transition duration-200 hover:font-bold" // Añade un tamaño de fuente fijo
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
