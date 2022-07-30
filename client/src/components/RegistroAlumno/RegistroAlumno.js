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

    const sendDataAlumno = () => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre:nombre,apellidos:apellidos,email:email,telefono:telefono,dni:dni,codpostal:codpostal,poblacion:poblacion,provincia:provincia }),
        };

        fetch("registroAlumno",requestOptions)
            .then((response) => response.json())

            .then((res) => {
                console.log(res.message)
            })
    }


    return (
        <div>
            <form className="formulario_ra">
                <h2 id="h2_ra">REGISTRO ALUMNO</h2>
                <div id="primera_ra">
                    <label htmlFor="" id="label_ra_nombre">Nombre</label>
                    <input type={"text"} id="input_ra_nombre" name="nombre" placeholder="" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$"
                     onChange={(e) => { setNombre(e.target.value) }} />

                    <label htmlFor="" id="label_ra_apellidos">Apellidos</label>
                    <input type={"text"} id="input_ra_apellidos" name="apellidos" placeholder="" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$"
                     onChange={(e) => { setApellidos(e.target.value) }} />
                </div>
                <div id="segundo_ra">
                    <label htmlFor="" id="label_ra_email">Email</label>
                    <input type={"email"} id="input_ra_email" name="email" placeholder="" pattern="^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$"
                     onChange={(e) => { setEmail(e.target.value) }} />

                    <label htmlFor="" id="label_ra_telefono">Teléfono Móvil</label>
                    <input type={"tel"} id="input_ra_telefono" name="telefono" placeholder="" pattern="[0-9]{9}"
                     onChange={(e) => { setTelefono(e.target.value) }} />
                </div>
                <div id="tercero_ra">
                    <label htmlFor="" id="label_ra_dni">DNI</label>
                    <input type={"text"} id="input_ra_dni" name="dni" placeholder="" pattern="(^[0-9]{8})([-]?)([A-Za-z]{1})$"
                     onChange={(e) => { setDni(e.target.value) }} />

                    <label htmlFor="" id="label_ra_cp">Distrito Postal</label>
                    <input type={"number"} id="input_ra_cp" name="cp" placeholder="" pattern="[0-9]{5}"
                     onChange={(e) => { setCodPostal(e.target.value) }} />
                </div>
                <div id="cuarto_ra">
                    <label htmlFor="" id="label_ra_poblacion">Población</label>
                    <input type={"text"} id="input_ra_poblacion" name="poblacion" placeholder="" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$"
                     onChange={(e) => { setPoblacion(e.target.value) }} />

                    <label htmlFor="" id="label_ra_provincia">Provincia</label>
                    <input type={"text"} id="input_ra_provincia" name="provincia" placeholder="" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$"
                     onChange={(e) => { setProvincia(e.target.value) }} />
                </div>                    
                {/* <div id="quinto_ra">
                    <input type={"checkbox"} id="input_ra_check"></input>
                    <label htmlFor="" id="label_ra_check">He leído y acepto la Política de Provacidad</label>
                    <br/>
                    <br/>
                    {nombre && apellidos && email && telefono && dni && codpostal && poblacion && provincia ? <button id="boton_ra_enviar" onClick={() => sendDataAlumno()} >ENVIAR</button> : <button id="boton_ra_enviar" onClick={() => sendDataAlumno()} disabled>ENVIAR</button>}
                    
                </div> */}
                <br />
                <div className="quinto_ra">
                        <input id="input_ra_check" type={"checkbox"} ></input>
                        <label id="label_ra_check">He leido y acepto la <a>Política de Privacidad</a></label>
                        <br />
                        <br />
                        {nombre && apellidos && email && telefono && dni && codpostal && poblacion && provincia ? <button id="boton_ra_enviar" onClick={() => sendDataAlumno()} >ENVIAR</button> : <button id="boton_ra_enviar" onClick={() => sendDataAlumno()} disabled>ENVIAR</button>}

                    </div>
                </form>
        </div>
    )
}

export default RegistroAlumno;