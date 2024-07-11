import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// pages
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nopage404 from '../Nopage404'
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Frontend() {
  const location = useLocation();
  const isSpecialRoute = ['/', '/contact', '/about'].includes(location.pathname);

  return (
    <>
    {isSpecialRoute && <Header />}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/*' element={<Nopage404/>}/>
    </Routes>
    {isSpecialRoute && <Footer />}
    </>
  )
}
