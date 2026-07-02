import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from '../src/componenents/Header.jsx';
import Navbar from '../src/componenents/Navbar.jsx';
import Home from '../src/pages/Home.jsx';
import Centers from '../src/pages/Centers.jsx';
import Courses from '../src/pages/Courses.jsx';
import Contact from '../src/pages/Contact.jsx'; 
import About from '../src/pages/About.jsx';
import Footer from '../src/componenents/Footer.jsx';
import JoinUs from './pages/JoinUs.jsx';
function App() {
  

  return (
    <>
       <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} /> 
        <Route path='/centers' element={<Centers />} />
        <Route path='/joinus' element={<JoinUs/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  
  )
}

export default App
