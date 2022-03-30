import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {name,flags}=country
    const navigate=useNavigate()
    const btnHandalaer=()=>{
        navigate(`/country-detail/${name.common}`)

    }
    return (
        <div className=' shadow-2xl hover:shadow-red-600     text-center px-5 py-4 rounded-2xl  w-5/6'>
             <Link to=  {`/country-detail/${name.common}`}>
            <img  className=' rounded-lg text-center'  src={flags.png} alt="" />
            <h1 className='text-sm   text-center'>{name.common}</h1>
            </Link>
            <button onClick={btnHandalaer} className='px-5 py-1 text-yellow-50  font-bold  mt-4 mb-2 
            rounded-2xl  bg-green-300 '> Details</button>
       </div>
    );
};

export default CountryCard;