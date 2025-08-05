import React, { useState } from "react";

/**
 * @component SearchInput
 * @param {{onInputChange: Function, onAmountChange: Function}} props
 * @description Componente con los campos de entrada para buscar un personaje y definir la cantidad a mostrar.
 */
function SearchInput({ onInputChange, onAmountChange }) {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState(20);
  const [errorInput, setErrorInput] = useState("");
  const [errorAmount, setErrorAmount] = useState("");

  /**
   * @function handleNameChange
   * @param {Event} e - Evento de cambio del input.
   * @description Actualiza el estado del input y valida el valor.
   */
  const handleNameChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Validación: El nombre no puede ser un número.
    if (!isNaN(value) && value.trim() !== "") {
      setErrorInput("No puedes buscar un personaje con un número.");
      onInputChange(""); // No se busca si hay error
    } else {
      setErrorInput("");
      onInputChange(value);
    }
  };

  /**
   * @function handleAmountChange
   * @param {Event} e - Evento de cambio del input.
   * @description Valida y actualiza el estado de la cantidad de personajes, llamando a `onAmountChange`.
   */
  const handleAmountChange = (e) => {
    const value = e.target.value;
    const newAmount = parseInt(value, 10);

    if (isNaN(newAmount) || value.trim() === "") {
      // Si el campo está vacío o no es un número
      setAmount(value);
      setErrorAmount("El valor debe ser un número.");
      onAmountChange(20); // Valor por defecto
    } else if (newAmount < 1 || newAmount > 20) {
      // Si la cantidad está fuera del rango
      setAmount(newAmount);
      setErrorAmount("La cantidad debe estar entre 1 y 20.");
      onAmountChange(20);
    } else {
      // Si el valor es válido
      setAmount(newAmount);
      setErrorAmount("");
      onAmountChange(newAmount);
    }
  };

  return (
    <div className="mb-8 flex flex-col sm:flex-row justify-center gap-4">
      <div className="flex-1 max-w-md">
        <input
          type="text"
          value={input}
          onChange={handleNameChange}
          placeholder="Busca un personaje (ej. Rick Sanchez)"
          className={`w-full p-3 rounded-lg border-2 ${
            errorInput ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
        />
        {errorInput && (
          <p className="text-red-500 text-sm mt-1">{errorInput}</p>
        )}
      </div>
      <div className="flex-1 sm:max-w-[150px]">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Cantidad (1-20)"
          min="1"
          max="20"
          className={`w-full p-3 rounded-lg border-2 ${
            errorAmount ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
        />
        {errorAmount && (
          <p className="text-red-500 text-sm mt-1">{errorAmount}</p>
        )}
      </div>
    </div>
  );
}

export default SearchInput;