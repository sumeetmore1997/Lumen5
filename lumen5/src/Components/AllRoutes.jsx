import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CaseStudies from '../Pages/CaseStudies'
import Enterprices from '../Pages/Enterprices'
import Learn from '../Pages/Learn'
import Pricing from '../Pages/Pricing'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/enterprices" element={<Enterprices/>}></Route>
        <Route path="/casestudies" element={<CaseStudies/>}></Route>
        <Route path="/learn" element={<Learn/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
