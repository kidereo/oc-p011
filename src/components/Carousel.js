import React from "react";
import {useState} from "react";
import CarouselArrowLeft from "../assets/carousel-arrow-left.svg";
import CarouselArrowRight from "../assets/carousel-arrow-right.svg";

/**
 * Carousel component at the top of each listing page.
 *
 * @param images
 * @param title
 * @returns {*}
 * @constructor
 */
function Carousel({images, title}) {
    let [current, setCurrent] = useState(0);
    let numberOfImages = images.length;

    /**
     * Progress to the next image.
     */
    function nextImage() {
        setCurrent(current === numberOfImages - 1 ? 0 : current + 1);
    }

    /**
     * Return to the previous image.
     */
    function previousImage() {
        setCurrent(current === 0 ? numberOfImages - 1 : current - 1);
    }

    /**
     * Display listing image.
     * Only display carousel arrows if there is more than one image.
     */
    return (
        <>
            {images.map((image, index) => {
                return (
                    <div key={index} className="listing-carousel-image-wrapper">
                        {index === current && (
                            <img src={image} alt={`${title} (${index + 1} of ${numberOfImages})`}
                                 className="listing-carousel-image"/>
                        )}
                        {index === current && (
                            <p className="listing-carousel-counter">{index + 1}/{numberOfImages}</p>
                        )}
                    </div>
                )
            })
            }
            {numberOfImages > 1 ? (
                <div className="listing-carousel-arrow-wrapper">
                    <img src={CarouselArrowLeft} alt="Carousel arrow left" onClick={previousImage}
                         className="listing-carousel-arrow listing-carousel-arrow_left"/>
                    <img src={CarouselArrowRight} alt="Carousel arrow right" onClick={nextImage}
                         className="listing-carousel-arrow listing-carousel-arrow_right"/>
                </div>
            ) : (null)}
        </>

    )

}

export default Carousel;
