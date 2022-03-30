import React, { useEffect, useState } from 'react';
import Spiner from '../../Spiner/Spiner';
 
import CountryCard from '../CountryCard/CountryCard';
 

const Country = () => {
    const [countries,setCountrys]=useState([])
    const [spiner,setSpiner]=useState(false)
    useEffect(()=>{
        setSpiner(true)
        fetch(`https://restcountries.com/v3.1/all
        `)
        .then(rs=>rs.json())
        .then(data=>setCountrys(data))
        setSpiner(false)
    },[])
    return (
        <>
        {spiner ? <Spiner/> : <div className='text-center     ' >
        <h1 className='text-xl text-center my-5'>Alll country information  </h1>
      
        
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-8'>
      {
           countries.map(country=><CountryCard key={country.cca3} country={country}></CountryCard>)
       }
      </div>

          
      </div>}
        </>
    );
};

export default Country;