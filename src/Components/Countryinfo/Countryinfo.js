import React from 'react';
import './countryinfo.css';

const Countryinfo = (props) => {
    const countryinfo=props.country
   const {name,flag,capital,region,population,area,currencies,languages}=countryinfo
   for (var i=0;i<currencies.length;i++)
   {
     var currency=currencies[i].name
      
   }
   for (var i=0;i<languages.length;i++)
   {
     var language=languages[i].name
      
   }
    return (
        <div className="info">
          <div className="country">
          <h3>Name: {name}</h3>
            <img src={flag} alt=""/>
            <p>Caital: {capital}</p>
            <p>region: {region}</p>
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p>currencies: {currency}</p>
            <p>languages: {language}</p>
            <button onClick={()=>props.handleAddcountry(props.country)}>Add Country</button>
          </div>
        </div>
    );
};

export default Countryinfo;