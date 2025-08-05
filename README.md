# 🚀 Buscador de Personajes de Rick and Morty

¡Bienvenido al Buscador de Personajes de Rick and Morty! Esta aplicación web te permite explorar a los personajes de la popular serie, buscar por nombre, ver sus detalles, y guardar tus favoritos en una lista persistente.

[Enlace al proyecto desplegado](https://rickandmorty-personaje.netlify.app/)

## 🎯 Objetivo del Proyecto

El objetivo principal de este proyecto era construir una aplicación completa en **React + Vite** que consumiera una API externa. Se puso énfasis en el uso de buenas prácticas como:

-   **Manejo de APIs REST** y peticiones asíncronas.
-   **Gestión de estado** con `useState` y `useEffect`.
-   **Notificaciones** de usuario con `react-toastify`.
-   **Formularios controlados** y validaciones básicas.
-   **Persistencia de datos** con `localStorage`.
-   **Diseño responsive** con **TailwindCSS**.

## 🛠️ Tecnologías Utilizadas

-   **React**: Biblioteca principal para la construcción de la interfaz de usuario.
-   **Vite**: Herramienta de construcción rápida y ligera para proyectos de React.
-   **TailwindCSS**: Framework CSS de utilidad para un diseño rápido y flexible.
-   **react-toastify**: Librería para mostrar notificaciones personalizables.
-   **Context API**: Para una gestión de estado global de los favoritos y el tema.
-   **API de Rick and Morty**: La fuente de datos para los personajes.

## 🌟 Características

-   **Búsqueda de personajes**: Encuentra personajes por su nombre utilizando un campo de búsqueda (`debounce` implementado para optimizar las peticiones).
-   **Visualización de datos**: Los personajes se muestran en tarjetas con su imagen y detalles como especie, estado y origen.
-   **Botón "Mostrar más"**: Carga más personajes de la lista completa para una navegación más cómoda.
-   **Sistema de favoritos**: Agrega y elimina personajes de una lista de favoritos.
-   **Persistencia de datos**: Tus personajes favoritos se guardan en el `localStorage` para que no los pierdas al recargar la página.
-   **Modal de Favoritos**: Un modal dedicado para ver y gestionar la lista completa de tus personajes favoritos.
-   **Tema oscuro/claro**: Un botón en el encabezado te permite alternar entre un tema visual claro y oscuro, con persistencia en `localStorage`.
-   **Feedback de usuario**: El uso de `react-toastify` proporciona notificaciones claras sobre el éxito de las búsquedas, errores o acciones en la lista de favoritos.
-   **Loader**: Un componente de carga animado se muestra mientras se obtienen los datos de la API, mejorando la experiencia de usuario.

## 🌐 ¿Por qué se usó `fetch` en lugar de `axios`?

Se eligió la API nativa del navegador, `fetch`, por su simplicidad y ligereza. Para este proyecto, que realiza peticiones HTTP de tipo GET a una sola API, `fetch` ofrece todas las funcionalidades necesarias sin la necesidad de agregar una dependencia externa. Esto ayuda a mantener el bundle de la aplicación más pequeño y el código más directo.

## 🚀 Cómo ejecutar el proyecto localmente

1.  Clona el repositorio:
    ```Terminal
    git clone https://github.com/LautaroET/modulo4-sprint4-tp
    cd nombre-del-repositorio
    ```
2.  Instala las dependencias:
    ```Terminal
    npm install
    ```
3.  Inicia el servidor de desarrollo:
    ```Terminal
    npm run dev
    ```

El proyecto se abrirá en tu navegador en `http://localhost:5173/`.

📂 Estructura del Proyecto
El proyecto sigue una estructura modular para facilitar la escalabilidad y el mantenimiento:

├── public/
│   └── img/
├── src/
│   ├── components/       # Componentes reutilizables de UI (CharacterCard, Header, Footer, etc.)
│   ├── context/          # Contextos de React para gestión de estado global (FavoritosContext,TemaContext)
│   ├── services.jsx      # pedido de api (get)
│   ├── App.jsx           # Componente principal de la aplicación
│   ├── main.jsx          # Punto de entrada de la aplicación
│   └── index.css         # Estilos base y de Tailwind
├── .gitignore
├── package.json
└── README.md


👨‍💻 Autor
Lautaro Tapia
