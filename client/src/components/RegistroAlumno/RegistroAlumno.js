import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const RegistroAlumno = () => {

    let navigate = useNavigate()

    const [message, setMessage] = useState("")


    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [codpostal, setCodpostal] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [provincia, setProvincia] = useState("");
    const [privacidad, setPrivacidad] = useState("")


    const [inputNombre, setInputNombre] = useState("input_ra_nombre");
    const [inputApellidos, setInputApellidos] = useState("input_ra_apellidos");
    const [inputEmail, setInputEmail] = useState("input_ra_email");
    const [inputTelefono, setInputTelefono] = useState("input_ra_telefono");
    const [inputDni, setInputDni] = useState("input_ra_dni");
    const [inputCodpostal, setInputCodpostal] = useState("input_ra_codpostal");
    const [inputPoblacion, setInputPoblacion] = useState("input_ra_poblacion");
    const [inputProvincia, setInputProvincia] = useState("input_ra_provincia");

    const [policy, setPolicy] = useState("");


    const politica = () => {
        if (policy == "") {
            setPolicy("True")
        } else {
            setPolicy("")
        }
    }

    const sendDataAlumno = () => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre: nombre, apellidos: apellidos, email: email, telefono: telefono, dni: dni, codpostal: codpostal, poblacion: poblacion, provincia: provincia }),
        };

        fetch("registroAlumno", requestOptions)
            .then((response) => response.json())

            .then((res) => {
                setInputNombre("input_ra_nombre_bien")
                setInputApellidos("input_ra_apellidos_bien")
                setInputEmail("input_ra_email_bien")
                setInputTelefono("input_ra_telefono_bien")
                setInputDni("input_ra_dni_bien")
                setInputCodpostal("input_ra_codpostal_bien")
                setInputPoblacion("input_ra_poblacion_bien")
                setInputProvincia("input_ra_provincia_bien")

                if(res.message) {
                    navigate("/login")
                } else {
                    if (res.test[0] == 'mal') {

                        setInputNombre("input_ra_nombre_mal")
    
                    }
                    if (res.test[1] == 'mal') {
    
                        setInputApellidos("input_ra_apellidos_mal")
    
                    }
                    if (res.test[2] == 'mal') {
                        setInputEmail("input_ra_email_mal")
    
                    }
                    if (res.test[3] == 'mal') {
                        setInputTelefono("input_ra_telefono_mal")
    
                    }
                    if (res.test[4] == 'mal') {
                        setInputDni("input_ra_dni_mal")
                    }
                    if (res.test[5] == 'mal') {
                        setInputCodpostal("input_ra_codpostal_mal")
                    }
                    if (res.test[6] == 'mal') {
                        setInputPoblacion("input_ra_poblacion_mal")
                    }
                    if (res.test[7] == 'mal') {
                        setInputProvincia("input_ra_provincia_mal")
                    }
                }
            })
    };


    return (
        <div>
            {/* <Navbar /> */}
            <div className="form_ra">
                <h4 id="h1_ra">REGISTRO ALUMNO</h4>
                {message ? <p>{message}</p> : ''}
                <div className="contenido">
                    <label id="label_ra_nombre">Nombre*</label>
                    <input id={inputNombre}
                        onChange={(e) => setNombre(e.target.value)} ></input>
                </div>

                <div className="contenido">
                    <label id="label_ra_apellidos">Apellidos</label>
                    <input id={inputApellidos} onChange={(e) => setApellidos(e.target.value)} ></input>
                </div>

                <div className="contenido">
                    <label id="label_ra_email">Email*</label>
                    <input id={inputEmail}
                        onChange={(e) => setEmail(e.target.value)} ></input>
                </div>

                <div className="contenido">
                    <label id="label_ra_telefono">Teléfono Móvil*</label>
                    <input id={inputTelefono}
                        onChange={(e) => setTelefono(e.target.value)} ></input>
                </div>

                <div className="contenido">
                    <label id="label_ra_dni">DNI*</label>
                    <input id={inputDni}
                        onChange={(e) => setDni(e.target.value)} ></input>
                </div>

                <div className="contenido">
                    <label id="label_ra_codpostal">Código Postal</label>
                    <input id={inputCodpostal}
                        onChange={(e) => setCodpostal(e.target.value)} ></input>
                </div>

                <div className="contenido">
                    <label id="label_ra_poblacion">Población</label>
                    <input id={inputPoblacion}
                        onChange={(e) => setPoblacion(e.target.value)} ></input>
                </div>

                <div className="contenido">
                    <label id="label_ra_provincia">Provincia</label>
                    <input id={inputProvincia}
                        onChange={(e) => setProvincia(e.target.value)} ></input>
                </div>

                <div className="aceptarCosa">
                    <div className="privacidad_checkbox">
                        <input  type="checkbox" onClick={() => politica()}></input>
                        <label id="politica_privapcidad"> He leido y acepto la <a id="color_blue">Política de Privacidad</a></label>
                    </div>
                    <br />
                    <br />
                    {nombre && apellidos && email && telefono && dni && codpostal && poblacion && provincia  && policy ? <button className="button_login_enviar"  onClick={() => sendDataAlumno()} >ENVIAR</button> : <button id="boton_ra_enviar" onClick={() => sendDataAlumno()} disabled>ENVIAR</button>}
                </div>
            </div>
        </div>
    )
}

export default RegistroAlumno;