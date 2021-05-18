import React, { useRef } from 'react';

export default function Referencias() {
  const refMenu = useRef();
  const refMenuBtn = useRef();

  return (
    <>
      <h2>Referencias</h2>
      <nav id="menu" ref={refMenu} style={{ display: 'none' }}>
        <a href="#menu">Sección 1</a>
        <br />
        <a href="#menu">Sección 2</a>
        <br />
        <a href="#menu">Sección 3</a>
        <br />
        <a href="#menu">Sección 4</a>
        <br />
        <a href="#menu">Sección 5</a>
      </nav>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Mostrar menú
      </button>
    </>
  );

  function handleToggleMenu(e) {
    if (refMenuBtn.current.textContent === 'Mostrar menú') {
      refMenuBtn.current.textContent = 'ocultar menú';
      refMenu.current.style.display = 'block';
    } else {
      refMenuBtn.current.textContent = 'Mostrar menú';
      refMenu.current.style.display = 'none';
    }
  }
}
