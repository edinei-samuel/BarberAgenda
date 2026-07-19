import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoiments from './pages/MyAppoiments'
import Appoiments from './pages/Appoiments'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/barbers' element={<Barbers />} />
        <Route path='/barbers/:services' element={<Barbers />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myappointments' element={<MyAppoiments />} />
        <Route path='/appointments/:BarberId' element={<Appoiments />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App