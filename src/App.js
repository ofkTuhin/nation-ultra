import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countryinfo from './Components/Countryinfo/Countryinfo';



function App() {
  const [contiries,setcountries]=useState([])
  useEffect(( )=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
      setcountries(data)
    }
      )
  },[])
  return (
    <div className="App">
    <h3>Number of country:{contiries.length} </h3>
    
      {
        contiries.map(country=><Countryinfo country={country}></Countryinfo>
       
      )
      }
    
    </div>
  );
}

export default App;
