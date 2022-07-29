import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AccesoFormador = () => {

    return (
        <div className="padre_af">
            <div className="home">
                <h3 id="h3_home">Bienvenido Formador</h3>
            </div>
            <br />
            <br />
            <div className="botones_AccesoFormador">
                <Link to={"/loginFormador"} style={{ textDecoration: 'none' }}><input type={"button"} className="button_accesoFormador_logIn" value={"Iniciar sesión"} /></Link>
                <br />
                <Link to={"/registro"} style={{ textDecoration: 'none' }}><input type={"button"} className="button_accesoFormador_registro" value={"Registrarse"} /></Link>
            </div>
        </div>
    )
}

export default AccesoFormador;