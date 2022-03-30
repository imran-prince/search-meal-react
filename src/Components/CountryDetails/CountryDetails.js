import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 

const CountryDetails = () => {
    const { countryname } = useParams()
    const [countryinfo, setCountryinfo] = useState([])
    console.log(countryinfo);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryname}`)
            .then(rs => rs.json())
            .then(data => setCountryinfo(data))
    }, [countryname])

    return (
        <div className='w-52 mx-auto mt-10'>
           
            <div className=' text-center p-4 shadow-xl rounded-xl  bg-gray-100'>

                <div className='line-high'>
                    <h1>Name: {countryinfo[0]?.name?.common}</h1>
                    <img className='w-50 mx-auto' src={countryinfo[0]?.flags?.png} alt="" />
                    <h2>Capital: {countryinfo[0]?.capital[0]}</h2>
                    <p>Area: {countryinfo[0]?.area}</p>
                    <p>Population: <small className='bg-red-500  text-sm font-bold px-2 py-1'>{countryinfo[0]?.population}</small></p>
                    <p>Region: <small>{countryinfo[0]?.region}</small></p>
                    <p>TimeZone: {countryinfo[0]?.timezones}</p>
                    

                </div>
            </div>
            </div>




            );
};

            export default CountryDetails;