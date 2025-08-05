// Importa las funciones necesarias desde React.
import React, { createContext, useState, useEffect } from "react";

// Crea un nuevo contexto llamado TemaContext, que se usará para compartir el estado del tema entre componentes.
export const TemaContext = createContext();

// Componente proveedor del contexto, que envuelve a la aplicación y le brinda acceso al tema.
const TemaProvider = ({ children }) => {
  // Estado que determina si el tema oscuro está activo.
  // Se inicializa leyendo el valor guardado previamente en localStorage.
  const [temaOscuro, setTemaOscuro] = useState(() => {
    const guardado = localStorage.getItem("temaOscuro");
    // Si hay un valor guardado, se convierte de string a booleano con JSON.parse.
    // Si no hay valor guardado, el valor por defecto es `false` (tema claro).
    return guardado ? JSON.parse(guardado) : false;
  });

  // Efecto que se ejecuta cada vez que cambia el valor de `temaOscuro`.
  useEffect(() => {
    // Guarda el nuevo valor del estado en localStorage, para que se recuerde al recargar la página.
    localStorage.setItem("temaOscuro", JSON.stringify(temaOscuro));

    // Añade o remueve la clase 'dark' al elemento raíz <html>,
    // lo que permite que los estilos CSS con clases condicionales (ej: Tailwind) funcionen correctamente.
    if (temaOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [temaOscuro]); // El efecto depende de `temaOscuro`, así que se ejecuta cuando cambia.

  // Función que invierte el valor actual de `temaOscuro` (claro ↔ oscuro).
  const alternarTema = () => {
    setTemaOscuro((prev) => !prev);
  };

  // Devuelve el proveedor del contexto con los valores disponibles para los componentes hijos:
  // - `temaOscuro`: booleano que indica si está activo el tema oscuro.
  // - `alternarTema`: función para alternar entre tema claro y oscuro.
  return (
    <TemaContext.Provider value={{ temaOscuro, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

// Exporta el proveedor para usarlo en la raíz de la aplicación.
export default TemaProvider;



