import React, { useState } from 'react';

/* export default function Formularios() {
  const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('vanilla');
  const [lenguaje, setLenguaje] = useState('py');
  const [terminos, setTerminos] = useState(false);

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu sabor de JS favorito</p>
        <input
          type="radio"
          name={sabor}
          id="vanilla"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <br />
        <input
          type="radio"
          name={sabor}
          id="react"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <br />
        <input
          type="radio"
          name={sabor}
          id="angular"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <br />
        <input
          type="radio"
          name={sabor}
          id="vue"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <br />
        <input
          type="radio"
          name={sabor}
          id="svelte"
          value="svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name={lenguaje}
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue="py"
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          checked={terminos}
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" value="enviar" />
      </form>
    </>
  );

  function handleSubmit(e) {
    e.preventDefault();
    alert('El formulario se ha enviado');
  }
} */

export default function Formularios() {
  const [form, setForm] = useState({
    sabor: 'vanilla',
    lenguaje: 'py',
    terminos: false,
  });

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre" onChange={handleChange} />
        <p>Elige tu sabor de JS favorito</p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <br />
        <input
          type="radio"
          name="sabor"
          id="react"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <br />
        <input
          type="radio"
          name="sabor"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <br />
        <input
          type="radio"
          name="sabor"
          id="vue"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <br />
        <input
          type="radio"
          name="sabor"
          id="svelte"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="py">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          checked={form.terminos}
          onChange={handleChecked}
        />
        <br />
        <input type="submit" value="enviar" />
      </form>
    </>
  );

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleChecked(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('El formulario se ha enviado');
  }
}
