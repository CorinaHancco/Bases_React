import { useState } from 'react';

function Productos() {
    const [items] = useState([
        { id: 1, nombre: "Licencia Office 365", precio: 150 },
        { id: 2, nombre: "Antivirus Corporativo", precio: 80 },
        { id: 3, nombre: "Servidor Cloud", precio: 500 }
    ]);

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
                {items.map(p => (
                    <div key={p.id} style={cardStyle}>
                        <h3>{p.nombre}</h3>
                        <p>Precio: S/. {p.precio}</p>
                        <button>Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const cardStyle = {
    border: '2px solid #005a8d',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
};

export default Productos;
