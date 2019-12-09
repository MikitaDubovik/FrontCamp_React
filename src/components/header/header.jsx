import React from 'react';
import './header.scss';

import Button from '../button/button.jsx'

const Header = () => (
    <div className="head">
        <div className="mainHade">
            <h2>
                FIND YOUR MOVIE
        </h2>
            <input type="text" placeholder="Quentin Tarantino"></input>
            <Button />
            <h4>
                SEARCH BY
        </h4>
            <div className="toggle">
                <a className="active" href="#title">TITLE</a>
                <a href="#genre">GENRE</a>
            </div>
        </div>
    </div>
);

export default Header;