import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Login = () => {

    let navigate = useNavigate()

    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [privacidad, setPrivacidad] = useState("");


    const sendData = () => {

        let info = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                telefono: telefono,
                dni: password,
            })
        }

        fetch("loginFormador",info)
            .then((response) => response.json())
            .then((res) => {
                if(res) {
                    window.location.assign("/")
                }
            })
    }
    return (
        <div>
            <div className="accesoLogin">
                <h3 id="h3_login">Login</h3>
            </div>
            <div className="form_login">
                <form className="formulario_login">
                    <label htmlFor="" id="label_login_telefono">Teléfono</label>
                    <input type={"telefono"} id="input_login_telefono" name="telefono" placeholder="" onChange={(e) => { setTelefono(e.target.value) }} />

                    <label htmlFor="" id="label_login_password">Password</label>
                    <input type={"passsword"} id="input_login_password" name="password" placeholder="" onChange={(e) => { setPassword(e.target.value) }} />

                    <label htmlFor="" id="label_login_privacidad"></label>
                    <input type={"checkbox"} id="input_login_privacidad" name="privacidad" placeholder="" onChange={(e) => { setPrivacidad(e.target.value) }} />He leido y acepto la política de privacidad
                    <input type={"button"} className="button_login_enviar" onClick={() => sendData()} value={"ENVIAR"} />
                </form>
            </div>
        </div>
    )

}

export default Login;




