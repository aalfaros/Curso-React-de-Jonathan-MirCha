import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. Bienvenido a React.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Soy un componente funcional expresado desde las props" />
          <hr />
          <Propiedades
            cadena="esto es una cadena"
            numero={48}
            booleano={false}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: 'Andrés', edad: 48 }}
            funcion={(num) => num * num}
            elementoReact={<i>esto es un elemento React </i>}
            componenteReact={
              <Componente msg="soy un componente pasado como Prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
        </section>
      </header>
    </div>
  );
}

export default App;
