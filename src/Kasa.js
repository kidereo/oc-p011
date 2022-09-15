import "./css/normalize.css";
import './css/styles.css';
import React from "react";
import Header from "./components/Header";

/**
 * Main app file for the Kasa site.
 *
 * @returns {*}
 * @constructor
 */
function Kasa() {
    return (
        <div className="body-container">
            <Header/>
        </div>
    );
}

export default Kasa;
