import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

import ramiro from '../../assets/ramiro.png'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'
import youtube1 from '../../assets/youtube1.png'
import googleMeet1 from '../../assets/googleMeet.png'

function Perfil(props){

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

    const img1 = () => {
        if (cls1 == "img_src") {
            setCls1("img_src_click")
        } else {
            setCls1("img_src")
        }
    }
    const img2 = () => {
        if (cls2 == "img_src") {
            setCls2("img_src_click")
        } else {
            setCls2("img_src")
        }
    }
    const img3 = () => {
        if (cls3 == "img_src") {
            setCls3("img_src_click")
        } else {
            setCls3("img_src")
        }
    }
    const img4 = () => {
        if (cls4 == "img_src") {
            setCls4("img_src_click")
        } else {
            setCls4("img_src")
        }
    }
    const img5 = () => {
        if (cls5 == "img_src") {
            setCls5("img_src_click")
        } else {
            setCls5("img_src")
        }
    }
    const img6 = () => {
        if (cls6 == "img_src") {
            setCls6("img_src_click")
        } else {
            setCls6("img_src")
        }
    }


    return (
        <div>
            <div className="contenedor">
                <div className="img_perfil">
                    <img className='imgRedonda' src={ramiro} alt="ramiro" />
                </div>
                <h3 id="perfil">Bienvenido, Ramiro</h3>
            </div>
            <div className="categorias">
                <h1 id="categorias_h1">Selecciona tus categorías</h1>
            </div>
            <div className="selecciona_categorias">
                <div className="rrss">
                    <img className= {cls1} src={whatsApp} alt="whatsApp" onChange={(e) => setWhatsapp(e.target.value)} onClick={() => img1()} />
                </div>
                <div className="rrss">
                    <img  className= {cls2}  src={instagram1} alt="instagram" onChange={(e) => setInstagram(e.target.value)} onClick={() => img2()} />
                </div>
                <div className="rrss">
                    <img className= {cls3} src={twitter1} alt="twitter" onChange={(e) => setTwitter(e.target.value)} onClick={() => img3()} />
                </div>
                <div className="rrss">
                    <img className= {cls4}  src={facebook1} alt="facebook"onChange={(e) => setFacebook(e.target.value)} onClick={() => img4()} />
                </div>
                <div className="rrss">
                    <img className= {cls5}  src={youtube1} alt="youtube" onChange={(e) => setYoutube(e.target.value)} onClick={() => img5()}/>
                </div>
                <div className="rrss">
                    <img className= {cls6}  src={googleMeet1} alt="googleMeet" onChange={(e) => setGoogleMeet(e.target.value)} onClick={() => img6()} />
                </div>
            </div>
        </div>
        
    )
    }

export default Perfil;