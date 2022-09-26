import React from "react";
import * as PropTypes from 'prop-types';
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
    const maxRating = 5;
    return (
        <>
            {Array.from({length: rating}, (element, index) =>
                <img key={index} src={StarFilled} alt="Rating star filled"/>)}
            {Array.from({length: maxRating - rating}, (element, index) =>
                <img key={index} src={StarEmpty} alt="Rating star empty"/>)}
        </>
    )
}

Rating.propTypes = {
    rating: PropTypes.string,
};

export default Rating;