import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

import jessica from '../../assets/jessica.webp'
import sabervivir from '../../assets/sabervivir.jpg'
import ian from '../../assets/ian.webp'
import ramiro from '../../assets/ramiro.png'
import whatsApp from '../../assets/whatsApp.png'
import instagram1 from '../../assets/instagram1.png'
import twitter1 from '../../assets/twitter1.png'
import facebook1 from '../../assets/facebook1.png'


const TuAlumno = () => {

    const [enviar, setEnviar] = useState("");
    const [nombreAlumno, setNombreAlumno] = useState("")
    const [fotoAlumno, setFotoAlumno] = useState("")

    //ASIGNATURAS

    const [ asignatura1, setAsignatura1] = useState("")
    const [ asignatura2, setAsignatura2] = useState("")
    const [ asignatura3, setAsignatura3] = useState("")


    //ID ASIGNATURAS
    const [idAsignatura1, setIdAsignatura1] = useState("")
    const [idAsignatura2, setIdAsignatura2] = useState("")
    const [idAsignatura3, setIdAsignatura3] = useState("")

    const navigate = useNavigate();


    const enviarChat = () => {
        navigate("/chatAlumno")
    }



    useEffect(() => {

        setNombreAlumno(localStorage.getItem("nombreAlumno"))
        console.log(nombreAlumno)

        const requestOptions = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ nombre: nombreAlumno })
        }

        fetch("asignaturasAlumno", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                console.log(res.data)

                let arrayAsignaturas = []

                for (let i = 0; i < res.data.asignaturas.length; i++) {
                    if (res.data.asignaturas[i] != "") {
                        arrayAsignaturas.push(res.data.asignaturas[i])
                    }
                }

                setAsignatura1(arrayAsignaturas[0])
                setAsignatura2(arrayAsignaturas[1])
                setAsignatura3(arrayAsignaturas[2])

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
            })
    },)


    return (
        <div>
            <Navbar />
            <div className="contenedor2">
                <div className="img_perfil">
                    <img className='imgRedonda1' src={fotoAlumno} alt="ramiro" />
                </div>
                <h3 id="perfil1">{nombreAlumno}</h3>
                <h4 id="mentora">Nuevo alumno</h4>
            </div>
            <div className="boton_enviar">
                <input type={"button"} className="button_enviar" onClick={() => enviarChat()} value={"Enviar Mensaje"} />
            </div>
            <div className="texto">
                <p>Necesita ayuda con:</p>
            </div>
            <div className="rrss_tuprofesor">
                <div className="selecciona_categorias_profesores1">
                    <div className="rrss_profesores1">
                        <img className="img_profesor" src={idAsignatura1} alt="whatsApp" />
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

    )
}

export default TuAlumno;

