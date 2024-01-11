import * as React from "react";
import Alert from 'react-bootstrap/Alert';

import '../styles/Header.css';


function Header() {
    return (
        <header>
            <h4>
                <Alert variant="dark">
                    Прогноз-от-React
                </Alert>
            </h4>
        </header>
    )
}

export default Header;