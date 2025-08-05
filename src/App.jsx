import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
import CharacterList from "./components/CharacterList";
import Loader from "./components/Loader";
import FavoritesModal from "./components/FavoritesModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FavoritosProvider from "./context/FavoritosContext";
import TemaProvider from "./context/TemaContext";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState(20);

  // Usamos useRef para guardar el ID del temporizador del debounce
  const debounceTimeoutRef = useRef(null);

  const fetchCharacters = useCallback(async (name) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          toast.info("No se encontraron personajes con ese nombre.");
          setCharacters([]);
          return;
        }
        throw new Error("Algo salió mal al buscar los personajes.");
      }
      const data = await response.json();
      
      const limitedCharacters = data.results.slice(0, amount);
      setCharacters(limitedCharacters);
      
      if (limitedCharacters.length > 0) {
        toast.success(`Se encontraron ${limitedCharacters.length} personajes.`);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }, [amount]);

  useEffect(() => {
    // Limpiamos el temporizador anterior si existe
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (query.trim() === "") {
      const fetchAllCharacters = async () => {
        setIsLoading(true);
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character");
          if (!response.ok) throw new Error("No se pudo cargar la lista de personajes.");
          const data = await response.json();
          const limitedCharacters = data.results.slice(0, amount);
          setCharacters(limitedCharacters);
        } catch (error) {
          console.error(error);
          toast.error(error.message);
          setCharacters([]);
        } finally {
          setIsLoading(false);
        }
      };
      fetchAllCharacters();
      return;
    }

    // Guardamos el ID del nuevo temporizador en la ref
    debounceTimeoutRef.current = setTimeout(() => {
      fetchCharacters(query);
    }, 500);

    // La función de limpieza ahora usa la ref para cancelar el temporizador
    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [query, amount, fetchCharacters]);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <TemaProvider>
      <FavoritosProvider>
        <div
          className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 transition-colors duration-700
                      dark:from-gray-950 dark:to-blue-950 dark:text-gray-100"
        >
          <Header onToggleFavorites={toggleModal} />
          <main className="container mx-auto p-4 py-12">
            <SearchInput onInputChange={setQuery} onAmountChange={setAmount} />
            {isLoading ? <Loader /> : <CharacterList characters={characters} />}
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









