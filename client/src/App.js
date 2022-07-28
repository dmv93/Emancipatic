import { BrowserRouter, Link, Navigate } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
import Main from './page/Main'

import './components/RegistroFormador/RegistroFormador.css';
import './components/Home/home.css';
import './components/Login/Login.css'
import './components/Footer.css';
import './components/AccesoFormador/AccesoFormador.css';
import './components/AccesoAlumno/AccesoAlumno.css';
import './components/RegistroAlumno/registroAlumno.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
