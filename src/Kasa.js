import "./css/normalize.css";
import './css/styles.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Listing from "./pages/Listing";
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
            <BrowserRouter>
                <nav>
                    <Header/>
                </nav>
                <main>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="listings/:listingId" element={<Listing/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default Kasa;
