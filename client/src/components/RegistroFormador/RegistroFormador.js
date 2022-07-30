import React, { useState, useEffect } from "react";
// import { scraping } from "../../../controllers/user.controllers";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";


import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'
import youtube1 from '../../assets/youtube1.png'
import googleMeet1 from '../../assets/googleMeet.png'
import tick from '../../assets/tick.png'

//Componente funcional -> 
function RegistroFormador(props) {
    let navigate = useNavigate();

    const [imagenes1, setImagenes1] = useState(whatsApp)
    const [imagenes2, setImagenes2] = useState(instagram1)
    const [imagenes3, setImagenes3] = useState(twitter1)
    const [imagenes4, setImagenes4] = useState(facebook1)
    const [imagenes5, setImagenes5] = useState(youtube1)
    const [imagenes6, setImagenes6] = useState(googleMeet1)

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

    const [policy, setPolicy] = useState("");


    const img1 = () => {
        if (cls1 == "logoF") {
            setCls1("logoC")
            setWhatsapp("Whatsapp")
            setImagenes1(tick)
        } else {
            setCls1("logoF")
            setWhatsapp("")
            setImagenes1(whatsApp)
        }
    }
    const img2 = () => {
        if (cls2 == "logoF") {
            setCls2("logoC")
            setInstagram("Instagram")
            setImagenes2(tick)
        } else {
            setCls2("logoF")
            setInstagram("")
            setImagenes2(instagram1)
        }
    }
    const img3 = () => {
        if (cls3 == "logoF") {
            setCls3("logoC")
            setTwitter("Twitter")
            setImagenes3(tick)
        } else {
            setCls3("logoF")
            setTwitter("")
            setImagenes3(twitter1)
        }
    }
    const img4 = () => {
        if (cls4 == "logoF") {
            setCls4("logoC")
            setFacebook("Facebook")
            setImagenes4(tick)
        } else {
            setCls4("logoF")
            setFacebook("")
            setImagenes4(facebook1)
        }
    }
    const img5 = () => {
        if (cls5 == "logoF") {
            setCls5("logoC")
            setYoutube("Youtube")
            setImagenes5(tick)
        } else {
            setCls5("logoF")
            setYoutube("")
            setImagenes5(youtube1)
        }
    }
    const img6 = () => {
        if (cls6 == "logoF") {
            setCls6("logoC")
            setGoogleMeet("Google Meet")
            setImagenes6(tick)
        } else {
            setCls6("logoF")
            setGoogleMeet("")
            setImagenes6(googleMeet1)
        }
    }
    const politica = () => {
        if (policy == "") {
            setPolicy("True")
        } else {
            setPolicy("")
        }
    }


    const sendDataFormador = () => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre: nombre, apellidos: apellidos, email: email, telefono: telefono, dni: dni, codpostal: codpostal, poblacion: poblacion, provincia: provincia, red1: whatsapp, red2: instagram, red3: twitter, red4: facebook, red5: youtube, red6: googleMeet }),
        };

        fetch("registroFormador", requestOptions)
            .then((response) => response.json())

            .then((res) => {
                console.log(res.message)
            })
    };


    return (


        <div>
        <Navbar />
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

                    <div className="contenedor">
                        <div className="contenidoI">
                            <img className={cls1} type="iamge" src={imagenes1} alt="whatsapp" onClick={() => img1()}></img>
                        </div>
                        <div className="contenidoI">
                            <img className={cls2} type="image" src={imagenes2} alt="instagram" onClick={() => img2()}></img>
                        </div>
                        <div className="contenidoI">
                            <img className={cls3} type="image" src={imagenes3} alt="twitter" onClick={() => img3()}></img>
                        </div>
                        <div className="contenidoI">
                            <img className={cls4} type="image" src={imagenes4} alt="facebook" onClick={() => img4()}></img>
                        </div>
                        <div className="contenidoI">
                            <img className={cls5} type="image" src={imagenes5} alt="youtube" onClick={() => img5()}></img>
                        </div>
                        <div className="contenidoI">
                            <img className={cls6} type="image" src={imagenes6} alt="google" onClick={() => img6()}></img>
                        </div>


                    </div>

                    <div className="contenidoB">
                        <input id="input_rf_check" type="checkbox" onClick={() => politica()}></input>
                        <label id="label_rf_check">He leido y acepto la <a>Política de Privacidad</a></label>
                        <br />
                        <br />
                        {nombre && apellidos && email && telefono && dni && codpostal && poblacion && provincia && (whatsapp || instagram || twitter || facebook || youtube || googleMeet) && policy ? <button id="boton_rf_enviar" onClick={() => sendDataFormador()} >ENVIAR</button> : <button id="boton_rf_enviar" onClick={() => sendDataFormador()} disabled>ENVIAR</button>}
                    </div>

                </form>

            </div>
        </div>
    )
}
export default RegistroFormador;