import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import RegistroFormador from "../components/RegistroFormador/RegistroFormador"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home/Home";
import RegistroAlumno from "../components/RegistroAlumno/RegistroAlumno";
import AccesoAlumno from "../components/AccesoAlumno/AccesoAlumno"
import AccesoFormador from "../components/AccesoFormador/AccesoFormador"

class Main extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="registro" element={<RegistroFormador />} />
                    <Route path="/registroAlumno" element={<RegistroAlumno />} />
                    <Route path="/accesoAlumno" element={<AccesoAlumno />} />
                    <Route path="/accesoFormador" element={<AccesoFormador />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default Main;