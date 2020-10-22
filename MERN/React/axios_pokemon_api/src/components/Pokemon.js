import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPoke = () => {
    
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000')
        .then(response => setPokemons(response.data.results))
    
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