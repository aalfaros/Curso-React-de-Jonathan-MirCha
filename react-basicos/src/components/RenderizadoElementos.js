import React, { Component } from 'react';
import data from '../helpers/data.json';

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ['primavera', 'verano', 'otoño', 'invierno'],
    };
  }

  render() {
    return (
      <div>
        <h2>RenderizadoElementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((estacion) => (
            <li key={estacion}>{estacion}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((framework) => (
            <ElementoLista key={framework.id} framework={framework} />
          ))}
        </ul>
      </div>
    );
  }
}

function ElementoLista(props) {
  return (
    <li>
      <a href={props.framework.web} target="_blank" rel="noopener noreferrer">
        {props.framework.name}
      </a>
    </li>
  );
}
