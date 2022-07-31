<<<<<<< HEAD
import React, {useState} from "react";
=======
import React,{useState} from "react";
>>>>>>> 8f32d17ceb2343466a8867599f14c9b9c87da84f
import { Link } from "react-router-dom";

function Navbar () {

    const [atras, setAtras] = useState("");
    const [menu, setMenu] = useState("");

    return(
        <div className="nav_nav">
            <div className="navbar">
            <input type={"button"} className="button_navbar_atras" onClick={() => setAtras()} value={"ATRÁS"} />
            <input type={"button"} className="button_navbar_menu" onClick={() => setMenu()} value={"MENÚ"} />
            </div>
        </div>
    )
}

export default Navbar;