// src/services/apiService.js

/**
 * @async
 * @function fetchAllCharacters
 * @param {string} name - El nombre del personaje a buscar.
 * @returns {Promise<{results: Array, count: number}>} - Una promesa con la lista completa de personajes y su total.
 * @description Realiza múltiples llamadas a la API para obtener todas las páginas de resultados de una búsqueda.
 */
export const fetchAllCharacters = async (name = "") => {
  let allResults = [];
  let nextUrl = `https://rickandmortyapi.com/api/character/?name=${name}`;

  try {
    while (nextUrl) {
      const response = await fetch(nextUrl);
      if (!response.ok) {
        if (response.status === 404) {
          return { results: [], count: 0 };
        }
        throw new Error("Algo salió mal al buscar los personajes.");
      }
      const data = await response.json();
      allResults = [...allResults, ...data.results];
      nextUrl = data.info.next;
    }
    return { results: allResults, count: allResults.length };
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    // Propagamos el error para que el componente que llama pueda manejarlo
    throw error; 
  }
};