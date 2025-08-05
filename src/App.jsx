// src/App.js

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

// Importa la nueva función de servicio.
import { fetchAllCharacters } from "./services/apiService";

function App() {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState(20);

  const debounceTimeoutRef = useRef(null);

  const handleFetchCharacters = useCallback(async (name) => {
  setIsLoading(true);
  try {
    const { results, count } = await fetchAllCharacters(name);

    if (count > 0) {
      toast.success(`Se encontraron ${count} personajes.`);
    } else {
      toast.info("No se encontraron personajes con ese nombre.");
    }
    setAllCharacters(results);
    setCharacters(results.slice(0, amount));
  } catch (err) { // Cambia 'error' a 'err' y utiliza la variable
    console.error("Error al buscar personajes:", err);
    toast.error("Ocurrió un error al buscar los personajes.");
    setAllCharacters([]);
    setCharacters([]);
  } finally {
    setIsLoading(false);
  }
}, [amount]);
  
  const handleShowMore = useCallback(() => {
    const newAmount = 20; 
    setCharacters(prevCharacters => {
        const currentLength = prevCharacters.length;
        const moreCharacters = allCharacters.slice(currentLength, currentLength + newAmount);
        return [...prevCharacters, ...moreCharacters];
    });
  }, [allCharacters]);

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

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <TemaProvider>
      <FavoritosProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 transition-colors duration-700 dark:from-gray-950 dark:to-blue-950 dark:text-gray-100">
          <Header onToggleFavorites={toggleModal} />
          <main className="container mx-auto p-4 py-12">
            <SearchInput onInputChange={setQuery} onAmountChange={setAmount} />
            {isLoading ? (
              <Loader />
            ) : (
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









