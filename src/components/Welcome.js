import React from 'react';

export default function Welcome() {
    return (
        <div className="welcome">
            <h1 className="welcome-text">WELCOME</h1>
            <a href="#about"><img className="dropdown-arrow" src={process.env.PUBLIC_URL + '/double_arrow.svg'} alt=""></img></a>
        </div>
    )
};