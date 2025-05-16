import './App.css';
import HelloContainer from './containers/HelloContainer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Bienvenido a mi aplicación React</h1>
        <p>Esta es una aplicación de ejemplo creada con React.</p>
      </div>
      <div>
        <HelloContainer />
      </div>
      <h2>Agregar Elemento</h2>
      <input type="text" placeholder="Escribe un elemento aquí..." />
      <button type="button">Agregar</button>
      <br />
      <ul id="listaDeElementos">
      </ul>

    </div>
  );
}

export default App;