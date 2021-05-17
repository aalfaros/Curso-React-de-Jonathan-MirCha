import React, { Component } from 'react';

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach((pokemonObj) => {
          fetch(pokemonObj.url)
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              const pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              const pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons: pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones asíncronas en componentes de clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando pokemons...</h3>
        ) : (
          this.state.pokemons.map((pokemon) => (
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
}
