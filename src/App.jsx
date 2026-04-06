import { useState } from 'react';
import Producto from './Producto'; // Importamos nuestra pieza de LEGO
import Header from './Header';

function App() {
  const [inventario] = useState([
    { id: 101, nombre: "Laptop Dell", precio: 3500 },
    { id: 102, nombre: "Mouse Pad", precio: 45 },
    { id: 103, nombre: "Monitor curvo", precio: 1200 },
    { id: 104, nombre: "Teclado Mecánico", precio: 80 },
    { id: 105, nombre: "Mouse Pad", precio: 45 },
    { id: 106, nombre: "Monitor curvo", precio: 1200 },
    { id: 107, nombre: "Teclado Mecánico", precio: 80 },
    { id: 108, nombre: "Mouse Pad", precio: 45 },
    { id: 109, nombre: "Monitor curvo", precio: 1200 },
    { id: 110, nombre: "Teclado Mecánico", precio: 80 },
  ]);

  const manejarCompra = (nombre) => {
    alert(`Has seleccionado: ${nombre} para el inventario de San Gabán.`);
  };

  const titulo = "Sistema de Gestión de Activos";
  return (
    <div style={{ fontFamily: 'Arial', padding: '40px' }}>
      <Header titulo={titulo} />

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {inventario.map((item) => (
          <Producto
            key={item.id}
            nombre={item.nombre}
            precio={item.precio}
            alComprar={() => manejarCompra(item.nombre)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;