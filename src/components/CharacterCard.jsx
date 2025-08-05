import React, { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

/**
 * @component CharacterCard
 * @param {{character: Object}} props - Objeto del personaje.
 * @description Componente que renderiza una tarjeta individual de personaje.
 */
function CharacterCard({ character }) {
  // Obtiene las funciones y el estado del contexto de favoritos.
  const { agregarAFavoritos, favoritos } = useContext(FavoritosContext);

  // Determina si el personaje actual ya está en la lista de favoritos.
  const isFavorite = favoritos.some((fav) => fav.id === character.id);

  return (
    <div
      className="bg-white p-4 rounded-xl text-gray-800 text-center
                shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300
                dark:bg-gray-800 dark:text-gray-100 dark:shadow-xl dark:hover:shadow-2xl
                flex flex-col"
    >
      <div className="w-full h-60 overflow-hidden rounded-md mb-4 flex items-center justify-center">
        <img
          src={character.image}
          alt={`Imagen de ${character.name}`}
          className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500 rounded-md"
        />
      </div>

      <h3 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-2 truncate">
        {character.name}
      </h3>
      <p className="text-md font-medium text-gray-600 dark:text-gray-300">
        Especie: {character.species}
      </p>
      <p className="text-md font-medium text-gray-600 dark:text-gray-300">
        Origen: {character.origin.name}
      </p>
      <p className="text-md font-medium text-gray-600 dark:text-gray-300">
        Estado: {character.status}
      </p>
      <p className="text-md font-medium text-gray-600 dark:text-gray-300">
        Genero: {character.gender}
      </p>

      {/* Botón para agregar a favoritos, se deshabilita si ya es favorito. */}
      <button
        onClick={() => agregarAFavoritos(character)}
        disabled={isFavorite}
        className={`mt-auto w-full py-3 font-semibold rounded-lg transition-colors duration-300 ${
          isFavorite
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
        }`}
      >
        {isFavorite ? "Añadido a Favoritos" : "Agregar a Favoritos"}
      </button>
    </div>
  );
}

export default CharacterCard;








