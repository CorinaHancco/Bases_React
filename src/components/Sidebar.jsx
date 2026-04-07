import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside style={sidebarStyle}>
          <h2>Menú</h2>
            <ul style={listStyle}>
                <li><Link to="/" style={linkStyle}>🏠 Inicio</Link></li>
                <li><Link to="/usuarios" style={linkStyle}>👥 Usuarios</Link></li>
                <li><Link to="/productos" style={linkStyle}>📦 Productos</Link></li>
                <li><Link to="/pokemons" style={linkStyle}>👻 Pokemon</Link></li>
            </ul>
        </aside>
    );
}

const sidebarStyle = {
    width: '250px',
    background: '#2c3e50',
    color: 'white',
    padding: '20px',
    boxSizing: 'border-box'
    // Quitamos height: 100vh de aquí porque el contenedor padre lo manejará
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '30px'
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'block',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background 0.3s'
};

// Puedes añadir estilos al hover más adelante usando CSS en vivo si lo deseas

export default Sidebar;
