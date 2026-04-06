// Producto.jsx
function Header({ titulo }) {
    return (
        <div style={cardStyle}>
            <h3>{titulo}</h3>
        </div>
    );
}

const cardStyle = {
    border: '2px solid #005a8d', // Un azul corporativo
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#db8b40ff',
    textAlign: 'center',
    color: '#000000ff'
};

export default Header;