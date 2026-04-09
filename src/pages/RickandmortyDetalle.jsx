import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function RickandmortyDetalle() {
    const { id } = useParams();
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        // Pedimos los datos del personaje individual a la API
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setPersonaje(data));
    }, [id]);

    if (!personaje) {
        return <div style={{ padding: '20px' }}>🛸 Descargando datos interdimensionales...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Link to="/rickandmorty" style={btnBackStyle}>⬅ Volver a todos los personajes</Link>
            
            <div style={cardStyle}>
                <h2>{personaje.name}</h2>
                <img 
                    src={personaje.image} 
                    alt={personaje.name} 
                    style={imageStyle} 
                />
                <div style={infoContainerStyle}>
                    <p style={pStyle}><strong>Especie:</strong> {personaje.species}</p>
                    <p style={pStyle}><strong>Estado:</strong> {personaje.status}</p>
                    <p style={pStyle}><strong>Género:</strong> {personaje.gender}</p>
                    <p style={pStyle}><strong>Planeta de Origen:</strong> {personaje.origin?.name}</p>
                    <p style={pStyle}><strong>Ubicación Actual:</strong> {personaje.location?.name}</p>
                </div>
            </div>
        </div>
    );
}

// === Estilos ===

const cardStyle = {
    border: '2px solid #28a745',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#1a1a1a', // Un fondo oscuro que encaja con ciencia ficción
    color: '#00ff41',           // Letras verde hacker/alien
    textAlign: 'center',
    marginTop: '30px',
    maxWidth: '400px'
};

const imageStyle = {
    width: '60%', // Imagen un poco más centrada
    borderRadius: '50%',
    border: '5px solid #28a745',
    marginBottom: '15px'
};

const btnBackStyle = {
    textDecoration: 'none',
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '5px',
    fontWeight: 'bold',
    display: 'inline-block'
};

const infoContainerStyle = {
    textAlign: 'left',
    backgroundColor: '#2b2b2b',
    padding: '15px',
    borderRadius: '10px',
    marginTop: '15px'
};

const pStyle = {
    margin: '8px 0',
    color: '#e0e0e0' // Texto descriptivo en blanco/gris para leerse fácil en fondo oscuro
};

export default RickandmortyDetalle;
