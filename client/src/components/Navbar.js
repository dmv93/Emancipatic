import React, { useState } from "react";

function Navbar(props) {

    const [atras, setAtras] = useState("");
    const [menu, setMenu] = useState("");

    return (
        <div className="nav_nav">
            <div className="navbar">
                <input type={"button"} className="button_navbar_atras" style={{color: props.color, border: props.border}} onClick={() => setAtras()} value={"ATRÁS"} />
                <div class="dropdown">
                    <input type={"button"} className="button_navbar_atrass" onClick={() => setMenu()} value={"MENU"} />
                    <div class="dropdown-content">
                        <a href="#">Inicio</a>
                        <a href="#">Mis clases</a>
                        <a href="#">Mis mensajes</a>
                        <a href="#">Mis profesores</a>
                        <a href="#">Mi perfil</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;


