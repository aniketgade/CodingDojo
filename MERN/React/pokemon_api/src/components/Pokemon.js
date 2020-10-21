import React, { useState } from 'react';

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPoke = () => {
    
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
        .then(response => response.json())
        .then(response => setPokemons(response.results))
    
    }

    return (
        <div>
            <button style={{margin: "20px"}} onClick={fetchPoke}>Fetch Pokemon</button>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=> {
                return (<div key={index}>{index + 1} {pokemon.name}</div>)
            })}
        </div>
    );
}

export default Pokemon;