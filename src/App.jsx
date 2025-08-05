// Importa las librerías y componentes necesarios.
import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
import CharacterList from "./components/CharacterList";
import Loader from "./components/Loader";
import FavoritesModal from "./components/FavoritesModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importa los Providers de contexto para gestionar el estado global.
import FavoritosProvider from "./context/FavoritosContext";
import TemaProvider from "./context/TemaContext";

function App() {
  // Estado para los personajes que se muestran en la pantalla.
  const [characters, setCharacters] = useState([]);
  // Estado para guardar la lista completa de todos los personajes de la búsqueda.
  const [allCharacters, setAllCharacters] = useState([]);
  // Estado para controlar el estado de carga.
  const [isLoading, setIsLoading] = useState(false);
  // Estado para controlar la visibilidad del modal de favoritos.
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para guardar el valor del input de búsqueda.
  const [query, setQuery] = useState("");
  // Estado para la cantidad de personajes a mostrar inicialmente.
  const [amount, setAmount] = useState(20);

  // Ref para gestionar el temporizador de 'debounce' y evitar llamadas excesivas a la API.
  const debounceTimeoutRef = useRef(null);

  /**
   * @async
   * @function fetchAllCharactersFromAPI
   * @param {string} name - El nombre del personaje a buscar.
   * @returns {Promise<{results: Array, count: number}>} - Una promesa con la lista completa de personajes y su total.
   * @description Realiza múltiples llamadas a la API para obtener todas las páginas de resultados de una búsqueda.
   */
  const fetchAllCharactersFromAPI = async (name = "") => {
    let allResults = [];
    let nextUrl = `https://rickandmortyapi.com/api/character/?name=${name}`;

    try {
      // Bucle para iterar a través de todas las páginas de la API.
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
      console.error(error);
      toast.error(error.message);
      return { results: [], count: 0 };
    }
  };

  /**
   * @async
   * @function handleFetchCharacters
   * @param {string} name - El nombre del personaje para buscar.
   * @description Llama a la API para obtener todos los personajes, actualiza el estado y muestra notificaciones.
   */
  const handleFetchCharacters = useCallback(async (name) => {
    setIsLoading(true);
    const { results, count } = await fetchAllCharactersFromAPI(name);

    if (count > 0) {
      toast.success(`Se encontraron ${count} personajes.`);
    } else {
      toast.info("No se encontraron personajes con ese nombre.");
    }

    setAllCharacters(results);
    setCharacters(results.slice(0, amount));
    setIsLoading(false);
  }, [amount]);

  /**
   * @function handleShowMore
   * @description Agrega 20 personajes adicionales a la lista de visualización desde la lista completa.
   */
  const handleShowMore = useCallback(() => {
    const newAmount = 20; 
    setCharacters(prevCharacters => {
        const currentLength = prevCharacters.length;
        const moreCharacters = allCharacters.slice(currentLength, currentLength + newAmount);
        return [...prevCharacters, ...moreCharacters];
    });
  }, [allCharacters]);

  /**
   * Hook de efecto para gestionar la lógica de búsqueda con 'debounce'.
   * Se ejecuta cada vez que cambia `query` o `amount`.
   */
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (query.trim() === "") {
      handleFetchCharacters("");
      return;
    }

    debounceTimeoutRef.current = setTimeout(() => {
      handleFetchCharacters(query);
    }, 500);

    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [query, handleFetchCharacters]);

  /**
   * @function toggleModal
   * @description Alterna la visibilidad del modal de favoritos.
   */
  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    // Envuelve toda la aplicación en los Providers de contexto.
    <TemaProvider>
      <FavoritosProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 transition-colors duration-700
                      dark:from-gray-950 dark:to-blue-950 dark:text-gray-100">
          <Header onToggleFavorites={toggleModal} />
          <main className="container mx-auto p-4 py-12">
            <SearchInput onInputChange={setQuery} onAmountChange={setAmount} />
            {isLoading ? (
              <Loader />
            ) : (
              // Pasa las props necesarias a CharacterList.
              <CharacterList 
                characters={characters} 
                allCharacters={allCharacters} 
                onShowMore={handleShowMore} 
              />
            )}
          </main>
          {isModalOpen && <FavoritesModal onClose={toggleModal} />}
          <Footer />
          <ToastContainer position="bottom-right" theme="colored" />
        </div>
      </FavoritosProvider>
    </TemaProvider>
  );
}

export default App;









