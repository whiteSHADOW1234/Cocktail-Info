import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail';

const NonAlco = () => {
    const [noncocktails, setNonCocktails] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then(response => {
        setNonCocktails(response.data.drinks);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    return (
        <div className="nonalco-part">
            <a href="#home">
                <h1 id="nonalco">- Non-Alcoholic Cocktails- </h1>
            </a>
            <div className="container">
                {noncocktails.map((noncocktail, index) => (
                    <Cocktail
                        key={index}
                        name={noncocktail.strDrink}
                        images={noncocktail.strDrinkThumb}
                    />
                ))}
            </div>
        </div>
    );
}

export default NonAlco;