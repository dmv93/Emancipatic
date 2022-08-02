import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

import ian from '../../assets/ian.webp'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import botonTusAlumnos from '../../assets/botonTusAlumnos.png'


const TusAlumnos = () => {

    const chatEnviarTusAlumnos = () => {
    }





    return (
        <div>
            <Navbar />
            <div className="contendor_profesor">
                <h3 id="perfil">Tus alumnos</h3>
                <div className="contendor_tus_alumnos" id="profesor1">
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={ian} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">María Sanchez</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={whatsApp} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={instagram1} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={twitter1} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="contendor_profesor">
                <div className="contendor_tus_alumnos" id="profesor1">
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={ian} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">Luisa Lobos</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={whatsApp} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={instagram1} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={twitter1} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="contendor_profesor">
                <div className="contendor_tus_alumnos" id="profesor1">
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={ian} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">Juan  García</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={whatsApp} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={instagram1} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={twitter1} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="contendor_profesor">
                <div className="contendor_tus_alumnos" id="profesor1">
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={ian} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">José Alonso</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={whatsApp} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={instagram1} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={twitter1} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="contendor_profesor">
                <div className="contendor_tus_alumnos" id="profesor1">
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={ian} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">Ana Jiménez</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={whatsApp} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={instagram1} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={twitter1} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>






















































































        </div>
    )


}

export default TusAlumnos;
