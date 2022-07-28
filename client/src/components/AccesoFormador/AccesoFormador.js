import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AccesoFormador = () => {

    return(
        <div>
            <div className="accesoFormador">
                <h3 id="h3_AccesoFormador">Bienvenido Formador</h3>
            </div>
            <div className="botones_AccesoFormador">
                <Link to={"/"}><input type={"button"} className="button_accesoFormador_logIn" value={"Iniciar sesión"} /></Link>
                <Link to={"/"}><input type={"button"} className="button_accesoFormador_registro" value={"Registrarse"} /></Link>
            </div>   
        </div>
    )
}

export default AccesoFormador;