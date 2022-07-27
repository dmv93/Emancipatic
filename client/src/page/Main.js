import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import RegistroFormador from "../components/RegistroFormador/RegistroFormador"



// import Contact from "../pages/Contact";
class Main extends Component {
    

    render() {
        return (
        <div>
            <Routes>
                <Route path="registro" element={<RegistroFormador />} />
              
            </Routes>
        </div>
        );
    }
}
export default Main;