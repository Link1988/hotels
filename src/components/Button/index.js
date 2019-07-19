import React from 'react';

const Button = (props) => {

    const handler = (event) => {
        event.preventDefault();
        props.getHotels();
    };

    return (
        <button id="loadHotels" onClick={handler} className="btn btn-secondary">Load Hotels</button>
    );
};

export default Button;
