import logo from './logo.svg';
import './App.css';
import './components/RegistroFormador/RegistroFormador.css';

import MainComponent from "./page/Main";
import { BrowserRouter, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
