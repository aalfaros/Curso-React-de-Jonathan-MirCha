import React, { useState } from 'react';

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>
        {props.titulo}: {contador}
      </p>
    </>
  );

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    setContador(contador - 1);
  }
}

ContadorHooks.defaultProps = {
  titulo: 'contador de clicks',
};
