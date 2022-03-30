import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MelaDetails = () => {
    const {mealid}=useParams()
    const [meals,setMeals]=useState({})
    useEffect(()=>{
        // const url= (`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
        fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        .then(rs=>rs.json())
        .then(data=>console.log(data))

           
    },[])
     
    return (
        <div>
            jfsd
        </div>
    );
};

export default MelaDetails;