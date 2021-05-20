import React from 'react';
import './Estilos.css';
import './Estilos.scss';
import moduleStyles from './Estilos.module.css';

export default function Estilos() {
  const myStyles = {
    borderRadius: '.5rem',
    margin: '5rem auto',
    maxWidth: '50%',
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: '.5rem', margin: '5rem' }}
      >
        Estilos en línea (atributo style)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en línea
      </h3>
      <h3 className="bg-react">
        Agregando Normalize con
        <br />
        <code>@import-normalize;</code>
      </h3>
      <h3 className={moduleStyles.error}>Estilos con módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con módulos</h3>
      <br />
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
