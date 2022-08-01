import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

import ramiro from '../../assets/ramiro.png'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'

const ProfesoresRecomendados = () => {

    return (
        <div>
            <Navbar />
            <div className="contendor_profesor">
                <h3 id="perfil">Profesores recomendados</h3>
                <div className="contendor_perfil_profesores">
                    <div className="tarjeta">
                        <img className='imgRedonda1' src={ramiro} alt="ramiro" />
                        <h3 id="perfil_profesor">Susana Pérez</h3>
                    </div>
                    <div className="valoracion">
                        <form>
                            <p class="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5" />
                                <label for="radio5">★</label>
                                <label for="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" />
                                <label for="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" />
                                <label for="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" />
                                <label for="radio4">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1" />
                            </p>
                        </form>
                    </div>
                    <div className="selecciona_categorias_profesores">
                        <div className="rrss_profesores">
                            <img className="img_profesor" src={facebook1} alt="facebook" />
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

            <div className="contendor_perfil_profesores">
                    <div className="tarjeta">
                        <img className='imgRedonda1' src={ramiro} alt="ramiro" />
                        <h3 id="perfil_profesor">Juan Arcos</h3>
                    </div>
                    <div className="valoracion">
                        <form>
                            <p class="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5" />
                                <label for="radio5">★</label>
                                <label for="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" />
                                <label for="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" />
                                <label for="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" />
                                <label for="radio4">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1" />
                            </p>
                        </form>
                    </div>
                    <div className="selecciona_categorias_profesores">
                        <div className="rrss_profesores">
                            <img className="img_profesor" src={facebook1} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_profesor" src={instagram1} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_profesor" src={twitter1} alt="twitter" />
                        </div>
                    </div>
                </div>

                <div className="contendor_perfil_profesores">
                    <div className="tarjeta">
                        <img className='imgRedonda1' src={ramiro} alt="ramiro" />
                        <h3 id="perfil_profesor">María Lopez</h3>
                    </div>
                    <div className="valoracion">
                        <form>
                            <p class="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5" />
                                <label for="radio5">★</label>
                                <label for="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" />
                                <label for="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" />
                                <label for="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" />
                                <label for="radio4">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1" />
                            </p>
                        </form>
                    </div>
                    <div className="selecciona_categorias_profesores">
                        <div className="rrss_profesores">
                            <img className="img_profesor" src={facebook1} alt="facebook" />
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

export default ProfesoresRecomendados;


