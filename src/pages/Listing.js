import React from "react";
import {useParams} from "react-router-dom";
import listings from "../data/data";
import Carousel from "../components/Carousel";
import Error from "../pages/Error";

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
    let {title, location, rating, host, equipments, description, pictures} = listing;
    return (
        <div className="listing">
            <Carousel images={pictures} title={title}/>

        </div>
    )
}

export default Listing;