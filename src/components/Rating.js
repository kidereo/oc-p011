import React from "react";
import StarFilled from "../assets/star-filled.svg";
import StarEmpty from "../assets/star-empty.svg";

/**
 * A dedicated component to display rating stars.
 *
 * @param rating
 * @returns {*}
 * @constructor
 */
function Rating({rating}) {
    return (
        <>
            {Array.from({length: rating}, (element, i) => <img key={i} src={StarFilled} alt="Rating star filled"/>)}
            {Array.from({length: 5 - rating}, (element, i) => <img key={i} src={StarEmpty} alt="Rating star empty"/>)}
        </>
    )
}

export default Rating;