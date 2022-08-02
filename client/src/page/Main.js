import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import RegistroFormador from "../components/RegistroFormador/RegistroFormador"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home/Home";
import RegistroAlumno from "../components/RegistroAlumno/RegistroAlumno";
import Login from "../components/Login/Login"
import AccesoAlumno from "../components/AccesoAlumno/AccesoAlumno";
import AccesoFormador from "../components/AccesoFormador/AccesoFormador";
import LoginFormador from "../components/logInFormador/logInFormador"
import Perfil from "../components/Perfil/Perfil";
import ProfesoresRecomendados from "../components/ProfesoresRecomendados/ProfesoresRecomendados";
import TuProfesor from "../components/TuProfesor/TuProfesor";
import PerfilProfesor from "../components/perfilProfesor/perfilProfesor";
import Chat from "../components/Chat/Chat";


class Main extends Component {
    render() {
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="registro" element={<RegistroFormador />} />
                    <Route path="/registroAlumno" element={<RegistroAlumno />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/accesoAlumno" element={<AccesoAlumno />} />
                    <Route path="/accesoFormador" element={<AccesoFormador />} />
                    <Route path="/loginFormador" element={<LoginFormador />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/profesoresrecomendados" element={<ProfesoresRecomendados />} />
                    <Route path="/tuprofesor" element={<TuProfesor />} />
                    <Route path="/perfilProfesor" element={<PerfilProfesor />} />
                    <Route path="/chat" element={<Chat />} />

                </Routes>
                <Footer />
            </div>
        )
    }
}

export default Main;