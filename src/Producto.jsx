// Producto.jsx
function Producto({ nombre, precio, alComprar }) {
    // Recibimos datos a través de "Props" (las variables entre llaves)
    return (
        <div style={cardStyle}>
            <h3>{nombre}</h3>
            <p>Precio: S/. {precio}</p>
            <button onClick={alComprar}>Añadir al carrito</button>
        </div>
    );
}

const cardStyle = {
    border: '2px solid #005a8d', // Un azul corporativo
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
};

export default Producto;