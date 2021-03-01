import React from 'react';

const Acountry = (props) => {
   const acountry=props.Addcountry
   const totalPopulation=acountry.reduce((sum,country) => sum + country.population,0)
    return (
        <div>
            <h3>country: {acountry.length}</h3>
            <p>totalPopulation: {totalPopulation}</p>
        </div>
    );
};

export default Acountry;