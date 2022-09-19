import React from "react";
import {useParams} from "react-router-dom";
import listings from "../data/data";
import Carousel from "../components/Carousel";

/**
 * Listing page.
 *
 * @returns {*}
 * @constructor
 */
function Listing() {
    let {listingId} = useParams();
    let listing = listings.find((listing) => listing.id === listingId);
    let {title, location, rating, host, equipments, description, pictures} = listing;

    return (
        <div className="listing">
            <Carousel images={pictures}/>
        </div>
    )
}

export default Listing;