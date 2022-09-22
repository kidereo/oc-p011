import React from "react";
import HeroImage from "../assets/hero-about.jpg";
import DropdownInAbout from "../components/DropdownInAbout";

/**
 * About page.
 *
 * @returns {*}
 * @constructor
 */
function About() {
    return (
        <div className="about">
            <section className="about-hero">
                <img src={HeroImage} alt="Hero" className="about-hero-image"/>
                <h1 className="about-hero-text">A propos Kasa</h1>
            </section>
            <section className="about-content">
                <DropdownInAbout title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <DropdownInAbout title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <DropdownInAbout title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <DropdownInAbout title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>

            </section>
        </div>
    )
}

export default About;