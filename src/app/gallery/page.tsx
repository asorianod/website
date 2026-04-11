"use client";

import { useState, useEffect } from "react";
import Gallery from "../../components/Gallery";


export default function ProtectedGallery() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved === "true") setIsAuth(true);
  }, []);

  const handleLogin = () => {
    if (password === "1234") {
      localStorage.setItem("auth", "true");
      setIsAuth(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
  };

  // ✅ SI YA ESTÁ LOGUEADO → MUESTRA GALERÍA
  if (isAuth) {
    return (
      <>
        <div className="flex justify-end bg-gray-100 p-4">
          <button
            onClick={handleLogout}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Salir
          </button>
        </div>

        <Gallery />
      </>
    );
  }

  // 🔐 PANTALLA DE LOGIN
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-full max-w-sm space-y-4 rounded-xl bg-white p-6">
        <h1 className="text-center text-xl font-bold">Acceso privado</h1>

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full rounded border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded bg-black py-2 text-white"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
