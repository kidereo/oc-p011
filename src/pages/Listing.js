import React from "react";
import {useParams} from "react-router-dom";

/**
 * Listing page.
 *
 * @returns {*}
 * @constructor
 */
function Listing() {
    let {listingId} = useParams;
    return (
        <div className="listing">
            <div className="listing-carousel">
                Carousel images here
            </div>
            <div className="listing-details">
                Listing details here
            </div>
        </div>
    )
}

export default Listing;