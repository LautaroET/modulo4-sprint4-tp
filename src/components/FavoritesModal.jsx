import React, { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

/**
 * @component FavoritesModal
 * @param {{onClose: Function}} props - Función para cerrar el modal.
 * @description Muestra un modal con la lista de personajes favoritos.
 */
function FavoritesModal({ onClose }) {
  // Obtiene las funciones y el estado del contexto de favoritos.
  const { favoritos, eliminarDeFavoritos, vaciarFavoritos } = useContext(
    FavoritosContext
  );

  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto transition-colors duration-700
                  dark:bg-gray-800"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-blue-400">
            Mis Favoritos
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold dark:text-gray-400 dark:hover:text-white"
          >
            ×
          </button>
        </div>

        {favoritos.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 text-center py-8">
            Aún no has agregado personajes favoritos.
          </p>
        ) : (
          <ul className="space-y-4">
            {favoritos.map((character) => (
              <li
                key={character.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm transition-colors duration-500
                        dark:bg-gray-700"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <span className="text-gray-800 font-medium dark:text-gray-100">
                    {character.name}
                  </span>
                </div>
                <button
                  onClick={() => eliminarDeFavoritos(character.id)}
                  className="text-red-500 hover:text-red-700 ml-4 transition-colors dark:text-red-400 dark:hover:text-red-300"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}

        {favoritos.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-right">
            <button
              onClick={vaciarFavoritos}
              className="mt-4 bg-red-600 px-5 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors duration-300
                        dark:bg-red-700 dark:hover:bg-red-600"
            >
              Vaciar lista
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesModal;




