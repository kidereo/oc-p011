import React from "react";
import LogoColour from "../assets/kasa-logo-colour.svg";
import {NavLink} from "react-router-dom";

/**
 * Header component with colour logo and menu links.
 *
 * @returns {*}
 * @constructor
 */
function Header() {
    return (
        <div className="header-navigation">
            <NavLink to="/home">
                <img src={LogoColour} alt="Kasa logo" className="header-navigation-image"/>
            </NavLink>
            <div className="header-navigation-menu">
                <NavLink to="/home"
                         className={({isActive}) => isActive ? "header-navigation-menu_active" : "header-navigation-menu_inactive"}>
                    Accueil
                </NavLink>
                <NavLink to="/about"
                         className={({isActive}) => isActive ? "header-navigation-menu_active" : "header-navigation-menu_inactive"}>
                    A Propos
                </NavLink>
            </div>
        </div>
    )
}

export default Header;