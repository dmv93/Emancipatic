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

    const [whatsapp, setWhatsapp] = useState("");
    const [cls1, setCls1] = useState("logoF");

    const [instagram, setInstagram] = useState("");
    const [cls2, setCls2] = useState("logoF");

    const [twitter, setTwitter] = useState("");
    const [cls3, setCls3] = useState("logoF");

    const [facebook, setFacebook] = useState("");
    const [cls4, setCls4] = useState("logoF");

    const [youtube, setYoutube] = useState("");
    const [cls5, setCls5] = useState("logoF");

    const [googleMeet, setGoogleMeet] = useState("");
    const [cls6, setCls6] = useState("logoF");
    

    const img1 = () => {
        if (cls1 == "logoF") {
            setCls1("logoC")
            setWhatsapp("Whatsapp")
        } else {
            setCls1("logoF")
            setWhatsapp("")
        }
    }
    const img2 = () => {
        if (cls2 == "logoF") {
            setCls2("logoC")
            setInstagram("Instagram")
        } else {
            setCls2("logoF")
            setInstagram("")
        }
    }
    const img3 = () => {
        if (cls3 == "logoF") {
            setCls3("logoC")
            setTwitter("Twitter")
        } else {
            setCls3("logoF")
            setTwitter("")
        }
    }
    const img4 = () => {
        if (cls4 == "logoF") {
            setCls4("logoC")
            setFacebook("Facebook")
        } else {
            setCls4("logoF")
            setFacebook("")
        }
    }
    const img5 = () => {
        if (cls5 == "logoF") {
            setCls5("logoC")
            setYoutube("Youtube")
        } else {
            setCls5("logoF")
            setYoutube("")
        }
    }
    const img6 = () => {
        if (cls6 == "logoF") {
            setCls6("logoC")
            setGoogleMeet("Google Meet")
        } else {
            setCls6("logoF")
            setGoogleMeet("")
        }
    }


    const sendDataFormador = () => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre: nombre, apellidos: apellidos, email: email, telefono: telefono, dni: dni, codpostal: codpostal, poblacion: poblacion, provincia: provincia, red1: whatsapp,red2:instagram, red3: twitter, red4: facebook, red5: youtube, red6:googleMeet}),
        };

        fetch("registroFormador", requestOptions)
            .then((response) => response.json())

            .then((res) => {
                console.log(res.message)
            })
    };


    return (


        <div >
            <div id="caja">
                <form className="form_rf">
                    <h4 id="h1_rf">REGISTRO FORMADOR</h4>
                    <div className="contenido">
                        <label id="label_rf_nombre">Nombre*</label>
                        <input id="input_rf_nombre" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$" 
                        onChange={(e) => setNombre(e.target.value)} ></input>
                    </div>

                    <div className="contenido">
                        <label id="label_rf_apellidos">Apellidos</label>
                        <input id="input_rf_apellidos" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$" onChange={(e) => setApellidos(e.target.value)} ></input>
                    </div>

                    <div className="contenido">
                        <label id="label_rf_email">Email*</label>
                        <input id="input_rf_email" pattern="^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$"
                         onChange={(e) => setEmail(e.target.value)} ></input>
                    </div>

                    <div className="contenido">
                        <label id="label_rf_telefono">Teléfono Móvil*</label>
                        <input id="input_rf_telefono" pattern="[0-9]{9}"
                         onChange={(e) => setTelefono(e.target.value)} ></input>
                    </div>

                    <div className="contenido">
                        <label id="label_rf_dni">DNI*</label>
                        <input id="input_rf_dni" pattern="(^[0-9]{8})([-]?)([A-Za-z]{1})$"
                         onChange={(e) => setDni(e.target.value)} ></input>
                    </div>

                    <div className="contenido">
                        <label id="label_rf_codpostal">Código Postal</label>
                        <input id="input_rf_codpostal" pattern="[0-9]{5}"
                         onChange={(e) => setCodpostal(e.target.value)} ></input>
                    </div>

                    <div className="contenido">
                        <label id="label_rf_poblacion">Población</label>
                        <input id="input_rf_poblacion" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$"
                         onChange={(e) => setPoblacion(e.target.value)} ></input>
                    </div>

                    <div className="contenido">
                        <label id="label_rf_provincia">Provincia</label>
                        <input id="input_rf_provincia" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$"
                         onChange={(e) => setProvincia(e.target.value)} ></input>
                    </div>
                    <div className="contenido">
                        <label id="label_rf_poblacion">¿Qué temas puedes enseñar?</label>
                        <input id="input_rf_poblacion" value={`${whatsapp} ${instagram} ${twitter} ${facebook} ${youtube} ${googleMeet}`}></input>


                    </div>

                    <div className="contenido">
                        <img className={cls1} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" alt="whatsapp" onClick={() => img1()}></img>
                        <img className={cls2} type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" onClick={() => img2()}></img>
                    </div>
                    <div className="contenido">
                        <img className={cls3} type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/584px-Twitter-logo.svg.png" alt="twitter" onClick={() => img3()}></img>
                        <img className={cls4} type="image" src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="facebook" onClick={() => img4()}></img>
                    </div>
                    <div className="contenido">
                        <img className={cls5} type="image" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt="youtube" onClick={() => img5()}></img>
                        <img className={cls6} type="image" src="https://1000marcas.net/wp-content/uploads/2022/01/Google-Meet-Logo.png" alt="google" onClick={() => img6()}></img>
                    </div>
                    <div className="contenidoB">
                        <input id="input_rf_check" type="checkbox" ></input>
                        <label id="label_rf_check">He leido y acepto la <a>Política de Privacidad</a></label>
                        <br />
                        <br />
                        {nombre && apellidos && email && telefono && dni && codpostal && poblacion && provincia ? <button id="boton_rf_enviar" onClick={() => sendDataFormador()} >ENVIAR</button> : <button id="boton_rf_enviar" onClick={() => sendDataFormador()} disabled>ENVIAR</button>}

                    </div>
                </form>

            </div>
        </div>
    )
}
export default RegistroFormador;