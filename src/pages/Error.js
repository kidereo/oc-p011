import React from "react";
import {Link} from "react-router-dom";

/**
 * Error page for the 404 code.
 *
 * @returns {*}
 * @constructor
 */
function Error() {
    return (
        <div className="error">
            <p className="error-code">404</p>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className="error-backlink">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error;