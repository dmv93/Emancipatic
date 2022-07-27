import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home/Home";
import RegistroAlumno from "../components/RegistroAlumno/RegistroAlumno";

class Main extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registroAlumno" element={<RegistroAlumno />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default Main;