# ⚛️ React Bases - Panel de Control & Consumo de APIs

Este es un proyecto de práctica y aprendizaje desarrollado con **React** y **Vite**. Funciona como un panel de control corporativo (Dashboard) e incluye integración con múltiples APIs públicas, mostrando distintos módulos de información navegables a través de una barra lateral interactiva.

## 🚀 Características Principales

*   **Navegación Dinámica**: Implementada con `react-router-dom` para transiciones fluidas y rápidas sin recargas de página.
*   **Múltiples Módulos**:
    *   👥 **Usuarios**: Directorio de personal simulado.
    *   📦 **Productos**: Inventario de software.
    *   👻 **Pokémon**: Consumo de la PokéAPI con vistas de lista general y vista detallada por Pokémon.
    *   👽 **Rick and Morty**: Consumo de la API de Rick and Morty con listado de personajes y su perspectiva detallada (Expediente Extraterrestre).
*   **Layout Moderno**: Estructura general de Dashboard conformada por un `Sidebar` de navegación, un `Header` dinámico (que cambia su título de acuerdo a la ruta actual usando `useLocation`), y un `Footer` sutil y moderno.
*   **Diseño Full-Width**: El área de trabajo ocupa el 100% de la pantalla, empleando CSS puro (Flexbox) para asegurar una estructura adaptativa que mantiene el pie de página siempre en la posición correcta.

## 🛠️ Tecnologías Empleadas

*   [React](https://react.dev/) (v18+)
*   [Vite](https://vitejs.dev/) (Entorno de desarrollo y construcción ultrarrápido)
*   [React Router v6](https://reactrouter.com/) (Control del enrutamiento frontend)
*   CSS Nativo (Flexbox para la maquetación)

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto en tu propia máquina:

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   # Ingresar a la carpeta del proyecto
   cd ReactInicio 
   # Asegurarte de estar en la rama correcta si aplica
   git checkout ApiPrueba
   ```

2. **Instalar dependencias**
   *Asegúrate de contar con una versión actualizada de Node.js (se recomienda v20.19+ o >v22.12.0).*
   ```bash
   npm install
   ```

3. **Ejecutar el servidor local**
   ```bash
   npm run dev
   ```

4. **Abrir en el Navegador**
   Abre tu navegador web y visita la URL que te proporciona Vite en la terminal (probablemente `http://localhost:5173/`).

## 📁 Estructura del Proyecto (`src/`)

- `components/`: Contiene piezas de UI centrales y reutilizables como `Sidebar`, `Header` y `Footer`.
- `pages/`: Contiene todas las páginas principales a las que el usuario puede acceder a través de las rutas.
- `App.jsx`: Componente maestro que aloja el Layout y la configuración de directivas `<Routes>`.
- `index.css`: Archivo responsable por las variables de sistema y disposición (Layout y reset) del CSS corporativo del proyecto.

---
⌨️ Desarrollado con ❤️ aplicando las mejores bases de React.
