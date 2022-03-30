import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MealCard = ({meal}) => {
    const navigate = useNavigate();
    const {idMeal,strInstructions,strMealThumb}=meal
    const btnHandalaer=()=>{
        const path= `/meal-detail/${idMeal}`
        navigate(path)
    }
    return (
        
            <div className=' shadow-2xl hover:shadow-red-600     text-center px-5 py-4 rounded-2xl  w-5/6'>
             <Link to=  {`/meal-detail/${idMeal}`}>
            <img  className=' rounded-lg text-center'  src={strMealThumb} alt="" />
            <h1 className='text-sm   text-center'>{strInstructions.slice(0,100)}</h1>
            </Link>
            <button onClick={btnHandalaer} className='px-5 py-1 text-yellow-50  font-bold  mt-4 mb-2 
            rounded-2xl  bg-green-300 '> Details</button>
       </div>
    );
};

export default MealCard;