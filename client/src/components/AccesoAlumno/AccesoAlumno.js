import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AccesoAlumno = () => {

    return(
        <div className="padre_aa">
            <div className="accesoAlumno">
                <h3 id="h3_AccesoAlumno">Bienvenido Alumno</h3>
            </div>
            <div className="botones_AccesoAlumno">
                <Link to={"/login"}  style={{ textDecoration: 'none' }}><input type={"button"} className="button_accesoAlumno_logIn" value={"Iniciar sesión"} /></Link>
                <Link to={"/registroAlumno"}  style={{ textDecoration: 'none' }}><input type={"button"} className="button_accesoAlumno_registro" value={"Registrarse"} /></Link>
            </div>   
        </div>
    )
}

export default AccesoAlumno;