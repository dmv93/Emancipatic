import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegistroAlumno = () => {

    let navigate = useNavigate()

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [codpostal, setCodPostal] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [provincia, setProvincia] = useState("");

    const sendData = () => {


    }


    return(
        <div>
            <h1 id="h1_ra">REGISTRO ALUMNO</h1>
            <div className="form_ra">
                <form className="formulario_ra">
                    <label htmlFor="" id="label_ra_nombre">Nombre</label>
                    <input type={"text"} id="input_ra_nombre" name="nombre" placeholder="" onChange={(e) => { setNombre(e.target.value) }} />

                    <label htmlFor="" id="label_ra_apellidos">Apellidos</label>
                    <input type={"text"} id="input_ra_apellidos" name="apellidos" placeholder="" onChange={(e) => { setApellidos(e.target.value) }} />

                    <label htmlFor="" id="label_ra_email">Email</label>
                    <input type={"email"} id="input_ra_email" name="email" placeholder="" onChange={(e) => { setEmail(e.target.value) }} />

                    <label htmlFor="" id="label_ra_telefono">Teléfono Móvil</label>
                    <input type={"tel"} id="input_ra_telefono" name="telefono" placeholder="" onChange={(e) => { setTelefono(e.target.value) }} />

                    <label htmlFor="" id="label_ra_dni">DNI</label>
                    <input type={"text"} id="input_ra_dni" name="dni" placeholder="" onChange={(e) => { setDni(e.target.value) }} />

                    <label htmlFor="" id="label_ra_cp">Distrito Postal</label>
                    <input type={"number"} id="input_ra_cp" name="cp" placeholder="" onChange={(e) => { setCodPostal(e.target.value) }} />

                    <label htmlFor="" id="label_ra_poblacion">Población</label>
                    <input type={"text"} id="input_ra_poblacion" name="poblacion" placeholder="" onChange={(e) => { setPoblacion(e.target.value) }} />

                    <label htmlFor="" id="label_ra_provincia">Provincia</label>
                    <input type={"text"} id="input_ra_provincia" name="provincia" placeholder="" onChange={(e) => { setProvincia(e.target.value) }} />

                    <input type={"checkbox"} id="input_ra_check"></input>
                    <label htmlFor="" id="label_ra_check">He leído y acepto la Política de Provacidad</label>

                    <input type={"button"} className="button_ra_enviar" value={"ENVIAR"} />
                </form>
            </div>
        </div>
    )
}

export default RegistroAlumno;