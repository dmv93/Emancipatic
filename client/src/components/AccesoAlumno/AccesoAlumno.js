import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AccesoAlumno = () => {

    return(
        <div>
            <div className="home">
                <h3 id="h3_home">Bienvenido Alumno</h3>
            </div>
            <div className="botones_home">
                <Link to={"/"}><input type={"button"} className="button_accesoAlumno_logIn" value={"Iniciar sesión"} /></Link>
                <Link to={"/registroAlumno"}><input type={"button"} className="button_accesoAlumno_registro" value={"Registrarse"} /></Link>
            </div>   
        </div>
    )
}

export default AccesoAlumno;