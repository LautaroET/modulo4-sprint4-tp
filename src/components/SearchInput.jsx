import React, { useState } from "react";

/**
 * @component SearchInput
 * @param {{onInputChange: Function, onAmountChange: Function}} props
 * @description Componente con los campos de entrada para buscar un personaje y definir la cantidad a mostrar.
 */
function SearchInput({ onInputChange, onAmountChange }) {
  // Estado para el valor del input de búsqueda.
  const [input, setInput] = useState("");
  // Estado para la cantidad de personajes a mostrar, con un valor por defecto.
  const [amount, setAmount] = useState(20);

  /**
   * @function handleNameChange
   * @param {Event} e - Evento de cambio del input.
   * @description Actualiza el estado del input y llama a la función `onInputChange`.
   */
  const handleNameChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onInputChange(value);
  };

  /**
   * @function handleAmountChange
   * @param {Event} e - Evento de cambio del input.
   * @description Valida y actualiza el estado de la cantidad de personajes, llamando a `onAmountChange`.
   */
  const handleAmountChange = (e) => {
    const value = e.target.value;
    const newAmount = parseInt(value, 10);
    // Valida que la cantidad sea un número entre 1 y 20.
    if (!isNaN(newAmount) && newAmount > 0 && newAmount <= 20) {
      setAmount(newAmount);
      onAmountChange(newAmount);
    } else {
      setAmount(20);
      onAmountChange(20);
    }
  };

  return (
    <div className="mb-8 flex flex-col sm:flex-row justify-center gap-4">
      <input
        type="text"
        value={input}
        onChange={handleNameChange}
        placeholder="Busca un personaje (ej. Rick Sanchez)"
        className="w-full sm:max-w-md p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
                  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Cantidad (1-20)"
        min="1"
        max="20"
        className="w-full sm:max-w-[150px] p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
                  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
}

export default SearchInput;