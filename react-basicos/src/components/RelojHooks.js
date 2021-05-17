import React, { useState, useEffect } from 'react';

export default function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <div>
      <h2>Reloj con hooks</h2>
      {visible && <Reloj hora={hour} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </div>
  );
}

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}
