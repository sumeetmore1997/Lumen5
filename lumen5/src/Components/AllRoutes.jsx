import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CaseStudies from '../Pages/CaseStudies'
import Enterprices from '../Pages/Enterprices'
import Home from '../Pages/Home'
import Learn from '../Pages/Learn'
import Login from '../Pages/Login'
import Pricing from '../Pages/Pricing'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/enterprices" element={<Enterprices/>}></Route>
        <Route path="/casestudies" element={<CaseStudies/>}></Route>
        <Route path="/learn" element={<Learn/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
