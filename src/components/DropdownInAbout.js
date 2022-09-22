import React from "react";
import {useState} from "react";
import DropdownArrowUp from "../assets/dropdown-arrow-up.svg";
import DropdownArrowDown from "../assets/dropdown-arrow-down.svg";

/**
 * Dropdown component in the about-content section.
 *
 * @param title
 * @param content
 * @returns {*}
 * @constructor
 */
function DropdownInAbout({title, content}) {
    const [display, setDisplay] = useState("none");

    return (
        <article className="about-content-dropdown">
            <div className="about-content-dropdown-title" onClick={swapDisplay}>
                <h2>{title}</h2>
                {display === "none" ?
                    (<img src={DropdownArrowDown} alt="Arrow down"/>) :
                    (<img src={DropdownArrowUp} alt="Arrow up"/>)
                }
            </div>
            <div className="about-content-dropdown-content" style={{display: display}}>
                <p>{content}</p>
            </div>
        </article>
    );

    /**
     * Change display attribute from 'none' to 'flex' and vice versa.
     */
    function swapDisplay() {
        if (display === "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }
}

export default DropdownInAbout;