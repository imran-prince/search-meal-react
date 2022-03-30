import React, { useEffect, useState } from 'react';
import Spiner from '../../Spiner/Spiner';
import MealCard from '../MealCard/MealCard';
 

const Meal = () => {
    const [searchText, sesearchText] = useState('')
    const [allmeals, setMealdb] = useState([])
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`)
            .then(rs => rs.json())
            .then(data => setMealdb(data.meals))
        setLoad(false)




    }, [searchText])
    const searchMeal = (e) => {
        sesearchText(e.target.value)


    }
    return (
        <>
            {
                load ? <Spiner></Spiner> : <div className='text-center     ' >
                    <h1 className='text-xl text-center my-5'>Find the meal  </h1>
                    Meal-Name:  <input onChange={searchMeal} type="text" name="" id="" />
                    <h1 className='mb-5'>Resutl: {allmeals.length}</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-8'>
                        {
                            allmeals.map(meal => <MealCard meal={meal} key={meal.idMeal}></MealCard>)
                        }
                    </div>


                </div>
            }
        </>
    );
};

export default Meal;