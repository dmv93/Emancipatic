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

    const [formador1, setFormador1] = useState("")
    const [formador2, setFormador2] = useState("")
    const [formador3, setFormador3] = useState("")

    const [estrella1, setEstrella1] = useState("")
    const [estrella2, setEstrella2] = useState("")
    const [estrella3, setEstrella3] = useState("")

    const [id1, setId1] = useState("estrella")
    const [id2, setId2] = useState("estrella")
    const [id3, setId3] = useState("estrella")
    const [id4, setId4] = useState("estrella")
    const [id5, setId5] = useState("estrella")

    const [id6, setId6] = useState("estrella")
    const [id7, setId7] = useState("estrella")
    const [id8, setId8] = useState("estrella")
    const [id9, setId9] = useState("estrella")
    const [id10, setId10] = useState("estrella")

    const [id11, setId11] = useState("estrella")
    const [id12, setId12] = useState("estrella")
    const [id13, setId13] = useState("estrella")
    const [id14, setId14] = useState("estrella")
    const [id15, setId15] = useState("estrella")

    useEffect(() => {

        fetch("valoracionFormador", {method: "POST"})
            .then((respone) => respone.json())
            .then((res) => {
                console.log(res)
                setFormador1(res.data[0].nombre)
                setFormador2(res.data[1].nombre)
                setFormador3(res.data[2].nombre)

                setEstrella1(res.data[0].valoracion)
                setEstrella2(res.data[1].valoracion)
                setEstrella3(res.data[2].valoracion)
            })

            .then(()=>{
                if(estrella1 === "5"){
                    setId1("estrellaBien")
                    setId2("estrellaBien")
                    setId3("estrellaBien")
                    setId4("estrellaBien")
                    setId5("estrellaBien")
                   } else  if(estrella1 == "4"){
                    setId1("estrellaBien")
                    setId2("estrellaBien")
                    setId3("estrellaBien")
                    setId4("estrellaBien")
                    
                   } else  if(estrella1 == "3"){
                    setId1("estrellaBien")
                    setId2("estrellaBien")
                    setId3("estrellaBien")
                    
                   } else  if(estrella1 == "2"){
                    setId1("estrellaBien")
                    setId2("estrellaBien")
                    
                   } else  if(estrella1 == "1"){
                    setId1("estrellaBien")
                 
                   }
            
                   if(estrella2 == "5"){
                    setId6("estrellaBien")
                    setId7("estrellaBien")
                    setId8("estrellaBien")
                    setId9("estrellaBien")
                    setId10("estrellaBien")
                   } else  if(estrella2 == "4"){
                    setId6("estrellaBien")
                    setId7("estrellaBien")
                    setId8("estrellaBien")
                    setId9("estrellaBien")
                    
                   } else  if(estrella2 == "3"){
                    setId6("estrellaBien")
                    setId7("estrellaBien")
                    setId8("estrellaBien")
                    
                   } else  if(estrella2 == "2"){
                    setId6("estrellaBien")
                    setId7("estrellaBien")
                    
                   } else  if(estrella2 == "1"){
                    setId6("estrellaBien")
                 
                   }
            
                   if(estrella3 == "5"){
                    setId11("estrellaBien")
                    setId12("estrellaBien")
                    setId13("estrellaBien")
                    setId14("estrellaBien")
                    setId15("estrellaBien")
                   } else  if(estrella3 == "4"){
                    setId11("estrellaBien")
                    setId12("estrellaBien")
                    setId13("estrellaBien")
                    setId14("estrellaBien")
                    
                   } else  if(estrella3 == "3"){
                    setId11("estrellaBien")
                    setId12("estrellaBien")
                    setId13("estrellaBien")
                    
                   } else  if(estrella3 == "2"){
                    setId11("estrellaBien")
                    setId12("estrellaBien")
                    
                   } else  if(estrella3 == "1"){
                    setId11("estrellaBien")
                 
                   }
            })

       


    }, [])
console.log(formador1)
    return (
        <div>
            <Navbar />
            <div className="contendor_profesor">
                <h3 id="perfil">Profesores recomendados</h3>
                <div className="contendor_perfil_profesores">
                    <div className="tarjeta">
                        <img className='imgRedonda1' src={ramiro} alt="ramiro" />
                        <h3 id="perfil_profesor">{formador1}</h3>
                    </div>
                    <div className="valoracion">
                        <form>
                            <p class="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5" />
                                <label id={id5} for="radio5">★</label>
                                <label id={id4} for="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" />
                                <label id={id3} for="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" />
                                <label id={id2} for="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" />
                                <label id={id1} for="radio4">★</label>
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
                    <h3 id="perfil_profesor">{formador2}</h3>
                </div>
                <div className="valoracion">
                    <form>
                        <p class="clasificacion">
                            <input id="radio1" type="radio" name="estrellas" value="5" />
                            <label id={id10} for="radio5">★</label>
                            <label id={id9} for="radio1">★</label>
                            <input id="radio2" type="radio" name="estrellas" value="4" />
                            <label id={id8} for="radio2">★</label>
                            <input id="radio3" type="radio" name="estrellas" value="3" />
                            <label id={id7} for="radio3">★</label>
                            <input id="radio4" type="radio" name="estrellas" value="2" />
                            <label id={id6} for="radio4">★</label>
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
                    <h3 id="perfil_profesor">{formador3}</h3>
                </div>
                <div className="valoracion">
                    <form>
                        <p class="clasificacion">
                            <input id="radio1" type="radio" name="estrellas" value="5" />
                            <label id={id15} for="radio5">★</label>
                            <label id={id14} for="radio1">★</label>
                            <input id="radio2" type="radio" name="estrellas" value="4" />
                            <label id={id13} for="radio2">★</label>
                            <input id="radio3" type="radio" name="estrellas" value="3" />
                            <label id={id12} for="radio3">★</label>
                            <input id="radio4" type="radio" name="estrellas" value="2" />
                            <label id={id11} for="radio4">★</label>
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


