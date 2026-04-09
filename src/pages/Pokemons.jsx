import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pokemons() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        // Obtenemos una lista general de Pokémon (los primeros 20)
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => {
                setLista(data.results);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {lista.map(pokemon => (
                    <li key={pokemon.name} style={{ margin: '15px 0' }}>
                        <Link 
                           to={`/pokemons/${pokemon.name}`} 
                           style={{ textDecoration: 'none', color: '#005a8d', fontSize: '18px', fontWeight: 'bold' }}
                        >
                           🔍 Ver perfil de {pokemon.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemons;