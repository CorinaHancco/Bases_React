import { useState, useEffect } from 'react';

function Pokemons() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        // Obtenemos una lista general de Pokémon (los primeros 20)
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => {
                // PokeAPI devuelve los datos dentro de un arreglo llamado "results"
                setLista(data.results);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <ul>
                {lista.map(pokemon => (
                    // Usamos el nombre como clave porque la URL inicial no nos trae IDs
                    <li key={pokemon.name}>
                        <strong>{pokemon.name}</strong> 
                        <br/><small>Ruta: {pokemon.url}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemons;