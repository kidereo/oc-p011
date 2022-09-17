import React from "react";
import HeroImage from "../assets/hero-about.jpg";

/**
 * About page.
 *
 * @returns {*}
 * @constructor
 */
function About() {
    return (
        <div className="about">
            <div className="about-hero">
                <img src={HeroImage} alt="Hero image" className="about-hero-image"/>
                <h1 className="about-hero-text">A propos Kasa</h1>
            </div>
        </div>
    )
}

export default About;