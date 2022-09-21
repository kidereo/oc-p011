import React from "react";
import {useParams} from "react-router-dom";
import listings from "../data/data";
import Carousel from "../components/Carousel";
import Error from "../pages/Error";
import Rating from "../components/Rating";

/**
 * Listing page.
 *
 * @returns {*}
 * @constructor
 */
function Listing() {
    let {listingId} = useParams();
    let listing = listings.find((listing) => listing.id === listingId);

    /**
     * Return the 404 page if there is no listing with passed parameter (e.g. manual entry).
     * TODO: Uncaught TypeError: Cannot destructure property 'title' of 'listing' as it is undefined.
     */
    if (listing === undefined) {
        return (
            <Error/>
        );
    }

    /**
     * Display the listing with the passed id.
     */
    let {pictures, title, tags, location, rating, host, equipments, description} = listing;
    return (
        <div className="listing">
            <section className="listing-carousel">
                <Carousel images={pictures} title={title}/>
            </section>
            {/*End of listing-slider section*/}
            <section className="listing-meta">
                <div className="listing-meta-block1">
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                    <div className="listing-meta-block1-tags">
                        {tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="listing-meta-block2">
                    <div className="listing-meta-block2-host">
                        <img src={host.picture} alt={host.name} className="listing-meta-block2-host-image"/>
                        <p className="listing-meta-block2-host-name">{host.name}</p>
                    </div>
                    <div className="listing-meta-block2-rating">
                        <Rating rating={rating}/>
                    </div>
                </div>
            </section>
            {/*End of listing-meta section*/}
            <section className="listing-content">

            </section>
            {/*End of listing-content section*/}
        </div>
    )
}

export default Listing;