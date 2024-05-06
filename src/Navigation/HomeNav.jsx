import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Screens/Dashboard/Home'



export default function HomeNav() {
  return (
    <Routes>
        <Route exact path='/' element={<Navigate to={"/home/dashboard"}/>}/>
        <Route path='/home/dashboard' element={<Home/>}/>
        {/* <Route path='/auth/register' element={<Register/>}/> */}
    </Routes>
  )
}