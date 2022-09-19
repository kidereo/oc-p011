import React from "react";
import {useState} from "react";
import CarouselArrowLeft from "../assets/carousel-arrow-left.svg";
import CarouselArrowRight from "../assets/carousel-arrow-right.svg";

/**
 * Carousel component at the top of each listing page.
 *
 * @param images
 * @returns {*}
 * @constructor
 */
function Carousel({images}) {
    let [current, setCurrent] = useState(0);
    let numOfImages = images.length;

    /**
     * Progress to the next image.
     */
    function nextImage() {
        setCurrent(current === numOfImages - 1 ? 0 : current + 1);
    }

    /**
     * Progress to the previous image.
     */
    function previousImage() {
        setCurrent(current === 0 ? numOfImages - 1 : current - 1);
    }

    /**
     * Display listing image.
     * Only display carousel arrows if there is more than one image.
     */
    return (
        <div className="listing-carousel">
            {images.map((image, index) => {
                return (
                    <div key={index} className="listing-carousel-image-wrapper">
                        {index === current && (
                            <img src={image} alt="Listing image" className="listing-carousel-image"/>
                        )}
                    </div>
                )
            })
            }
            {numOfImages > 1 ? (
                <div className="listing-carousel-arrow-wrapper">
                    <img src={CarouselArrowLeft} alt="Carousel arrow left" onClick={previousImage}
                         className="listing-carousel-arrow listing-carousel-arrow_left"/>
                    <img src={CarouselArrowRight} alt="Carousel arrow right" onClick={nextImage}
                         className="listing-carousel-arrow listing-carousel-arrow_right"/>
                </div>
            ) : (null)}
        </div>

    )

}

export default Carousel;
