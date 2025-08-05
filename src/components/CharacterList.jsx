import React from "react";
import CharacterCard from "./CharacterCard";

/**
 * @component CharacterList
 * @param {{characters: Array, allCharacters: Array, onShowMore: Function}} props
 * @description Muestra una lista de tarjetas de personajes y un botón para cargar más.
 */
function CharacterList({ characters, allCharacters, onShowMore }) {
  // Verificamos si la lista actual es más corta que la lista completa.
  const canShowMore = characters.length < allCharacters.length;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
      {characters.length > 0 ? (
        <>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
          
          {/* Mostramos el botón solo si hay más personajes para mostrar. */}
          {canShowMore && (
            <div className="col-span-full flex justify-center mt-8">
              <button
                onClick={onShowMore}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Mostrar más personajes
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="col-span-full text-center text-xl text-gray-600 dark:text-gray-300">
          No hay personajes para mostrar. ¡Intenta una nueva búsqueda!
        </p>
      )}
    </div>
  );
}

export default CharacterList;






