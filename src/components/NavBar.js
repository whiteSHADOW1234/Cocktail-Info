import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar" id="home">
            <a href="#footer" className="logo">Cocktails.</a>
            <div className="nav-links" id="nav">
                <a href="#alco">ALCOHOLIC</a>
                <a href="#nonalco">NON-ALCOHOLIC</a>
            </div>
        </nav>
    );
}

export default NavBar;