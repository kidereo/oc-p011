import React from "react";
import {useState} from "react";
import DropdownArrowDown from "../assets/dropdown-arrow-down.svg";

/**
 * Dropdown component.
 * Used both on the Listing and About pages by passing the classes as props.
 *
 * @param title
 * @param content
 * @param class_1
 * @param class_2
 * @param class_3
 * @param class_4
 * @returns {*}
 * @constructor
 */
function Dropdown({title, content, class_1 = null, class_2 = null, class_3 = null, class_4 = null}) {
    const [displayContent, setDisplayContent] = useState("none");

    return (
        <article className={class_1}>
            <div className={class_2} onClick={swapDisplay}>
                <h2>{title}</h2>
                {displayContent === "none" ?
                    (<img src={DropdownArrowDown} alt="Arrow down"/>) :
                    (<img src={DropdownArrowDown} style={{transform: "rotate(180deg)"}} alt="Arrow up"/>)
                }
            </div>
            <div className={class_3} style={{display: displayContent}}>
                <p>{content}</p>
            </div>
        </article>
    );

    /**
     * Change display attribute from 'none' to 'flex' and vice versa.
     */
    function swapDisplay() {
        if (displayContent === "none") {
            setDisplayContent("flex")
        } else {
            setDisplayContent("none")
        }
    }
}

export default Dropdown;