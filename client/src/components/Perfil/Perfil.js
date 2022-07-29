import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ramiro from '../../assets/ramiro.png'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'
import youtube1 from '../../assets/youtube1.png'
import googleMeet from '../../assets/googleMeet.png'



const Perfil = () => {
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
                    <img className="img_src" src={whatsApp} alt="whatsApp" />
                </div>
                <div className="rrss">
                    <img className="img_src" src={instagram1} alt="instagram" />
                </div>
                <div className="rrss">
                    <img className="img_src" src={twitter1} alt="twitter" />
                </div>
                <div className="rrss">
                    <img className="img_src" src={facebook1} alt="facebook" />
                </div>
                <div className="rrss">
                    <img className="img_src" src={youtube1} alt="youtube" />
                </div>
                <div className="rrss">
                    <img className="img_src" src={googleMeet} alt="googleMeet" />
                </div>
            </div>
        </div>
    )
}

export default Perfil;