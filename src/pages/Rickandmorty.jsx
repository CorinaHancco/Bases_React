import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Rickandmorty() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => {
                setPersonajes(data.results);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <div style={gridStyle}>
                {personajes.map(personaje => (
                    <div key={personaje.id} style={cardStyle}>
                        <img
                            src={personaje.image}
                            alt={personaje.name}
                            style={imageStyle}
                        />
                        <h3 style={{ margin: '15px 0 5px 0', fontSize: '18px' }}>
                            {personaje.name}
                        </h3>
                        <p style={{ margin: 0, color: '#666', fontSize: '15px' }}>
                            <strong>Especie:</strong> {personaje.species}
                        </p>
                        <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '15px' }}>
                            <strong>Estado:</strong> {personaje.status}
                        </p>
                        <Link to={`/rickandmorty/${personaje.id}`} style={btnStyle}>
                            Ver detalles del personaje
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

const gridStyle = {
    display: 'grid',
    /* La clave para que no se desborden de la pantalla es minmax(0, 1fr) */
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '20px',
    width: '100%'
};

const cardStyle = {
    border: '2px solid #28a745',
    borderRadius: '15px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: 0 /* Fundamental para que se deje aplastar a menos del tamaño de las imágenes originales */
};

const imageStyle = {
    width: '100%',
    borderRadius: '10px'
};

const btnStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '100%',
    marginTop: 'auto',
    textDecoration: 'none',
    display: 'block',
    boxSizing: 'border-box'
};

export default Rickandmorty;