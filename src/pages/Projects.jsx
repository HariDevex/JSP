import React, { useState, Suspense, useMemo, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsCarousel3D from '../components/three/ProjectsCarousel3D';
import { Link } from 'react-router-dom';

import software from '../assets/images/software.png';
import web from '../assets/images/web.png';
import mobile from '../assets/images/mobile.png';
import uiux from '../assets/images/uiux.png';
import cloud from '../assets/images/cloud.png';
import ecommerce from '../assets/images/ecommerce.png';

const ALL_PROJECTS = [
  {
    id: 'p1', title: 'OmniChannel Headless E-Commerce', category: 'ecommerce', categoryLabel: 'E-commerce Platform', image: ecommerce,
    tagline: 'High-performance API-first shopping engine powering modern retail.',
    description: 'A complete headless e-commerce solution designed for massive scalability.',
    features: ['Multi-tenant vendor architecture', 'ElasticSearch integration', 'Serverless microservices', 'Dynamic PWA with Next.js'],
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'GraphQL'],
    metrics: { stat: '99.99%', label: 'Uptime' },
  },
  {
    id: 'p2', title: 'NovaCloud DevOps Orchestrator', category: 'cloud', categoryLabel: 'Cloud & DevOps', image: cloud,
    tagline: 'Zero-downtime automated deployment pipelines for multi-cloud systems.',
    description: 'A state-of-the-art developer platform automating cloud resource provisioning.',
    features: ['GitOps-based declarative pipeline', 'Auto-scaling based on metrics', 'Security scanning', 'Centralized telemetry'],
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'Go'],
    metrics: { stat: '-40%', label: 'Deploy Time' },
  },
  {
    id: 'p3', title: 'CarePulse Healthcare CRM', category: 'software', categoryLabel: 'Custom Software', image: software,
    tagline: 'HIPAA-compliant enterprise medical record and scheduling hub.',
    description: 'An intelligent patient information system built for hospital groups.',
    features: ['Secure encrypted medical histories', 'AI scheduling optimizer', 'WebRTC telehealth', 'Billing integrations'],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'AWS', 'WebRTC'],
    metrics: { stat: '50k+', label: 'Daily Patients' },
  },
  {
    id: 'p4', title: 'FleetSync Logistics Tracker', category: 'mobile', categoryLabel: 'Mobile App', image: mobile,
    tagline: 'Offline-first fleet monitoring with real-time routing algorithms.',
    description: 'A robust mobile application connecting drivers with dispatch systems.',
    features: ['Offline GPS queuing', 'WebSocket connections', 'Dynamic routing', 'In-app signature capture'],
    tech: ['React Native', 'Python', 'Django', 'PostgreSQL', 'Redis', 'WebSockets'],
    metrics: { stat: '300m+', label: 'Coordinates Tracked' },
  },
  {
    id: 'p5', title: 'Apex Financial Analytics', category: 'uiux', categoryLabel: 'UI/UX & Web Dev', image: uiux,
    tagline: 'High-frequency charting dashboard with accessibility-first UX.',
    description: 'A stunning analytics interface showing real-time market feeds.',
    features: ['Sub-second ticker updates', 'Drag-and-drop grids', 'WCAG 2.1 AAA', 'Multi-currency export'],
    tech: ['TypeScript', 'React', 'TailwindCSS', 'D3.js', 'RxJS', 'WebAssembly'],
    metrics: { stat: '1.2ms', label: 'Data Latency' },
  },
  {
    id: 'p6', title: 'SmartEd Digital Classroom', category: 'web', categoryLabel: 'Full-Stack Web Dev', image: web,
    tagline: 'Interactive virtual learning environment with collaborative spaces.',
    description: 'An online educational suite for students and teachers.',
    features: ['Collaborative whiteboard', 'Real-time messaging', 'AI plagiarism detection', 'Flexible subscriptions'],
    tech: ['Node.js', 'Express', 'Socket.io', 'React', 'MongoDB', 'Stripe'],
    metrics: { stat: '100+', label: 'Schools Onboarded' },
  },
];

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'software', label: 'Custom Software' },
  { id: 'ecommerce', label: 'E-commerce' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    const res = activeFilter === 'all'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter || (activeFilter === 'web' && p.categoryLabel.includes('Web')));
    setActiveIndex(0);
    return res;
  }, [activeFilter]);

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  }, [filteredProjects.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  }, [filteredProjects.length]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-24 pb-10 lg:pt-32 lg:pb-14 bg-surface-dark">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-accent-cyan text-label-badge font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              Interactive Showcase
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-tight text-white"
            style={{ letterSpacing: '-0.03em' }}
          >
            Our Development <span className="text-gradient-primary">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-slate-400 max-w-2xl mx-auto mt-6"
          >
            Explore a curated selection of systems we've built. Rotate the 3D stage or use the
            filter tabs below.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div className="w-full bg-surface-dark pb-8">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-primary text-on-primary border-transparent shadow-md'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Showcase */}
      <section className="w-full py-10 bg-surface-dark">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Canvas */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[450px] bg-surface-dark rounded-xl border border-white/10 overflow-hidden group shadow-2xl">
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-center justify-center bg-surface-dark/60">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <Canvas camera={{ position: [0, 0.4, 5.2], fov: 42 }} gl={{ antialias: true, alpha: true }} className="w-full h-full">
                {filteredProjects.length > 0 && (
                  <ProjectsCarousel3D projects={filteredProjects} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                )}
              </Canvas>
            </Suspense>
            <div className="absolute bottom-4 left-4 pointer-events-none bg-surface-dark/70 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
              <span className="text-[10px] text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse" />
                Left / Right arrows to rotate
              </span>
            </div>
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button onClick={handlePrev} className="p-3 rounded-full bg-surface-dark/80 hover:bg-primary hover:text-white border border-white/10 text-slate-400 transition-all shadow-xl">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button onClick={handleNext} className="p-3 rounded-full bg-surface-dark/80 hover:bg-primary hover:text-white border border-white/10 text-slate-400 transition-all shadow-xl">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface-dark border border-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-md shadow-2xl relative"
                >
                  <div className="absolute top-6 right-6 flex items-center gap-1 bg-surface-dark border border-white/10 px-3 py-1 rounded-full">
                    <span className="text-xl font-bold text-accent-cyan">{activeProject.metrics.stat}</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">{activeProject.metrics.label}</span>
                  </div>
                  <span className="text-label-badge font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">
                    {activeProject.categoryLabel}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">{activeProject.title}</h2>
                  <p className="text-accent-cyan font-semibold text-sm mb-4">{activeProject.tagline}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{activeProject.description}</p>
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Built with:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.map((t) => (
                        <span key={t} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-slate-300 font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setIsModalOpen(true)} className="flex-1 py-3 text-center text-sm font-bold bg-primary hover:bg-primary-container text-on-primary rounded-xl transition">
                      View Case Study
                    </button>
                    <Link to="/contact" className="py-3 px-6 text-center text-sm font-bold border border-white/20 hover:border-white/40 text-white rounded-xl transition bg-white/5">
                      Hire Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex justify-center lg:justify-start gap-2 mt-4 px-2">
              {filteredProjects.map((_, idx) => (
                <button key={idx} onClick={() => setActiveIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/10 hover:bg-white/20'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="w-full py-16 bg-surface-dark border-t border-white/10">
        <div className="max-w-[75rem] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Projects Completed', color: 'text-accent-cyan' },
              { value: '99.8%', label: 'Client Satisfaction', color: 'text-primary' },
              { value: '12+', label: 'Global Industries', color: 'text-surface-tint' },
              { value: '24/7', label: 'DevOps Monitoring', color: 'text-accent-cyan' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col items-center">
                <span className={`text-4xl sm:text-5xl font-black ${m.color}`}>{m.value}</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 mt-2 font-semibold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-surface-dark/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative bg-surface-card border border-border-subtle rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="relative h-44 sm:h-56 overflow-hidden border-b border-border-subtle">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/60 to-transparent" />
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-surface-dark/80 hover:bg-surface-dark text-white transition">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-label-badge font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">{activeProject.categoryLabel}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white">{activeProject.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                <h4 className="text-label-badge font-bold uppercase tracking-wider text-primary mb-2">Project Overview</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{activeProject.description}</p>
                <h4 className="text-label-badge font-bold uppercase tracking-wider text-primary mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {activeProject.features.map((f, i) => (
                    <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2.5">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-label-badge font-bold uppercase tracking-wider text-primary mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="text-xs bg-surface-container border border-border-subtle px-3 py-1.5 rounded-lg text-on-surface font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 sm:p-6 border-t border-border-subtle flex gap-3 justify-end bg-surface-container-lowest">
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 text-sm font-bold bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl transition">Close</button>
                <Link to="/contact" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 text-sm font-bold bg-primary text-on-primary rounded-xl transition">Let's Build Something Similar</Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
