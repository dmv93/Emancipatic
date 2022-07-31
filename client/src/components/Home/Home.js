import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Home = () => {

    return (
        <div className="padre_ho">
            {/* <Navbar /> */}
            <div className="home">

                <h3 id="h3_home">¿Qué eres?</h3>
            </div>
            <div className="botones_home">
                <Link to={"/accesoAlumno"} style={{ textDecoration: 'none' }}><input type={"button"} className="button_home_alumno" value={"Alumno"} /></Link>
                <Link to={"/accesoFormador"} style={{ textDecoration: 'none' }}><input type={"button"} className="button_home_formado" value={"Formador"} /></Link>
            </div>
        </div>
    )
}

export default Home;