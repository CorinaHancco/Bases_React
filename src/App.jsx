import { Routes, Route, useLocation } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos';
import Pokemons from './pages/Pokemons';
import PokemonDetalle from './pages/PokemonDetalle';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Rickandmorty from './pages/rickandmorty';

function App() {
  const location = useLocation();
  let tituloHeader = "Bienvenida al Panel de Control";

  if (location.pathname === "/usuarios") tituloHeader = "👥 Directorio de Personal";
  if (location.pathname === "/productos") tituloHeader = "📦 Inventario de Software";
  if (location.pathname === "/pokemons") tituloHeader = "👻 Pokemons";
  if (location.pathname.startsWith("/pokemons/")) tituloHeader = "🔍 Detalles del Pokémon";
  if (location.pathname === "/rickandmorty") tituloHeader = "🙉 Detalles del Rick and Morty";

  return (
    <div style={{ display: 'flex', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Sidebar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        <Header titulo={tituloHeader} />

        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<div><h2>Selecciona una opción del menú izquierdo.</h2></div>} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/pokemons/:nombre" element={<PokemonDetalle />} />
            <Route path="/rickandmorty" element={<Rickandmorty />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;