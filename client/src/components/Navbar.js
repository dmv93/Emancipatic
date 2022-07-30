import React, {useState} from "react";
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