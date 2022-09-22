import React from "react";
import {useState} from "react";
import DropdownArrowUp from "../assets/dropdown-arrow-up.svg";
import DropdownArrowDown from "../assets/dropdown-arrow-down.svg";

/**
 * Dropdown component for the about-content section.
 * NB: This component not used.
 *
 * @param title
 * @param content
 * @param class_1
 * @param class_2
 * @param class_3
 * @returns {*}
 * @constructor
 */
function DropdownInAbout({title, content, class_1 = null, class_2 = null, class_3 = null,}) {
    const [display, setDisplay] = useState("none");

    return (
        <article className={`${class_1}`}>
            <div className={`${class_2}`} onClick={swapDisplay}>
                <h2>{title}</h2>
                {display === "none" ?
                    (<img src={DropdownArrowDown} alt="Arrow down"/>) :
                    (<img src={DropdownArrowUp} alt="Arrow up"/>)
                }
            </div>
            <div className={`${class_3}`} style={{display: display}}>
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