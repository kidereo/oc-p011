import React from "react";
import LogoWhite from "../assets/kasa-logo-white.svg";

function Footer() {
    return (
        <div className="footer">
            <img src={LogoWhite} alt="Kasa logo" className="footer-image"/>
            <p className="footer-copyright">© 2020 Kasa. All rights reserved.</p>
        </div>
    )
}

export default Footer;