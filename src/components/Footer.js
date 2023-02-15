import React from "react";

const Footer = () => (
    <div className="footer" id="footer">
        <h1>THE COCKTAIL INFO</h1>
            <div className="cp-text">&copy; 2023 Enkai Huang All Rights Reserved</div>
            <div className="pw-text">Powered by <a href="http://www.thecocktaildb.com/">TheCocktailDB</a></div>

        <div className="footer-links">
            <a href="#home">
                <div>BACK TO TOP</div>
            </a> | 
            <a href="#alco">
                <div>ALCOHOLIC</div>
            </a> | 
            <a href="#nonalco">
                <div>NON-ALCOHOLIC</div>
            </a>
        </div>
    </div>
);

export default Footer;