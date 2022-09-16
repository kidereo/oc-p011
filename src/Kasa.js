import "./css/normalize.css";
import './css/styles.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/Footer";

/**
 * Main app file for the Kasa site.
 *
 * @returns {*}
 * @constructor
 */
function Kasa() {
    return (
        <div className="body-container">
            <Router>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default Kasa;
