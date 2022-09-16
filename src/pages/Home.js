import React from "react";
import HeroImage from "../assets/hero-home.jpg";

/**
 * Main index page.
 *
 * @returns {*}
 * @constructor
 */
function Home() {
    return (
        <div className="home">
            <div className="home-hero">
                <img src={HeroImage} alt="Hero image" className="home-hero-image"/>
                <div className="home-hero-text">Chez vous, partout et ailleurs</div>
            </div>

            <section className="home-cards">

            </section>


        </div>
    )
}

export default Home;