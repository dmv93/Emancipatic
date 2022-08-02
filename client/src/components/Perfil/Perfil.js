import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ramiro from '../../assets/ramiro.png'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'
import youtube1 from '../../assets/youtube1.png'
import googleMeet1 from '../../assets/googleMeet.png'
import tick from '../../assets/tick.png'
import Navbar from "../Navbar";

function Perfil(props) {

    const [imagenes1, setImagenes1] = useState(whatsApp)
    const [imagenes2, setImagenes2] = useState(instagram1)
    const [imagenes3, setImagenes3] = useState(twitter1)
    const [imagenes4, setImagenes4] = useState(facebook1)
    const [imagenes5, setImagenes5] = useState(youtube1)
    const [imagenes6, setImagenes6] = useState(googleMeet1)
    const [usuario, setNombreUsuario] = useState("");
    const [telefonoUser, setTelefonoUser] = useState("");

    let navigate = useNavigate();


    const [whatsapp, setWhatsapp] = useState("");
    const [cls1, setCls1] = useState("img_src");

    const [instagram, setInstagram] = useState("");
    const [cls2, setCls2] = useState("img_src");

    const [twitter, setTwitter] = useState("");
    const [cls3, setCls3] = useState("img_src");

    const [facebook, setFacebook] = useState("");
    const [cls4, setCls4] = useState("img_src");

    const [youtube, setYoutube] = useState("");
    const [cls5, setCls5] = useState("img_src");

    const [googlemeet, setGoogleMeet] = useState("");
    const [cls6, setCls6] = useState("img_src");

    const [rrss, setRRSS] = useState("");


    useEffect(() => {
    
        const requestOptions = {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({ telefono: JSON.parse(localStorage.getItem('user')) })
        }

        fetch("informacionAlumno", requestOptions)
            .then((respone) => respone.json())
            .then((res) => {
                setNombreUsuario(res.data)
            })

    }, [])
    console.log(telefonoUser)

    const img1 = () => {
        if (cls1 == "img_src") {
            setCls1("img_src_click")
            setImagenes1(tick)
            setWhatsapp("Whatsapp")
        } else {
            setCls1("img_src")
            setImagenes1(whatsApp)
            setWhatsapp("")

        }
    }
    const img2 = () => {
        if (cls2 == "img_src") {
            setCls2("img_src_click")
            setImagenes2(tick)
            setInstagram("Instagram")
        } else {
            setCls2("img_src")
            setImagenes2(instagram1)
            setInstagram("")

        }
    }
    const img3 = () => {
        if (cls3 == "img_src") {
            setCls3("img_src_click")
            setImagenes3(tick)
            setTwitter("Twitter")
        } else {
            setCls3("img_src")
            setImagenes3(twitter1)
            setTwitter("")
        }
    }
    const img4 = () => {
        if (cls4 == "img_src") {
            setCls4("img_src_click")
            setImagenes4(tick)
            setFacebook("Facebook")
        } else {
            setCls4("img_src")
            setImagenes4(facebook1)
            setFacebook("")
        }
    }
    const img5 = () => {
        if (cls5 == "img_src") {
            setCls5("img_src_click")
            setImagenes5(tick)
            setYoutube("Youtube")
        } else {
            setCls5("img_src")
            setImagenes5(youtube1)
            setYoutube("")
        }
    }
    const img6 = () => {
        if (cls6 == "img_src") {
            setCls6("img_src_click")
            setImagenes6(tick)
            setGoogleMeet("Google Meet")
        } else {
            setCls6("img_src")
            setImagenes6(googleMeet1)
            setGoogleMeet("")
        }
    }


    const sendAsignaturas = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({user: usuario, red1: whatsapp, red2: instagram, red3: twitter, red4: facebook, red5: youtube, red6: googlemeet })
        }

        fetch("interes", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                if(res.message){
                    navigate("/profesoresrecomendados");
                }
            })
    }

    

    return (
            <div>
                <Navbar color="transparent" border="transparent"/>
                <div className="contenedor1">
                    <div className="img_perfil">
                        <img className='imgRedonda' src={ramiro} alt="ramiro" />
                    </div>
                    <h3 id="perfil">Bienvenido, {usuario}</h3>
                </div>
                <div className="categorias">
                    <h1 id="categorias_h1">Selecciona tus categorías</h1>
                </div>
                <div className="selecciona_categorias">
                    <div className="rrss">
                        <img className={cls1} src={imagenes1} alt="whatsApp" onChange={(e) => setWhatsapp(e.target.value)} onClick={() => img1()} />
                    </div>
                    <div className="rrss">
                        <img className={cls2} src={imagenes2} alt="instagram" onChange={(e) => setInstagram(e.target.value)} onClick={() => img2()} />
                    </div>
                    <div className="rrss">
                        <img className={cls3} src={imagenes3} alt="twitter" onChange={(e) => setTwitter(e.target.value)} onClick={() => img3()} />
                    </div>
                    <div className="rrss">
                        <img className={cls4} src={imagenes4} alt="facebook" onChange={(e) => setFacebook(e.target.value)} onClick={() => img4()} />
                    </div>
                    <div className="rrss">
                        <img className={cls5} src={imagenes5} alt="youtube" onChange={(e) => setYoutube(e.target.value)} onClick={() => img5()} />
                    </div>
                    <div className="rrss">
                        <img className={cls6} src={imagenes6} alt="googleMeet" onChange={(e) => setGoogleMeet(e.target.value)} onClick={() => img6()} />
                    </div>
                </div>
                <div className="boton_perfil">
                    <input type={"button"} className="boton_pe" onClick={() => sendAsignaturas()} value="ENVIAR"/>
                </div>
            </div>

            )
}

            export default Perfil;