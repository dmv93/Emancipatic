import React, { useState, useEffect } from "react";
// import { scraping } from "../../../controllers/user.controllers";
import { useNavigate } from "react-router-dom";

//Componente funcional -> 
function RegistroFormador(props) {
    let navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [codpostal, setCodpostal] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [provincia, setProvincia] = useState("");




    const sendData = () => {





    };


    return (


        <div >






            <form className="form_rf">
                <h3 id="h1_rf">REGISTRO FORMADOR</h3>
                <div id="impar">

                    <div className="contenido">
                        <label id="label_rf_nombre">Nombre*</label>
                        <input id="input_rf_nombre" onChange={(e) => setNombre(e.target.value)} ></input>
                    </div>
                    <div className="contenido">
                        <label id="label_rf_email">Email*</label>
                        <input id="input_rf_email" onChange={(e) => setEmail(e.target.value)} ></input>
                    </div>
                    <div className="contenido">
                        <label id="label_rf_dni">DNI*</label>
                        <input id="input_rf_dni" onChange={(e) => setDni(e.target.value)} ></input>
                    </div>
                    <div className="contenido">
                        <label id="label_rf_poblacion">Población</label>
                        <input id="input_rf_poblacion" onChange={(e) => setPoblacion(e.target.value)} ></input>
                    </div>
                </div>

                <div id="pares">
                    <div className="contenido">
                        <label id="label_rf_apellidos">Apellidos</label>
                        <input id="input_rf_apellidos" onChange={(e) => setApellidos(e.target.value)} ></input>
                    </div>
                    <div className="contenido">
                        <label id="label_rf_telefono">Teléfono Móvil*</label>
                        <input id="input_rf_telefono" onChange={(e) => setTelefono(e.target.value)} ></input>
                    </div>
                    <div className="contenido">
                        <label id="label_rf_codpostal">Código Postal</label>
                        <input id="input_rf_codpostal" onChange={(e) => setCodpostal(e.target.value)} ></input>
                    </div>
                    <div className="contenido">
                        <label id="label_rf_provincia">Provincia</label>
                        <input id="input_rf_provincia" onChange={(e) => setProvincia(e.target.value)} ></input>
                    </div>
                </div>
                <div className="contenidoB">
                    <input id="input_rf_check" type="checkbox" ></input>
                    <label id="label_rf_check">He leido y acepto la Política de Privacidad</label>
                    <br/>
                    <br/>
                    <button id="boton_rf_enviar" onClick={() => sendData()} >ENVIAR</button>
                </div>
            </form>







        </div>
    )
}
export default RegistroFormador;