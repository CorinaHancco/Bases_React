import { useState, useEffect } from 'react';

function Usuarios() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setLista(data));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <ul>
                {lista.map(u => (
                    <li key={u.id}><strong>{u.name}</strong> - {u.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;