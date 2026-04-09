import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PokemonDetalle() {
  const { nombre } = useParams(); // Rescata el parámetro dinámico de la URL
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    // Pedimos a la API la información de un Pokémon en particular
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(res => res.json())
      .then(data => setDetalle(data));
  }, [nombre]);

  if (!detalle) {
    return <div style={{ padding: '20px' }}>⏳ Cargando datos de {nombre}...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Botón para regresar a la lista de Pokémons */}
      <Link to="/pokemons" style={btnBackStyle}>⬅ Volver a todos los Pokémon</Link>
      
      {/* Tarjeta Visual del Pokémon */}
      <div style={cardStyle}>
        <h2>{detalle.name.toUpperCase()}</h2>
        <img 
          src={detalle.sprites.front_default} 
          alt={detalle.name} 
          style={{ width: '150px' }} 
        />
        <p><strong>Número Pokedex:</strong> #{detalle.id}</p>
        <p><strong>Peso:</strong> {detalle.weight / 10} kg</p>
        <p><strong>Altura:</strong> {detalle.height / 10} m</p>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '2px solid #5a008d',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  marginTop: '20px',
  maxWidth: '300px'
};

const btnBackStyle = {
  textDecoration: 'none',
  padding: '10px 15px',
  backgroundColor: '#db8b40',
  color: 'black',
  borderRadius: '5px',
  fontWeight: 'bold'
};

export default PokemonDetalle;
