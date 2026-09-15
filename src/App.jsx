import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Centers from './pages/Centers.jsx';
import Courses from './pages/Courses.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import JoinUs from './pages/JoinUs.jsx';

const Projects = lazy(() => import('./pages/Projects.jsx'));

function App() {
  return (
    <div className="relative min-h-screen bg-surface text-on-surface">
      <div className="relative z-10">
        <Header />
        <Navbar />
        <main className="pt-0">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/centers' element={<Centers />} />
            <Route path='/joinus' element={<JoinUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
