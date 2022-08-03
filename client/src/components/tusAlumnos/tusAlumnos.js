import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

import ian from '../../assets/ian.webp'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'
import botonTusAlumnos from '../../assets/botonTusAlumnos.png'
import ramiro from '../../assets/ramiro.png'
import yayo1 from '../../assets/yayo1.webp'
import yayo2 from '../../assets/yayo2.jpg'
import yayo3 from '../../assets/yayo3.jpg'



const TusAlumnos = () => {

        const navigate = useNavigate()
        // const [imagenes1, setImagenes1] = useState(whatsApp);
        // const [imagenes2, setImagenes2] = useState(instagram1);
        // const [imagenes3, setImagenes3] = useState(twitter1);
        // const [imagenes4, setImagenes4] = useState(facebook1);  
        
        const [nombreYayo1, setNombreYayo1] = useState("")  
        const [nombreYayo2, setNombreYayo2] = useState("")  
        const [nombreYayo3, setNombreYayo3] = useState("")  

        // const [fotoYayo1, setFotoYayo1] = useState("")
        // const [fotoYayo2, setFotoYayo2] = useState("")
        // const [fotoYayo3, setFotoYayo3] = useState("")

        const [idAsignatura1, setIdAsignatura1] = useState("")
        const [idAsignatura2, setIdAsignatura2] = useState("")
        const [idAsignatura3, setIdAsignatura3] = useState("")
        
        const [idAsignatura4, setIdAsignatura4] = useState("")
        const [idAsignatura5, setIdAsignatura5] = useState("")
        const [idAsignatura6, setIdAsignatura6] = useState("")
    
        const [idAsignatura7, setIdAsignatura7] = useState("")
        const [idAsignatura8, setIdAsignatura8] = useState("")
        const [idAsignatura9, setIdAsignatura9] = useState("")

        const [asignatura1, setAsignatura1] = useState("")
        const [asignatura2, setAsignatura2] = useState("") 
        const [asignatura3, setAsignatura3] = useState("") 

        const [asignatura4, setAsignatura4] = useState("") 
        const [asignatura5, setAsignatura5] = useState("") 
        const [asignatura6, setAsignatura6] = useState("") 

        const [asignatura7, setAsignatura7] = useState("") 
        const [asignatura8, setAsignatura8] = useState("") 
        const [asignatura9, setAsignatura9] = useState("") 


        const profesor1 = () => {
            localStorage.setItem("nombreAlumno", nombreYayo1)
            navigate("/tualumno");
        }
    
        const profesor2 = () => {
            localStorage.setItem("nombreAlumno", nombreYayo2)
            navigate("/tualumno");
        }
    
        const profesor3 = () => {
            localStorage.setItem("nombreAlumno", nombreYayo3)
            navigate("/tualumno");
        }




    useEffect(() => {

        fetch("tusAlumnos", { method: "POST"})
            .then((response) => response.json())
            .then((res) => {
                // console.log(res.data)

                setNombreYayo1(res.data[0].nombre);
                setNombreYayo2(res.data[1].nombre);
                setNombreYayo3(res.data[2].nombre);

                return res;
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
                console.log(arrayAsignaturas)

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

    const chatEnviarTusAlumnos = () => {

         
    }



    return (
        <div>
            <Navbar />
            <div className="contendor_profesor">
                <h3 id="perfil">Tus alumnos</h3>
                <div className="contendor_tus_alumnos" id="profesor1" onClick={() => profesor1()}>
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={ramiro} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">{nombreYayo1}</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura1} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura2} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura3} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="contendor_profesor">
                <div className="contendor_tus_alumnos" id="profesor1" onClick={() => profesor2()}>
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={yayo2} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">{nombreYayo2}</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura4} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura5} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura6} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="contendor_profesor">
                <div className="contendor_tus_alumnos" id="profesor1" onClick={() => profesor3()}>
                    <div className="tarjetaAlumno">
                        <img className='imgTusAlumnosRedonda' src={yayo3} alt="ramiro" />
                        <h3 id="perfil_profesor_tusAlumnos">{nombreYayo3}</h3>
                        <input type={"image"} src={botonTusAlumnos} alt="enviar" width={"50"} height={"50"} className="button_chat_enviarTusAlumnos" onClick={() => chatEnviarTusAlumnos()} value={"ENVIAR"} />
                    </div>
                    <div className="valoracion"></div>
                    <div className="selecciona_categorias_tusAlumnos">
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura7} alt="facebook" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura8} alt="instagram" />
                        </div>
                        <div className="rrss_profesores">
                            <img className="img_tusAlumnos" src={idAsignatura9} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default TusAlumnos;
