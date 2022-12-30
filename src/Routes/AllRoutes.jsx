import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../Components/AddProduct'
import AllProducts from '../Components/AllProducts'
import Edit from '../Components/Edit'
import Home from '../Components/Home'

const AllRoutes = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Home/> } />
         <Route path='/Add' element={<AddProduct/> } />
         <Route path='/All' element={<AllProducts/> } />
         <Route path='/edit' element={<Edit/> } />
      </Routes>
  )
}

export default AllRoutes
