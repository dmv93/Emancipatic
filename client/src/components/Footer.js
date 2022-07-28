import React from "react";
import { Link } from "react-router-dom";

import eman from '../assets/eman.png'
import face from '../assets/facebook.png'
import linke from '../assets/linkedin.png'
import twit from '../assets/twitter.png'
import yout from '../assets/youtube.png'


function Footer() {
    return (
        <div className="Footer">
            <div className="footer1">
                <div className="logo">
                    <img className="logoimg" src={eman} alt="logo" />
                </div>
                <div className="contacto">
                    <h1 className="color_h1">CONTACTO</h1>
                    <p id="color_correo">info@emancipatic.org</p>
                </div>
                <div className="siguenos">
                    <h1 className="color_h1" id="siguenos">SÍGUENOS</h1>
                    <img className="imgicono" src={face} alt="facebook" />
                    <img className="imgicono" src={linke} alt="linkedin" />
                    <img className="imgicono" src={twit} alt="twitter" />
                    <img className="imgicono" src={yout} alt="youtube" />
                </div>
                <div className="colaborar">
                    <h1 className="color_h1">¿QUIERES COLABORAR?</h1>
                    <div className="boton_colaborar">
                        <input type="button" className="socio" value="HAZTE SOCIO" />
                    </div>
                </div>
            </div>
            <div className="footer2">
                <div className="privacidad">
                    <a href="" className="a_footer2">Politica de Privacidad</a>
                </div>
                <div className="portfolio">
                    <a href="" className="a_footer2">Política de cookies</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;