import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

// import ramiro from '../../assets/ramiro.png'
import ian from '../../assets/ian.webp'
import jessica from '../../assets/jessica.webp'
import sabervivir from '../../assets/sabervivir.jpg'
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

    const [asignatura1, setAsignatura1] = useState("")
    const [asignatura2, setAsignatura2] = useState("")
    const [asignatura3, setAsignatura3] = useState("")
    const [asignatura4, setAsignatura4] = useState("")
    const [asignatura5, setAsignatura5] = useState("")
    const [asignatura6, setAsignatura6] = useState("")
    const [asignatura7, setAsignatura7] = useState("")
    const [asignatura8, setAsignatura8] = useState("")
    const [asignatura9, setAsignatura9] = useState("")


    //ESTRELLAS
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

    //ASIGNATURAS
    const [idAsignatura1, setIdAsignatura1] = useState("")
    const [idAsignatura2, setIdAsignatura2] = useState("")
    const [idAsignatura3, setIdAsignatura3] = useState("")
    
    const [idAsignatura4, setIdAsignatura4] = useState("")
    const [idAsignatura5, setIdAsignatura5] = useState("")
    const [idAsignatura6, setIdAsignatura6] = useState("")

    const [idAsignatura7, setIdAsignatura7] = useState("")
    const [idAsignatura8, setIdAsignatura8] = useState("")
    const [idAsignatura9, setIdAsignatura9] = useState("")


    let navigate = useNavigate()


    const profesor1 = () => {
        localStorage.setItem("nombreProfesor", formador1)
        navigate("/tuprofesor");
    }

    const profesor2 = () => {
        localStorage.setItem("nombreProfesor", formador2)
        navigate("/tuprofesor");
    }

    const profesor3 = () => {
        localStorage.setItem("nombreProfesor", formador3)
        navigate("/tuprofesor");
    }

    useEffect(() => {

        fetch("valoracionFormador", { method: "POST" })
            .then((respone) => respone.json())
            .then((res) => {
                console.log(res.data)
                setFormador1(res.data[0].nombre)
                setFormador2(res.data[1].nombre)
                setFormador3(res.data[2].nombre)

                return res
            })
            .then((res) => {
                setEstrella1(res.data[0].valoracion)
                setEstrella2(res.data[1].valoracion)
                setEstrella3(res.data[2].valoracion)

                if (estrella1 == "5") {
                    setId1("estrellaBien")
                    setId2("estrellaBien")
                    setId3("estrellaBien")
                    setId4("estrellaBien")
                    setId5("estrellaBien")
                } else if (estrella1 == "4") {
                    setId1("estrellaBien")
                    setId2("estrellaBien")
                    setId3("estrellaBien")
                    setId4("estrellaBien")

                } else if (estrella1 == "3") {
                    setId1("estrellaBien")
                    setId2("estrellaBien")
                    setId3("estrellaBien")

                } else if (estrella1 == "2") {
                    setId1("estrellaBien")
                    setId2("estrellaBien")

                } else if (estrella1 == "1") {
                    setId1("estrellaBien")

                }

                if (estrella2 == "5") {
                    setId6("estrellaBien")
                    setId7("estrellaBien")
                    setId8("estrellaBien")
                    setId9("estrellaBien")
                    setId10("estrellaBien")
                } else if (estrella2 == "4") {
                    setId6("estrellaBien")
                    setId7("estrellaBien")
                    setId8("estrellaBien")
                    setId9("estrellaBien")

                } else if (estrella2 == "3") {
                    setId6("estrellaBien")
                    setId7("estrellaBien")
                    setId8("estrellaBien")

                } else if (estrella2 == "2") {
                    setId6("estrellaBien")
                    setId7("estrellaBien")

                } else if (estrella2 == "1") {
                    setId6("estrellaBien")

                }

                if (estrella3 == "5") {
                    setId11("estrellaBien")
                    setId12("estrellaBien")
                    setId13("estrellaBien")
                    setId14("estrellaBien")
                    setId15("estrellaBien")
                } else if (estrella3 == "4") {
                    setId11("estrellaBien")
                    setId12("estrellaBien")
                    setId13("estrellaBien")
                    setId14("estrellaBien")

                } else if (estrella3 == "3") {
                    setId11("estrellaBien")
                    setId12("estrellaBien")
                    setId13("estrellaBien")

                } else if (estrella3 == "2") {
                    setId11("estrellaBien")
                    setId12("estrellaBien")

                } else if (estrella3 == "1") {
                    setId11("estrellaBien")

                }
                return res
            })

            .then((res) => {
                let arrayAsignaturas = []
                
                for (let i = 0; i < res.data.length; i++) {
                   
                    for (let j = 0; j < res.data[i].asignaturas.length; j++) {
                        if (res.data[i].asignaturas[j] != "") {
                            arrayAsignaturas.push(res.data[i].asignaturas[j])
                        }
                    }

                }
                
                setAsignatura1(arrayAsignaturas[0])
                setAsignatura2(arrayAsignaturas[1])
                setAsignatura3(arrayAsignaturas[2])

                setAsignatura4(arrayAsignaturas[3])
                setAsignatura5(arrayAsignaturas[4])
                setAsignatura6(arrayAsignaturas[5])

                setAsignatura7(arrayAsignaturas[6])
                setAsignatura8(arrayAsignaturas[7])
                setAsignatura9(arrayAsignaturas[8])


                if (asignatura1 == 'Whatsapp') {
                    setIdAsignatura1(whatsApp)
                } else if (asignatura1 == 'Instagram') {
                    setIdAsignatura1(instagram1)
                } else if(asignatura1 == 'Twitter') {
                    setIdAsignatura1(twitter1)
                } else if(asignatura1 == 'Facebook'){
                    setIdAsignatura1(facebook1)
                }


                if (asignatura2 == 'Whatsapp') {
                    setIdAsignatura2(whatsApp)
                } else if (asignatura2 == 'Instagram') {
                    setIdAsignatura2(instagram1)
                } else if(asignatura2 == 'Twitter') {
                    setIdAsignatura2(twitter1)
                } else if(asignatura2 == 'Facebook'){
                    setIdAsignatura2(facebook1)
                }


                if (asignatura3 == 'Whatsapp') {
                    setIdAsignatura3(whatsApp)
                } else if (asignatura3 == 'Instagram') {
                    setIdAsignatura3(instagram1)
                } else if(asignatura3 == 'Twitter') {
                    setIdAsignatura3(twitter1)
                } else if(asignatura3 == 'Facebook'){
                    setIdAsignatura3(facebook1)
                }


                if (asignatura4 == 'Whatsapp') {
                    setIdAsignatura4(whatsApp)
                } else if (asignatura4 == 'Instagram') {
                    setIdAsignatura4(instagram1)
                } else if(asignatura4 == 'Twitter') {
                    setIdAsignatura4(twitter1)
                } else if(asignatura4 == 'Facebook'){
                    setIdAsignatura4(facebook1)
                }


                if (asignatura5 == 'Whatsapp') {
                    setIdAsignatura5(whatsApp)
                } else if (asignatura5 == 'Instagram') {
                    setIdAsignatura5(instagram1)
                } else if(asignatura5 == 'Twitter') {
                    setIdAsignatura5(twitter1)
                } else if(asignatura5 == 'Facebook'){
                    setIdAsignatura5(facebook1)
                }


                if (asignatura6 == 'Whatsapp') {
                    setIdAsignatura6(whatsApp)
                } else if (asignatura6 == 'Instagram') {
                    setIdAsignatura6(instagram1)
                } else if(asignatura6 == 'Twitter') {
                    setIdAsignatura6(twitter1)
                } else if(asignatura6 == 'Facebook'){
                    setIdAsignatura6(facebook1)
                }


                if (asignatura7 == 'Whatsapp') {
                    setIdAsignatura7(whatsApp)
                } else if (asignatura7 == 'Instagram') {
                    setIdAsignatura7(instagram1)
                } else if(asignatura7 == 'Twitter') {
                    setIdAsignatura7(twitter1)
                } else if(asignatura7 == 'Facebook'){
                    setIdAsignatura7(facebook1)
                }


                if (asignatura8 == 'Whatsapp') {
                    setIdAsignatura8(whatsApp)
                } else if (asignatura8 == 'Instagram') {
                    setIdAsignatura8(instagram1)
                } else if(asignatura8 == 'Twitter') {
                    setIdAsignatura8(twitter1)
                } else if(asignatura8 == 'Facebook'){
                    setIdAsignatura8(facebook1)
                }


                if (asignatura9 == 'Whatsapp') {
                    setIdAsignatura9(whatsApp)
                } else if (asignatura9 == 'Instagram') {
                    setIdAsignatura1(instagram1)
                } else if(asignatura9 == 'Twitter') {
                    setIdAsignatura9(twitter1)
                } else if(asignatura9 == 'Facebook'){
                    setIdAsignatura9(facebook1)
                }
            })

    },)


    return (
        <div>
            <Navbar />
            <div className="contendor_profesor">
                <h3 id="perfil">Profesores recomendados</h3>
                <div className="contendor_perfil_profesores" id="profesor1" onClick={() => profesor1()}>
                    <div className="tarjeta">
                        <img className='imgRedonda1' src={ian} alt="ramiro" />
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
                            <img className="img_profesor" src={idAsignatura1} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_profesor" src={idAsignatura2} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_profesor" src={idAsignatura3} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="contendor_perfil_profesores" id="profesor2" onClick={() => profesor2()}>
                <div className="tarjeta">
                    <img className='imgRedonda1' src={jessica} alt="jessica" />
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
                        <img className="img_profesor" src={idAsignatura4} alt="facebook" />
                    </div>
                    <div className="rrss_profesores">
                        <img className="img_profesor" src={idAsignatura5} alt="instagram" />
                    </div>
                    <div className="rrss_profesores">
                        <img className="img_profesor" src={idAsignatura6} alt="twitter" />
                    </div>
                </div>
            </div>

            <div className="contendor_perfil_profesores" id="profesor3" onClick={() => profesor3()}>
                <div className="tarjeta">
                    <img className='imgRedonda1' src={sabervivir} alt="ramiro" />
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
                        <img className="img_profesor" src={idAsignatura7} alt="facebook" />
                    </div>
                    <div className="rrss_profesores">
                        <img className="img_profesor" src={idAsignatura8} alt="instagram" />
                    </div>
                    <div className="rrss_profesores">
                        <img className="img_profesor" src={idAsignatura9} alt="twitter" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProfesoresRecomendados;


