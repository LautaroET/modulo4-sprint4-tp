import React, { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

/**
 * @component Header
 * @param {{onToggleFavorites: Function}} props - Función para alternar el modal de favoritos.
 * @description Componente del encabezado que incluye el logo, el alternador de tema y el botón de favoritos.
 */
function Header({ onToggleFavorites }) {
  // Obtiene el estado y la función para alternar el tema del contexto.
  const { temaOscuro, alternarTema } = useContext(TemaContext);

  return (
    <header className="w-full bg-blue-700 shadow-xl p-4 flex justify-between items-center transition-colors duration-700 dark:bg-indigo-900">
      <div className="flex items-center gap-3">
        <img
          src={"/img/Rick_And_Morty.png"}
          alt="Logo de Rick and Morty"
          className="w-16 h-16 object-contain"
        />
        <h1 className="text-white text-2xl font-extrabold tracking-wide">
          <span className="text-amber-300">Rick</span> <em>And</em>  <span className="text-amber-300">Morty</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Botón para alternar entre tema claro y oscuro */}
        <button
          onClick={alternarTema}
          className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 hover:scale-105 transition-transform duration-300"
        >
          {temaOscuro ? (
            <i className="bi bi-sun-fill text-xl"></i>
          ) : (
            <i className="bi bi-moon-fill text-xl"></i>
          )}
        </button>

        {/* Botón para abrir el modal de favoritos */}
        <button
          onClick={onToggleFavorites}
          className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 flex items-center hover:scale-105 transition-transform duration-300"
        >
          Ver Favoritos
          <svg
            className="w-7 h-7 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;




