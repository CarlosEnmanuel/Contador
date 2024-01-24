import './App.css';
import Boton from './componentes/btn';
import Contador from './componentes/contador';
import freecodecamp from './imagenes/freecodecamp.png';
import { useState } from 'react';

function App() {

  const [ numClics, setNumClics] = useState(0);

  const manejarClic = () => {
      setNumClics(numClics + 5);

  }

  const reiniciarContador = () => {
      setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'> 
        <img 
        className='logo'
        src={freecodecamp}
        alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics={numClics}/>
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
