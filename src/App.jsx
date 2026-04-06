import { useState } from 'react'

function App() {
  // Definimos un "estado" llamado cuenta que empieza en 0
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'blue' }}>
      <h1>Mi primer contador en React</h1>
      <p>Has hecho clic {cuenta} veces</p>

      <button onClick={() => setCuenta(cuenta + 1)}>
        Aumentar
      </button>

      <button onClick={() => setCuenta(cuenta - 1)}>
        Disminuir
      </button>

      <button onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;