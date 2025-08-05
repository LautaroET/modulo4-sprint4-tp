https://tiendadepelicula.netlify.app/

🎬 Tienda de Películas - Watcht List
¡Bienvenido a la Tienda de Películas - Watcht List! Esta es una aplicación web moderna y dinámica diseñada para explorar una colección de películas y gestionar tu carrito de compras de una manera interactiva y visualmente atractiva, con soporte para temas claro y oscuro.

✨ Características Principales
Catálogo de Películas Dinámico: Explora una lista de películas con portadas, nombres y precios.

Gestión de Carrito de Compras:

Añade películas al carrito con un solo clic.

Ajusta la cantidad de cada película en el carrito.

Elimina películas individualmente del carrito.

Vacía el carrito completamente.

Visualiza el precio total de tu compra.

Modal de Carrito Interactivo: Un modal elegante para ver y gestionar los ítems en tu carrito sin salir de la página principal.

Modo Claro/Oscuro (Dark Mode Toggle): Cambia entre un tema de diseño claro y uno oscuro para una experiencia visual personalizada y cómoda, aplicando principios de psicología del color.

Diseño Responsivo: Interfaz adaptada para verse bien en diferentes tamaños de pantalla (móviles, tablets, desktops).

Persistencia de Datos: El estado de tu carrito y la preferencia de tema se guardan en el localStorage del navegador, persistiendo entre sesiones.

🚀 Cómo Iniciar el Proyecto
Sigue estos pasos para levantar la aplicación en tu entorno local.

Prerequisitos
Asegúrate de tener instalado:

Node.js (versión 14 o superior recomendada)

npm (Node Package Manager, que viene con Node.js) o Yarn

Instalación
Clona el repositorio (si está en un repositorio, si no, salta este paso y simplemente navega a la carpeta del proyecto):

Bash

git clone <URL_DE_TU_REPOSITORIO>
cd nombre-de-tu-proyecto
Navega a la carpeta del proyecto:

Bash

cd Watcht-List
Instala las dependencias:

Bash

npm install
# o si usas yarn
yarn install
Ejecución
Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo:

Bash

npm run dev
# o si usas yarn
yarn dev
Esto iniciará la aplicación en modo desarrollo. Abre tu navegador y navega a http://localhost:5173 (o el puerto que te indique la consola). La aplicación se recargará automáticamente cada vez que hagas cambios en el código.

🛠️ Tecnologías Utilizadas
React: Una biblioteca de JavaScript para construir interfaces de usuario.

Vite: Un bundler de próxima generación para desarrollo web, utilizado para un inicio rápido y recarga en caliente instantánea.

Tailwind CSS: Un framework de CSS de bajo nivel (utility-first) para construir diseños personalizados rápidamente.

Context API (React): Para la gestión del estado global del carrito y el tema, evitando el "prop drilling".

JavaScript (ES6+): El lenguaje de programación principal.

HTML5: Estructura de la aplicación.

CSS3: Estilos adicionales y personalización.

📂 Estructura del Proyecto
El proyecto sigue una estructura modular para facilitar la escalabilidad y el mantenimiento:

├── public/                 # Archivos estáticos (imágenes, favicon)
│   └── img/                # Imágenes de películas, logo
├── src/
│   ├── assets/             # Recursos adicionales como imágenes del logo (si no están en public)
│   ├── components/         # Componentes reutilizables de UI (Header, Footer, MovieCard, MovieList, WatchlistModal)
│   ├── context/            # Contextos de React para gestión de estado global (CarritoContext, TemaContext)
│   ├── utils/              # Funciones de utilidad y datos estáticos (products.js)
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── main.jsx            # Punto de entrada de la aplicación
│   └── index.css           # Estilos base y de Tailwind
├── .gitignore              # Archivos y carpetas ignorados por Git
├── package.json            # Metadatos del proyecto y dependencias
├── README.md               # Este archivo
└── tailwind.config.js      # Configuración de Tailwind CSS
└── vite.config.js          # Configuración de Vite
📝 Notas del Desarrollador
Este proyecto fue desarrollado como parte de un trabajo práctico, aplicando conceptos de React, gestión de estado con Context API, y diseño con Tailwind CSS, incluyendo la implementación de un modo claro/oscuro con principios de psicología del color.

👨‍💻 Autor
Lautaro Tapia
