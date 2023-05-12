import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10">
                            <h1 className="fs-1 fw-bold">Microblog</h1>
                            <h5 className="fs-4 fw-light">Get In the Rithm of blogging!</h5>
                        </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;