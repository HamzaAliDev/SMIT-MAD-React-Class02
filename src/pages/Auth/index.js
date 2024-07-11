import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Forgetpassword from './Forgetpassword'
import Nopage404 from '../Nopage404'

export default function Auth() {
  return (
    <>
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='forget-password' element={<Forgetpassword/>}/>
        <Route path='/*' element={<Nopage404/>}/>
    </Routes>
    </>
  )
}
