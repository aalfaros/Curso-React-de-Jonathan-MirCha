import CrudApi from './components/CrudApi'
import CrudApp from './components/CrudApp'
import SongSearch from './components/SongSearch'

function App() {
  return (
    <>
      <h2>Ejercicios con React</h2>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  )
}

export default App
