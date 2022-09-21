import React from "react";
import {useState} from "react";
import DropdownArrowUp from "../assets/dropdown-arrow-up.svg";
import DropdownArrowDown from "../assets/dropdown-arrow-down.svg";

/**
 * Dropdown component in the listing-content section.
 *
 * @param title
 * @param content
 * @returns {*}
 * @constructor
 */
function Dropdown({title, content}) {
    const [display, setDisplay] = useState("none");

    function handleClick() {
        if (display === "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }

    return (
        <>
            <div className="listing-content-dropdown-title" onClick={handleClick}>
                <h3>{title}</h3>
                {display === "none" && (<img src={DropdownArrowDown} alt="Arrow down"/>)}
                {display === "flex" && (<img src={DropdownArrowUp} alt="Arrow up"/>)}
            </div>
            <div className="listing-content-dropdown-content" style={{display: display}}>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((element, index) => (
                            <li key={index} className="listing-content-dropdown-content-list">
                                {element}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        {content}
                    </p>
                )
                }
            </div>
        </>
    )
}

export default Dropdown;