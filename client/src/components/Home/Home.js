import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div>
            <div className="home">
                <h3 id="h3_home">¿Qué eres?</h3>
            </div>
            <div className="botones_home">
                <Link to={"/"}><input type={"button"} className="button_home_alumno" value={"Alumno"} /></Link>
                <Link to={"/"}><input type={"button"} className="button_home_formado" value={"Formador"} /></Link>
            </div>   
        </div>
    )
}

export default Home;