import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countryinfo from './Components/Countryinfo/Countryinfo';
import Acountry from './Components/Countryinfo/Cart/Acountry';



function App() {
  
  const [contiries,setcountries]=useState([])
  const [Addcontiry,setAddcountry]=useState([])

  useEffect(( )=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setcountries(data)
    }
      )
  },[])
   const handleAddcountry=(country)=>{
     const newCountry =[...Addcontiry , country]
     setAddcountry(newCountry)



     
    
   }
  return (
    <div className="App">
     
    <h3>Number of country:{contiries.length} </h3>
    <h2>add country: {Addcontiry.length} </h2>
    
    <Acountry Addcountry={Addcontiry} ></Acountry>
    
      {
        contiries.map(country=><Countryinfo country={country} handleAddcountry={handleAddcountry}></Countryinfo>
       
      )
      }
    
    </div>
  );
}

export default App;
