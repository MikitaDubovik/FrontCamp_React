import React from 'react';
import './body.scss';

import Button from '../button/button.jsx'

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="separator">
                    <h2>
                        SORT BY
                    </h2>
                    <div className="toggle">
                        <a className="active" href="#title">RELEASE DATE</a>
                        <a href="#genre">RATING</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;