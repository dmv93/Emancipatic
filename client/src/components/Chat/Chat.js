import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

import botonchat from '../../assets/botonchat.png'
import ian from '../../assets/ian.webp'
import jessica from '../../assets/jessica.webp'
import sabervivir from '../../assets/sabervivir.jpg'


function Chat() {


    const [chat, setChat] = useState("");
    const [chatVisible, setChatVisible] = useState("tarjetacolor");
    const [ nombreProfe, setNombreProfe] = useState("")
    const [fotoProfe, setFotoProfe] = useState("")

    const chatEnviar = () => {
        setChatVisible("tarjetacolorvisible")
    }

    useEffect(() => {
        setNombreProfe(localStorage.getItem("nombreProfesor"))
        setFotoProfe(localStorage.getItem("nombreProfesor"))
        if (nombreProfe == "Gustavo") {
            setFotoProfe(ian)
        } else if (nombreProfe == "Jessica") {
            setFotoProfe(jessica)
        } else if (nombreProfe == "Sergio") {
            setFotoProfe(sabervivir)
        }

    })

    return (
        <div>
            <Navbar />
            <div className="nombre">
                <h1 id="nombre">{nombreProfe}</h1>
            </div>
            <div className="chat_contenedor1">
                <div className="chat">
                    <div className="img_perfil">
                        <img className='imgRedonda2' src={fotoProfe} alt="ramiro" />
                    </div>
                </div>

                <div className="chat2">
                    <div className="texto1">
                        <p>Hola,¿como estás?</p>
                        <p>Soy {nombreProfe},</p>
                        <p>un placer</p>
                    </div>
                </div>
            </div>

            <div className="chat_contenedor">
                <div className="tarjeta">
                    <div className="img_perfil">
                    </div>
                </div>

                <div className="tarjeta2">
                    <div className="texto1">
                        <p>Este es nuestro</p>
                        <p>chat, por el que</p>
                        <p>hablaremos</p>
                    </div>
                </div>
            </div>

            <div className="chat_contenedor">
                <div className="tarjeta">
                    <div className="img_perfil">
                    </div>
                </div>

                <div className="tarjeta2">
                    <div className="texto1">
                        <p>Será divertido</p>
                        <p>aprender, verás :) </p>
                    </div>
                </div>
            </div>


            { chat ? <div className="chat_contenedor">
                <div className="tarjetausuario">
                    <div className="img_perfil">
                    </div>
                </div>

                <div className={chatVisible}>
                    <div className="texto1">
                        <p>{chat}</p>
                    </div>
                </div>
            </div>: ""}


            <div className="input_chat">
                <input type={"text"} id="input_chat" name="chat" placeholder="Escribir..." onChange={(e) => { setChat(e.target.value) }} />
                <input type={"image"} src={botonchat} alt="enviar" width={"50"} height={"50"} className="button_chat_enviar" onClick={() => chatEnviar()} value={"ENVIAR"} />
            </div>
        </div>
    )


}
export default Chat;


