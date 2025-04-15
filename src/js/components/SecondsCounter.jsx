import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";


export const SecondsCounter = (props) => {
    let output = props.seconds.toString().padStart(6, '0').split('')
    return (
        <div className="container justify-content-center d-flex align-items-center">
            <h1 className="bg-dark text-white px-3 py-2 rounded gap-3 m-2"><FontAwesomeIcon icon={faClock} /></h1>

            {output.map((item) => (
                <h1 className="bg-dark text-white px-3 py-2 rounded gap-3 m-2">{item}</h1>
            )
            )}
        </div>
    );
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number,
}