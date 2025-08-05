Demo
https://rickandmorty-personaje.netlify.app/

Rick and Morty App
📝 Descripción del Proyecto
¡Bienvenido a la Rick and Morty App! Esta es una aplicación web dinámica y moderna diseñada para que los fanáticos de la serie puedan explorar a sus personajes favoritos, buscarlos por nombre y gestionar una lista de favoritos. La aplicación utiliza la API de Rick and Morty para obtener los datos de los personajes y ofrece una experiencia de usuario interactiva y visualmente atractiva, con soporte para temas claro y oscuro.

✨ Características Principales
Catálogo de Personajes: Explora una lista completa de personajes de la serie, con sus imágenes, nombres, especies y lugar de origen.

Búsqueda Dinámica: Filtra los personajes por nombre en tiempo real a través de un campo de búsqueda intuitivo.

Carga Dinámica de Contenido: Utiliza un botón "Mostrar más personajes" para cargar contenido adicional a la vista sin recargar la página.

Gestión de Favoritos:

Agrega personajes a una lista de favoritos con un solo clic.

El botón se deshabilita automáticamente cuando un personaje ya ha sido añadido.

Elimina personajes de la lista de favoritos.

Vacía la lista de favoritos por completo.

Modal de Favoritos Interactivo: Un modal elegante para ver y gestionar la lista de personajes favoritos.

Modo Claro/Oscuro (Dark Mode Toggle): Cambia entre un tema de diseño claro y uno oscuro para una experiencia visual personalizada y cómoda.

Notificaciones Toast: Alertas de notificación que aparecen para confirmar acciones como agregar o eliminar favoritos.

Persistencia de Datos: El estado de tu lista de favoritos y la preferencia de tema se guardan en el localStorage del navegador, persistiendo entre sesiones.

🚀 Cómo Iniciar el Proyecto
Sigue estos pasos para levantar la aplicación en tu entorno local.

Prerequisitos
Asegúrate de tener instalado:

Node.js (versión 14 o superior recomendada)

npm (Node Package Manager)

Instalación
Clona el repositorio (si aplica) o navega a la carpeta del proyecto.

Instala las dependencias:

Bash

npm install
Ejecución
Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo:

Bash

npm run dev
Esto iniciará la aplicación en modo de desarrollo. Abre tu navegador y navega a http://localhost:5173 (o el puerto que te indique la consola). La aplicación se recargará automáticamente cada vez que hagas cambios en el código.

🛠️ Tecnologías Utilizadas
React: Una biblioteca de JavaScript para construir interfaces de usuario.

Vite: Un bundler de próxima generación para desarrollo web, utilizado para un inicio rápido y recarga en caliente instantánea.

Tailwind CSS: Un framework de CSS de bajo nivel (utility-first) para construir diseños personalizados rápidamente.

Context API (React): Para la gestión del estado global de favoritos y el tema, evitando el "prop drilling".

react-toastify: Una biblioteca para notificaciones personalizables.

JavaScript (ES6+): El lenguaje de programación principal.

HTML5: Estructura de la aplicación.

CSS3: Estilos adicionales y personalización.

📂 Estructura del Proyecto
El proyecto sigue una estructura modular para facilitar la escalabilidad y el mantenimiento:

├── public/
│   └── img/
├── src/
│   ├── components/       # Componentes reutilizables de UI (CharacterCard, Header, Footer, etc.)
│   ├── context/          # Contextos de React para gestión de estado global (FavoritosContext, TemaContext)
│   ├── App.jsx           # Componente principal de la aplicación
│   ├── main.jsx          # Punto de entrada de la aplicación
│   └── index.css         # Estilos base y de Tailwind
├── .gitignore
├── package.json
└── README.md


👨‍💻 Autor
Lautaro Tapia
