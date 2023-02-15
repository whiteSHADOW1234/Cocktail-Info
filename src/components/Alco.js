import React, { useState, useEffect } from 'react';
import Cocktail from './Cocktail';
import axios from 'axios';

const Alco = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(response => {
          setCocktails(response.data.drinks);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    return (
        <div className="alco-part">
            <a href="#home">
                <h1 id="alco">- Alcoholic Cocktails -</h1>
            </a>
            <div className="container">
                {cocktails.map((cocktail, index) => (
                    <Cocktail
                        key={index}
                        name={cocktail.strDrink}
                        images={cocktail.strDrinkThumb}
                    />
                ))}
            </div>
        </div>
    );
}

export default Alco;