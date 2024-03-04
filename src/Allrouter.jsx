
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Product from './Page/Product'
import Login from './Page/Login'
import Signup from './Page/Signup'
import Cart from './Page/Cart'
import Addproduct from './Page/Addproduct'
import SinglePage from './Page/SinglePage'

const AllRouter = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/AddProduct' element={<Addproduct/>}></Route>
       <Route path='/Product' element={<Product/>}></Route>
       <Route path='/Product/:id' element={<SinglePage/>}></Route>
       <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRouter
