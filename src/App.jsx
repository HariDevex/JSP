import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Centers from './pages/Centers.jsx';
import Courses from './pages/Courses.jsx';
import Contact from './pages/Contact.jsx'; 
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import JoinUs from './pages/JoinUs.jsx';
import { usePageScroll } from './components/three/usePageScroll';

const SceneWrapper = lazy(() => import('./components/three/SceneWrapper'));
const ParticlesUpgraded = lazy(() => import('./components/three/upgraded/ParticlesUpgraded'));
const Projects = lazy(() => import('./pages/Projects.jsx'));

function App() {
  const scrollRef = usePageScroll();

  return (
    <div className="relative">
      <Suspense fallback={null}>
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <SceneWrapper scrollRef={scrollRef}>
            <ParticlesUpgraded />
          </SceneWrapper>
        </div>
      </Suspense>
      <div className="relative z-10">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/courses' element={<Courses />} /> 
          <Route path='/centers' element={<Centers />} />
          <Route path='/joinus' element={<JoinUs/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
