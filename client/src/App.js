import { BrowserRouter, Link, Navigate } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
import Main from './page/Main'

//IMPORTAMOS LOS ESTILOS DE BOOTSTRAP REACT
import 'bootstrap/dist/css/bootstrap.min.css';

import './components/RegistroFormador/RegistroFormador.css';
import './components/Home/home.css';
import './components/Login/Login.css'
import './components/Footer.css';
import './components/AccesoFormador/AccesoFormador.css';
import './components/AccesoAlumno/AccesoAlumno.css';
import './components/RegistroAlumno/registroAlumno.css';
import './components/Perfil/Perfil.css';
import './components/Navbar.css';
import './components/ProfesoresRecomendados/ProfesoresRecomendados.css'
import './components/TuProfesor/TuProfesor.css'
import './components/perfilProfesor/perfilProfesor.css'

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
