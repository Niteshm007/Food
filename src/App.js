import React from 'react'
import Meal from './Components/Meal'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import FoodInfo from './Components/FoodInfo'

export default function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Meal/>}/>
    <Route path='/:MealId' element={<FoodInfo/>}/>
    </Routes>
    </>
  )
}
