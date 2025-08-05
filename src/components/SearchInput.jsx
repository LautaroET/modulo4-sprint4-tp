import React, { useState } from "react";

function SearchInput({ onInputChange, onAmountChange }) {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState(20); // Estado para la cantidad, por defecto 20

  const handleNameChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onInputChange(value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Nos aseguramos de que el valor sea un número y esté en un rango razonable
    const newAmount = parseInt(value, 10);
    if (!isNaN(newAmount) && newAmount > 0 && newAmount <= 20) {
      setAmount(newAmount);
      onAmountChange(newAmount);
    } else {
      // Puedes manejar el error o simplemente no actualizar el estado
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