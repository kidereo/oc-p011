import React from "react";
import LogoWhite from "../assets/kasa-logo-white.svg";
import {NavLink} from "react-router-dom";

/**
 * Footer component with white logo and copyright.
 *
 * @returns {*}
 * @constructor
 */
function Footer() {
    return (
        <div className="footer">
            <NavLink to="/home">
                <img src={LogoWhite} alt="Kasa logo" className="footer-image"/>
            </NavLink>
            <p className="footer-copyright">© 2020 Kasa. All rights reserved.</p>
        </div>
    )
}

export default Footer;