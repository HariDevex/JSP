import React, { useState, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsCarousel3D from '../components/three/ProjectsCarousel3D';
import { Link } from 'react-router-dom';

// Icons/Images
import software from '../assets/images/software.png';
import web from '../assets/images/web.png';
import mobile from '../assets/images/mobile.png';
import uiux from '../assets/images/uiux.png';
import cloud from '../assets/images/cloud.png';
import ecommerce from '../assets/images/ecommerce.png';

const ALL_PROJECTS = [
  {
    id: 'p1',
    title: 'OmniChannel Headless E-Commerce',
    category: 'ecommerce',
    categoryLabel: 'E-commerce Platform',
    image: ecommerce,
    tagline: 'High-performance API-first shopping engine powering modern retail.',
    description: 'A complete headless e-commerce solution designed for massive scalability. Features include real-time stock sync, advanced search filters, instant checkout using Stripe, and an automated admin dashboard.',
    features: [
      'Multi-tenant vendor architecture',
      'ElasticSearch integration for millisecond response times',
      'Serverless microservices structure for checkout and cart',
      'Dynamic progressive web app front-end with Next.js'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'GraphQL'],
    metrics: { stat: '99.99%', label: 'Uptime' }
  },
  {
    id: 'p2',
    title: 'NovaCloud DevOps Orchestrator',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    image: cloud,
    tagline: 'Zero-downtime automated deployment pipelines for multi-cloud systems.',
    description: 'A state-of-the-art developer platform automating cloud resource provisioning and deployment pipelines. Helps enterprises move fast and reduce system administration overhead.',
    features: [
      'GitOps-based declarative pipeline engine',
      'Automatic scaling based on CPU and memory thresholds',
      'Security scanning for container vulnerabilities',
      'Centralized Prometheus and Grafana telemetry'
    ],
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'Go'],
    metrics: { stat: '-40%', label: 'Deploy Time' }
  },
  {
    id: 'p3',
    title: 'CarePulse Healthcare CRM',
    category: 'software',
    categoryLabel: 'Custom Software',
    image: software,
    tagline: 'HIPAA-compliant enterprise medical record and scheduling hub.',
    description: 'An intelligent patient information system built for hospital groups. Improves practitioner productivity, manages patient queues, and offers real-time video consult integration.',
    features: [
      'Secure end-to-end encrypted medical histories',
      'AI-based scheduling auto-optimizer for doctors',
      'Telehealth video conferencing with WebRTC',
      'Seamless billing and claims insurance integrations'
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'AWS', 'WebRTC'],
    metrics: { stat: '50k+', label: 'Daily Patients' }
  },
  {
    id: 'p4',
    title: 'FleetSync Logistics & GPS Tracker',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    image: mobile,
    tagline: 'Offline-first fleet monitoring app with real-time routing algorithms.',
    description: 'A robust mobile application that connects drivers with dispatch systems, tracking locations in real-time, mapping optimized routes, and recording proofs of delivery.',
    features: [
      'Offline queuing system for background GPS coordinates',
      'Real-time WebSocket connection to dispatch panel',
      'Dynamic routing taking traffic and tolls into account',
      'In-app signature capture and document scanner'
    ],
    tech: ['React Native', 'Python', 'Django', 'PostgreSQL', 'Redis', 'WebSockets'],
    metrics: { stat: '300m+', label: 'Coordinates Tracked' }
  },
  {
    id: 'p5',
    title: 'Apex Financial Data Analytics',
    category: 'uiux',
    categoryLabel: 'UI/UX & Web Dev',
    image: uiux,
    tagline: 'High-frequency charting dashboard with accessibility-first UX.',
    description: 'A stunning analytics interface showing real-time market feeds, complex financial spreadsheets, and interactive visual charting. Designed with glassmorphic aesthetics.',
    features: [
      'Sub-second stock and crypto ticker updates',
      'Fully customizable visual grids with drag-and-drop',
      'WCAG 2.1 AAA accessibility and keyboard support',
      'Multi-currency translation and automated reporting export'
    ],
    tech: ['TypeScript', 'React', 'TailwindCSS', 'D3.js', 'RxJS', 'WebAssembly'],
    metrics: { stat: '1.2ms', label: 'Data Latency' }
  },
  {
    id: 'p6',
    title: 'SmartEd Portal & Digital Class',
    category: 'web',
    categoryLabel: 'Full-Stack Web Dev',
    image: web,
    tagline: 'Interactive virtual learning environment with collaborative spaces.',
    description: 'An online educational suite designed to bring students and teachers together. Supports live whiteboard sessions, grading metrics, and collaborative class discussion threads.',
    features: [
      'Interactive vector-based collaborative whiteboard',
      'Real-time classroom messaging and polls',
      'AI plagiarism detection scanner for assignments',
      'Flexible subscription payment options'
    ],
    tech: ['Node.js', 'Express', 'Socket.io', 'React', 'MongoDB', 'Stripe'],
    metrics: { stat: '100+', label: 'Schools Onboarded' }
  }
];

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Projects' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'cloud', label: 'DevOps & Cloud' },
  { id: 'software', label: 'Custom Software' },
  { id: 'ecommerce', label: 'E-commerce' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects based on choice
  const filteredProjects = useMemo(() => {
    const res = activeFilter === 'all' 
      ? ALL_PROJECTS 
      : ALL_PROJECTS.filter(p => p.category === activeFilter || (activeFilter === 'web' && p.categoryLabel.includes('Web')));
    
    // Reset active index if it exceeds array length
    setActiveIndex(0);
    return res;
  }, [activeFilter]);

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative font-sans">
      
      {/* Visual background accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header */}
      <header className="relative z-10 text-center pt-16 pb-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/40">
            Interactive Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-4 bg-gradient-to-r from-teal-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            Our Development Portfolio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Explore a curated selection of systems and software we have built. 
            Rotate the 3D stage or use the filter tabs below to navigate.
          </p>
        </motion.div>
      </header>

      {/* Filter Tabs */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 px-4 mb-8">
        {FILTERS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
              activeFilter === tab.id
                ? 'bg-gradient-to-r from-teal-500 to-indigo-600 border-transparent text-white shadow-lg shadow-teal-500/20 scale-105'
                : 'bg-slate-900/80 border-slate-800 text-gray-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3D Showcase Section */}
      <section className="relative w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 mb-16">
        
        {/* WebGL 3D Canvas */}
        <div className="lg:col-span-7 relative h-[380px] sm:h-[450px] bg-slate-900/30 rounded-3xl border border-slate-800/60 backdrop-blur-sm overflow-hidden group shadow-2xl">
          
          <Suspense fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-sm text-gray-400 font-medium">Powering up 3D engine...</p>
              </div>
            </div>
          }>
            <Canvas
              camera={{ position: [0, 0.4, 5.2], fov: 42 }}
              gl={{ antialias: true, alpha: true }}
              className="w-full h-full"
            >
              {filteredProjects.length > 0 && (
                <ProjectsCarousel3D
                  projects={filteredProjects}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              )}
            </Canvas>
          </Suspense>

          {/* Quick Help Indicator */}
          <div className="absolute bottom-4 left-4 pointer-events-none bg-slate-950/70 border border-slate-800/80 px-3 py-1.5 rounded-lg backdrop-blur-md">
            <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              Left / Right arrows to rotate
            </span>
          </div>

          {/* Navigation Overlay Buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-950/80 hover:bg-teal-500 hover:text-white border border-slate-800 hover:border-transparent text-gray-400 transition-all duration-300 shadow-xl active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-950/80 hover:bg-teal-500 hover:text-white border border-slate-800 hover:border-transparent text-gray-400 transition-all duration-300 shadow-xl active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Info panel */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-2xl relative"
              >
                {/* Glowing decorative dot */}
                <div className="absolute top-6 right-6 flex items-center gap-1 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">
                  <span className="text-xl font-bold text-teal-400">{activeProject.metrics.stat}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">{activeProject.metrics.label}</span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/50 border border-indigo-900/50 px-3 py-1 rounded-full inline-block mb-4">
                  {activeProject.categoryLabel}
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  {activeProject.title}
                </h2>
                
                <p className="text-teal-400 font-semibold text-sm mb-4">
                  {activeProject.tagline}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Built with:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="text-xs bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 py-3 text-center text-sm font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-xl transition duration-300 active:scale-95 shadow-lg shadow-teal-500/10"
                  >
                    View Project Case Study
                  </button>
                  <Link
                    to="/contact"
                    className="py-3 px-6 text-center text-sm font-bold border border-slate-700 hover:border-slate-500 text-white rounded-xl transition duration-300 active:scale-95 bg-slate-950/40"
                  >
                    Hire Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center lg:justify-start gap-2 mt-4 px-2">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'w-6 bg-teal-400' 
                    : 'w-1.5 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* Metrics Banner */}
      <section className="relative z-10 py-16 bg-slate-900/40 border-y border-slate-900 max-w-7xl mx-auto px-6 mb-20 rounded-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-teal-400">50+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-semibold">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-indigo-400">99.8%</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-semibold">Client Satisfaction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-purple-400">12+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-semibold">Global Industries</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-teal-400">24/7</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-semibold">DevOps Monitoring</span>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl z-10"
            >
              
              {/* Top Banner Image */}
              <div className="relative h-44 sm:h-56 overflow-hidden border-b border-slate-800">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-gray-400 hover:text-white transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800/80 px-3 py-1 rounded-full">
                    {activeProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2">Project Overview</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3">Key Features & Engineering Deliverables</h4>
                <ul className="space-y-2 mb-6">
                  {activeProject.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2.5">
                      <span className="text-teal-400 font-bold mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3">Technology Stack Details</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="text-xs bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-800 flex gap-3 justify-end bg-slate-950/40">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition duration-300"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 text-sm font-bold bg-gradient-to-r from-teal-500 to-indigo-600 text-white rounded-xl transition duration-300 shadow-md shadow-teal-500/10"
                >
                  Let's Build Something Similar
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
