import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

import ramiro from '../../assets/ramiro.png'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'


const TuProfesor = () => {

    const [enviar, setEnviar] = useState("");




    return (
        <div>
            <Navbar />
            <div className="contenedor2">
                <div className="img_perfil">
                    <img className='imgRedonda1' src={ramiro} alt="ramiro" />
                </div>
                <h3 id="perfil1">Susana Pérez</h3>
                <h4 id="mentora">será tu mentora</h4>
            </div>
            <div className="boton_enviar">
                <input type={"button"} className="button_enviar" onClick={() => setEnviar()} value={"Enviar Mensaje"} />
            </div>
            <div className="contendor_valoracion1">
                <h1 id="valoracion">Valórame</h1>
                <div className="valoracion1">
                    <form>
                        <p class="clasificacion">
                            <input id="radio1" type="radio" name="estrellas" value="5" />
                            <label id="tamaño" for="radio5">★</label>
                            <label id="tamaño" for="radio1">★</label>
                            <input id="radio2" type="radio" name="estrellas" value="4" />
                            <label id="tamaño" for="radio2">★</label>
                            <input id="radio3" type="radio" name="estrellas" value="3" />
                            <label id="tamaño" for="radio3">★</label>
                            <input id="radio4" type="radio" name="estrellas" value="2" />
                            <label id="tamaño" for="radio4">★</label>
                            <input id="radio5" type="radio" name="estrellas" value="1" />
                        </p>
                    </form>
                </div>
            </div>
            <div className="texto">
                <p>Susana Pérez te va ayudar a  que entiendas las tecnologias <br></br> con las que necesitas ayuda.</p>
                <p>Sus tecnologias son:</p>
            </div>
            <div className="rrss_tuprofesor">
                <div className="selecciona_categorias_profesores1">
                    <div className="rrss_profesores1">
                        <img className="img_profesor" src={whatsApp} alt="whatsApp" />
                    </div>
                    <div className="rrss_profesores">
                        <img className="img_profesor" src={instagram1} alt="instagram" />
                    </div>
                    <div className="rrss_profesores">
                        <img className="img_profesor" src={twitter1} alt="twitter" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TuProfesor;

