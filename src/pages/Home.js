import React from "react";
import HeroImage from "../assets/hero-home.jpg";
import listings from "../data/data";
import {Link} from "react-router-dom";

/**
 * Main page with a list of all properties.
 *
 * @returns {*}
 * @constructor
 */
function Home() {
    return (
        <div className="home">
            <div className="home-hero">
                <img src={HeroImage} alt="Hero" className="home-hero-image"/>
                <h1 className="home-hero-text">Chez vous, partout et ailleurs</h1>
            </div>
            <section className="home-cards">
                {
                    listings.map((listing) => {
                            return (
                                <article key={listing.id} className="home-cards-card">
                                    <Link to={`/listings/${listing.id}`}>
                                        <img src={listing.cover} className="home-cards-card-image" alt={listing.title}/>
                                        <h2 className="home-cards-card-title">{listing.title}</h2>
                                    </Link>
                                </article>
                            )
                        }
                    )
                }
            </section>
        </div>
    )
}

export default Home;