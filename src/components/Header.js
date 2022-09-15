import React from "react";
import LogoColour from "../assets/kasa-logo-colour.svg"

/**
 * Header component with colour logo and menu links.
 *
 * @returns {*}
 * @constructor
 */
function Header() {
    return (
        <nav className="header-navigation">
            <img src={LogoColour} alt="Kasa logo" className="header-navigation-image"/>
            <div>
                <a>Accueil</a>
                <a>A propos</a>
            </div>
        </nav>
    )
}

export default Header;