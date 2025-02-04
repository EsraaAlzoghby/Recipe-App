import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Meals from './Component/Meals/Meals'
import Ingredients from './Component/Ingredients/Ingredients'
import Area from './Component/Area/Area'
import FoodDetails from './Component/FoodDetails/FoodDetails'
import Category from './Component/Category/Category'
import Mealdetails from './Component/Mealdetails/Mealdetails'
import NotFound from './Component/NotFound/NotFound'

const router = createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {index:true , element:<Meals/>}, 
    {path:"Area", element:<Meals/>}, 
    { path: "Ingredients", element: <Meals/> },
    { path: "foodDetails/:id", element: <FoodDetails/> },
    { path: "/category/:category", element: <Category /> },
    { path: "Mealdetails/:id", element: <Mealdetails /> },
    { path: "*", element: <NotFound /> },
  ]}
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
export default App
