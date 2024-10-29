import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SobreMi from './components/SobreMi';
import Hobbies from './components/Hobbies';
import ExperienciaLaboral from './components/ExperienciaLaboral';
import ExperienciaAcademica from './components/ExperienciaAcademica';
import Aptitudes from './components/Aptitudes';
import Contacto from './components/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Hoja de Vida Sergio Amaya</h1>
      <hr />
      <SobreMi />
      <hr />
      <Hobbies />
      <hr />
      <ExperienciaLaboral />
      <hr />
      <ExperienciaAcademica />
      <hr />
      <Aptitudes />
      <hr />
      <Contacto />
      <hr />
    </div>
  );
}

export default App;
