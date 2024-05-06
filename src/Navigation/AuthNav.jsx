import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../Screens/Auth/Login'


export default function AuthNav() {
  return (
    <Routes>
        <Route exact path='/' element={<Navigate to={"/auth/login"}/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        {/* <Route path='/auth/register' element={<Register/>}/> */}
    </Routes>
  )
}