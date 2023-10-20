import React, { useEffect } from 'react'
import '../Styles/Meal.css'
import { useState } from 'react'
import MealItem from './MealItem'
import MealIndex from './MealIndex'

const Meal =()=>{
    const[Url,setURl] = useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a')
    const [Item,setItem] = useState('');
    const [Show,setShow] = useState(false);
    const [Search,setSearch] = useState()

    useEffect(()=>{
        fetch(Url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[Url])

     const setIndex=(alpha)=>{
        setURl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
     }

     const searchRecipe =(evnt)=>{
        if(evnt.key=="Enter"){
            setURl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${Search}`)
        }
     }

    return(
        <>
        <div className='Main'>
            <div className='hdg'>
                <h1>Search Your Food</h1>
                <h4>This is food Reciepe</h4>
            </div>
            <div className='search'>
                <input type="search" className='search-bar' 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>

            <div className="container">
            {
                Show ? <MealItem data={Item}/> : "Not Found" 
            }
            </div>

            <div className="index-cont">
                <MealIndex alphaIndex={(alpha)=>setIndex(alpha)}/> 
            </div>
        </div>
        </>
    )
}

export default Meal