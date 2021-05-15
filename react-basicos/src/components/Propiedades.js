import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props) {
  return (
    <div>
      <p>Propiedades</p>
      <p>{props.porDefecto}</p>
      <p>{props.otraPropiedad}</p>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? 'verdadero' : 'falso'}</li>
        <li>{props.arreglo.join(' - ')}</li>
        <li>{props.objeto.edad}</li>
        <li>{props.arreglo.map(props.funcion).join(' - ')}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: 'Una props por defecto',
  otraPropiedad: 'otra propiedad pasada',
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
