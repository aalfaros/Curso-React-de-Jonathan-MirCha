import React, { useState, useEffect } from 'react';

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  /* useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach((pokemonObj) => {
          fetch(pokemonObj.url)
            .then((response) => response.json())
            .then((json) => {
              const pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []); */

  useEffect(() => {
    const getPokemons = async (url) => {
      const response = await fetch(url);
      const json = await response.json();

      json.results.forEach(async (pokemonObj) => {
        const response = await fetch(pokemonObj.url);
        const json = await response.json();

        const pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  return (
    <>
      <h2>Peticiones asíncronas en hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando pokemons...</h3>
      ) : (
        pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            avatar={pokemon.avatar}
          />
        ))
      )}
    </>
  );
}

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
