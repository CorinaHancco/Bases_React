import { useState, useEffect } from 'react';

function App() {
  // 1. Definimos el estado para nuestros datos (empieza como lista vacía)
  const [productos, setProductos] = useState([]);
  // Estado para saber si está cargando
  const [cargando, setCargando] = useState(true);

  // 2. Simulamos la llamada a una API
  useEffect(() => {
    console.log("El componente se montó. Pidiendo datos...");

    // Simulamos un retraso de red de 2 segundos
    setTimeout(() => {
      const datosFicticios = [
        { id: 1, nombre: 'Laptop Gamer', precio: 1200 },
        { id: 2, nombre: 'Teclado Mecánico', precio: 80 },
        { id: 3, nombre: 'Monitor 4K', precio: 400 },
      ];

      setProductos(datosFicticios); // Guardamos los datos en el estado
      setCargando(false);           // Quitamos el mensaje de carga
    }, 2000);
  }, []); // El array vacío [] significa: "Solo ejecuta esto una vez"

  // 3. Renderizado condicional
  if (cargando) {
    return <h1>Cargando catálogo...</h1>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tienda de Tecnología</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* 4. Mapeamos los datos para crear la vista */}
        {productos.map((item) => (
          <div key={item.id} style={cardStyle}>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <button onClick={() => alert(`Compraste: ${item.nombre}`)}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Un objeto simple para dar estilo a las tarjetas
const cardStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '8px',
  width: '200px'
};

export default App;