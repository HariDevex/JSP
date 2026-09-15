import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import Html from '../assets/icons/Html.png';
import Css from '../assets/icons/Css.png';
import Js from '../assets/icons/Js.png';
import Reactjs from '../assets/icons/Reactjs.png';
import Nodejs from '../assets/icons/Nodejs.png';
import Mongodb from '../assets/icons/Mongodb.png';
import Expressjs from '../assets/icons/Expressjs.png';
import Tailwindcss from '../assets/icons/Tailwindcss.png';
import Sql from '../assets/icons/Sql.png';
import Devops from '../assets/icons/Devops.svg';
import Java from '../assets/icons/Java.svg';
import Python from '../assets/icons/Python.png';

const techIcons = [
  { name: 'HTML', src: Html },
  { name: 'CSS', src: Css },
  { name: 'JavaScript', src: Js },
  { name: 'ReactJS', src: Reactjs },
  { name: 'NodeJS', src: Nodejs },
  { name: 'MongoDB', src: Mongodb },
  { name: 'ExpressJS', src: Expressjs },
  { name: 'TailwindCSS', src: Tailwindcss },
  { name: 'SQL', src: Sql },
  { name: 'DevOps', src: Devops },
  { name: 'Java', src: Java },
  { name: 'Python', src: Python },
];

const services = [
  {
    icon: 'terminal',
    title: 'Custom Software Development',
    description: 'Tailored to unique business workflows, secure, scalable, zero cookie-cutter code. We engineer bespoke platforms that give you proprietary competitive advantages.',
    features: ['Bespoke domain business logic', 'Third-party ERP & CRM integrations', 'Legacy modernization & refactoring'],
    tag: 'Modular Monolith / Microservices',
  },
  {
    icon: 'web',
    title: 'Full-Stack Web Development',
    description: 'Pixel-perfect frontends to rock-solid backends built for high concurrent traffic. We deliver responsive web apps that load in milliseconds worldwide.',
    features: ['Next.js & React reactive architectures', 'SEO-optimized Server-Side Rendering', 'Enterprise API gateway integration'],
    tag: 'Progressive Web Apps (PWA)',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description: 'Native & hybrid apps crafted for engagement, speed, and seamless UX across iOS & Android with offline synchronization and biometric auth.',
    features: ['React Native & Flutter frameworks', 'Push notifications & deep linking', 'Strict App Store & Play Store compliance'],
    tag: 'iOS + Android Cross-Platform',
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'Clean, intuitive, research-driven user journeys that make users fall in love at first touch. We transform complex workflows into effortless digital experiences.',
    features: ['User journey mapping & wireframing', 'Design system architecture in Figma', 'Usability testing & heuristic evaluation'],
    tag: 'Figma Tokens • Accessibility Tested',
  },
  {
    icon: 'dns',
    title: 'Cloud & DevOps',
    description: 'Zero-downtime deployments, automated CI/CD pipelines, elastic cloud infrastructure, and 24/7 proactive security monitoring for zero surprise outages.',
    features: ['Infrastructure as Code (Terraform)', 'Multi-region disaster recovery setups', 'Cloud cost optimization (FinOps)'],
    tag: 'Zero-Downtime Blue/Green Deployments',
  },
  {
    icon: 'shopping_bag',
    title: 'E-Commerce Platforms',
    description: 'High-conversion platforms engineered for seamless checkout, multi-currency pricing, and lightning-fast catalog search that scales during seasonal surges.',
    features: ['Headless commerce & Shopify Plus engines', 'Sub-second algorithmic product search', 'Stripe, Razorpay, & global payment rails'],
    tag: 'Omnichannel Retail Tech',
  },
];

const processSteps = [
  {
    stage: 'STAGE 01',
    title: 'Discovery & System Blueprint',
    description: 'Deep dive architecture sessions, data model planning, tech stack selection, and milestone alignment.',
    icon: 'architecture',
    label: 'Technical Spec Ready',
  },
  {
    stage: 'STAGE 02',
    title: 'Sprint-Based Engineering',
    description: 'Bi-weekly deliverables, continuous integration builds, automated test coverage, and transparent code reviews.',
    icon: 'code',
    label: 'Iterative Releases',
  },
  {
    stage: 'STAGE 03',
    title: 'QA & Security Hardening',
    description: 'Automated penetration testing, load simulation up to 50k RPS, WCAG compliance, and cross-browser audits.',
    icon: 'security',
    label: 'Zero-Defect Standard',
  },
  {
    stage: 'STAGE 04',
    title: 'Deployment & Scale Support',
    description: 'Canary cloud rollouts, live traffic monitoring, dedicated SLA support, and automated scaling policies.',
    icon: 'rocket_launch',
    label: 'High Uptime Live',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  const heroRef = useRef(null);
  const isInViewHero = useInView(heroRef, { once: true, amount: 0.3 });
  const vmRef = useRef(null);
  const isInViewVM = useInView(vmRef, { once: true, amount: 0.2 });
  const techRef = useRef(null);
  const isInViewTech = useInView(techRef, { once: true, amount: 0.2 });
  const servicesRef = useRef(null);
  const isInViewServices = useInView(servicesRef, { once: true, amount: 0.1 });
  const processRef = useRef(null);
  const isInViewProcess = useInView(processRef, { once: true, amount: 0.2 });
  const ctaRef = useRef(null);
  const isInViewCTA = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-2/3 -left-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div ref={heroRef} className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container shadow-sm relative z-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-electric opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-label-badge font-medium text-primary uppercase tracking-widest">
                Next-Generation Software Engineering & Digital Transformation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-tight text-on-surface relative z-10"
              style={{ letterSpacing: '-0.03em' }}
            >
              From Concept to Clicks: Building Software Systems That{' '}
              <span className="text-gradient-primary">Win Hearts & Drive Scale</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg text-on-surface-variant max-w-2xl pt-1 relative z-10"
            >
              At Jambhavan, we don't just write code — we engineer high-performance, resilient
              digital solutions tailored to your business vision. From cutting-edge web applications
              to robust cloud infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto relative z-10"
            >
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-md hover:bg-primary-container transition-all"
              >
                <span>Explore Our Solutions</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high text-on-surface font-semibold shadow-sm hover:bg-surface-container transition-all"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                <span>Book a Tech Discovery Call</span>
              </Link>
            </motion.div>
          </div>

          {/* Trust Metrics & Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
          >
            {/* Live Metrics Card */}
            <div className="lg:col-span-8 bg-surface-card rounded-xl p-6 shadow-card flex flex-col justify-between border border-border-subtle">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-status-danger/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-secondary-fixed inline-block" />
                  <span className="w-3 h-3 rounded-full bg-primary/60 inline-block" />
                  <span className="text-label-code text-outline ml-2 font-label">
                    production-cluster-ap-south-1.jambavan.internal
                  </span>
                </div>
                <span className="px-2 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase">
                  LIVE METRICS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                {[
                  { label: 'Global Uptime', value: '99.98%', sub: 'Multi-region SLA guarantee', icon: 'verified', color: 'text-secondary' },
                  { label: 'Median Latency', value: '< 42ms', sub: 'Edge-cached compute nodes', icon: 'speed', color: 'text-accent-electric' },
                  { label: 'Deploy Cycles', value: '14 / day', sub: 'Zero-downtime CI/CD automated', icon: 'rocket_launch', color: 'text-tertiary-container' },
                ].map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-label-badge text-on-surface-variant uppercase font-medium">{m.label}</span>
                      <span className={`material-symbols-outlined ${m.color} text-[20px]`}>{m.icon}</span>
                    </div>
                    <div className="pt-4">
                      <div className="font-display font-bold text-headline-lg text-on-surface">{m.value}</div>
                      <p className="text-body-sm text-text-muted mt-1">{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-surface-container-lowest p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                  </div>
                  <span className="text-label-code text-on-surface truncate font-label">
                    pipeline @ jambavan-core: release-v4.8.2 deployed successfully
                  </span>
                </div>
                <span className="text-label-code text-outline font-label">HTTP 200 OK • TLS 1.3</span>
              </div>
            </div>

            {/* Visual Image Showcase Card */}
            <div className="lg:col-span-4 bg-surface-card rounded-xl p-4 shadow-card flex flex-col justify-between overflow-hidden relative border border-border-subtle">
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-inner">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent-cyan/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[48px]">engineering</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-on-primary font-semibold text-title-sm">Engineered in Bangalore • Deployed Worldwide</p>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-title-sm text-on-surface">Delivery Excellence</span>
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded text-label-badge font-medium uppercase">
                    ISO CERTIFIED
                  </span>
                </div>
                <p className="text-body-sm text-on-surface-variant">
                  Every system built adheres strictly to high-concurrency standards, enterprise security protocols, and 100% test branch coverage.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between">
                <span className="text-label-code text-primary font-medium font-label">SOC2 • HIPAA • GDPR Ready</span>
                <span className="material-symbols-outlined text-primary text-[20px]">shield_with_heart</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
          >
            {[
              { value: '99.9%', label: 'System Reliability Standard' },
              { value: '50+', label: 'High-Impact Projects Delivered' },
              { value: '100%', label: 'End-to-End Agile Lifecycle' },
            ].map((b) => (
              <div key={b.label} className="p-4 rounded-xl bg-surface-container-low shadow-sm">
                <div className="font-display font-bold text-headline-md text-primary">{b.value}</div>
                <p className="text-body-sm text-on-surface-variant mt-1 font-medium">{b.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider mb-3">
                Strategic Alignment
              </div>
              <h2 className="font-display font-bold text-headline-lg text-on-surface">
                Your Vision is Our Mission
              </h2>
              <p className="text-body-md text-on-surface-variant mt-3">
                We eliminate the friction between conceptual design and enterprise production
                deployment through relentless technical discipline.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-primary text-label-code font-label">
              <span>PRECISION</span>
              <span>•</span>
              <span>INTEGRITY</span>
              <span>•</span>
              <span>SCALE</span>
            </div>
          </div>

          <motion.div
            ref={vmRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInViewVM ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Vision Card */}
            <motion.div variants={fadeUp} className="relative bg-surface-card rounded-xl p-8 shadow-card overflow-hidden flex flex-col justify-between group border border-border-subtle">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-primary to-surface-tint" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">visibility</span>
                  </div>
                  <span className="text-label-code text-outline font-label">PILLAR // 01</span>
                </div>
                <h3 className="font-display font-semibold text-headline-md text-on-surface mb-4">Our Vision</h3>
                <p className="text-body-lg text-on-surface-variant mb-6">
                  To be the benchmark software engineering partner for ambitious companies worldwide —
                  creating scalable, resilient digital foundations that compound business value year after year.
                </p>
                <ul className="space-y-3">
                  {[
                    'Architectures engineered for 10x traffic bursts without degradation',
                    'Cloud elasticity that cuts unnecessary operational and infra expenses',
                    'Uncompromising code quality backed by automated continuous tests',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="text-body-md">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 flex items-center justify-between bg-surface-container-low p-4 rounded-xl">
                <span className="text-body-sm text-text-muted">Target Horizon: Continuous Evolution</span>
                <span className="text-label-code text-primary font-semibold font-label">HORIZON 2030</span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeUp} className="relative bg-surface-card rounded-xl p-8 shadow-card overflow-hidden flex flex-col justify-between group border border-border-subtle">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-surface-tint to-secondary" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">track_changes</span>
                  </div>
                  <span className="text-label-code text-outline font-label">PILLAR // 02</span>
                </div>
                <h3 className="font-display font-semibold text-headline-md text-on-surface mb-4">Our Mission</h3>
                <p className="text-body-lg text-on-surface-variant mb-6">
                  To deliver customer-centric software engineering that stays ahead of technical curves,
                  transforming complex operational requirements into intuitive, elegant digital products.
                </p>
                <ul className="space-y-3">
                  {[
                    'Transparent agile delivery sprints with zero obfuscation',
                    'Empowering in-house teams through documented, maintainable codebases',
                    'Fostering relentless curiosity to adopt game-changing tech paradigms',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified_user</span>
                      <span className="text-body-md">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 flex items-center justify-between bg-surface-container-low p-4 rounded-xl">
                <span className="text-body-sm text-text-muted">Engineering Philosophy: Human First, Scale Always</span>
                <span className="text-label-code text-secondary font-semibold font-label">VELOCITY + CARE</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider">
              Modern Frameworks & Distributed Infrastructure
            </div>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">
              Enterprise-Grade Technology Stack
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Curated modern tools and frameworks power our distributed architectures, ensuring
              uncompromising speed, modularity, and maintainability.
            </p>
          </div>

          <motion.div
            ref={techRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInViewTech ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Frontend Tier */}
            <motion.div variants={fadeUp} className="bg-surface-card rounded-xl p-6 shadow-card border border-border-subtle">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">desktop_windows</span>
                  <h3 className="font-display font-bold text-title-sm text-on-surface">Frontend Ecosystem</h3>
                </div>
                <span className="text-label-code text-outline font-label">High-Responsive • Component-Driven • Accessible</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: 'ReactJS', version: '18.x', desc: 'SSR, Next.js, Virtual DOM', status: 'Primary UI Engine' },
                  { name: 'TailwindCSS', version: 'v3/4', desc: 'Design tokens, JIT compiler', status: 'Design System' },
                  { name: 'JavaScript / TS', version: 'ES2024', desc: 'Strict type-safety, async runtime', status: 'Strict Typings' },
                  { name: 'HTML5 Semantic', version: 'Living', desc: 'WCAG 2.1 AA, Microdata', status: 'Semantic Web' },
                  { name: 'Modern CSS', version: 'Flex/Grid', desc: 'Container queries, fluid layout', status: 'Hardware Accel' },
                ].map((t) => (
                  <div key={t.name} className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-title-sm text-on-surface">{t.name}</span>
                      <span className="text-label-code text-primary font-bold font-label">{t.version}</span>
                    </div>
                    <p className="text-body-sm text-text-muted mt-2">{t.desc}</p>
                    <div className="mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-label-badge text-outline">{t.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend & Database Tier */}
            <motion.div variants={fadeUp} className="bg-surface-card rounded-xl p-6 shadow-card border border-border-subtle">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">database</span>
                  <h3 className="font-display font-bold text-title-sm text-on-surface">Backend & Data Layer</h3>
                </div>
                <span className="text-label-code text-outline font-label">High-Throughput • ACID Compliant • Resilient</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: 'Node.js', desc: 'Asynchronous event loops', tag: 'LTS Engine' },
                  { name: 'Express.js', desc: 'REST APIs & micro-routers', tag: 'Fast & Lean' },
                  { name: 'Python', desc: 'FastAPI & AI Integration', tag: 'AI / ML Pipelines' },
                  { name: 'Java Enterprise', desc: 'Spring Boot microservices', tag: 'Enterprise Core' },
                  { name: 'PostgreSQL', desc: 'Relational schema, indexing', tag: 'ACID Strict' },
                  { name: 'MongoDB', desc: 'Document store & sharding', tag: 'Distributed NoSQL' },
                ].map((t) => (
                  <div key={t.name} className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between">
                    <div className="font-semibold text-title-sm text-on-surface">{t.name}</div>
                    <p className="text-body-sm text-text-muted mt-2">{t.desc}</p>
                    <span className="text-label-code text-primary mt-2 font-label">{t.tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure Tier */}
            <motion.div variants={fadeUp} className="bg-surface-card rounded-xl p-6 shadow-card border border-border-subtle">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">cloud_sync</span>
                  <h3 className="font-display font-bold text-title-sm text-on-surface">Cloud, Infrastructure & DevOps</h3>
                </div>
                <span className="text-label-code text-outline font-label">Immutable • Containerized • Multi-Cloud</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { title: 'Docker & K8s', desc: 'Reproducible environments & container orchestration across clusters.', icon: 'inventory_2' },
                  { title: 'AWS & GCP', desc: 'Serverless Lambdas, VPC architecture, S3, IAM policies, and CloudFront CDN.', icon: 'cloud' },
                  { title: 'Automated CI/CD', desc: 'GitHub Actions, linting, regression testing, and instant rollback strategies.', icon: 'sync_alt' },
                  { title: 'Observability', desc: 'Distributed tracing, Prometheus, Datadog, and live error alerting.', icon: 'monitoring' },
                ].map((t) => (
                  <div key={t.title} className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">{t.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-title-sm text-on-surface">{t.title}</h4>
                      <p className="text-body-sm text-text-muted mt-1">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Icons Grid */}
            <motion.div variants={fadeUp} className="relative bg-gradient-to-br from-primary-container to-primary/80 rounded-xl p-8 overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-on-primary relative z-10 uppercase tracking-wider font-display">
                Core Expertise
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 relative z-10 justify-items-center">
                {techIcons.map((icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.15, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="flex flex-col items-center justify-center p-3 cursor-pointer text-on-primary bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 transition-all"
                  >
                    <img src={icon.src} alt={icon.name} className="w-12 h-12 mb-1 object-contain" />
                    <span className="text-xs font-medium text-center mt-1">{icon.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider mb-3">
                Core Service Offerings
              </div>
              <h2 className="font-display font-bold text-headline-lg text-on-surface">
                Digital Solutions That Drive Results
              </h2>
              <p className="text-body-md text-on-surface-variant mt-3">
                Our services empower modern enterprises with technology that's fast, flexible, and future-ready.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-1 text-primary font-semibold text-title-sm hover:underline"
            >
              <span>View Detailed Capabilities</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </Link>
          </div>

          <motion.div
            ref={servicesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInViewServices ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-surface-card rounded-xl p-6 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all group border border-border-subtle"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                    </div>
                    <span className="text-label-code text-outline font-label">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display font-semibold text-headline-md text-on-surface mb-3">{service.title}</h3>
                  <p className="text-body-sm text-on-surface-variant mb-5">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-body-sm text-on-surface">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between text-label-code text-text-muted font-label">
                  <span>{service.tag}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider mb-3">
                Predictable Velocity
              </div>
              <h2 className="font-display font-bold text-headline-lg text-on-surface">
                How Jambhavan Delivers At Speed
              </h2>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-md">
              A disciplined, battle-tested software engineering process designed to take you from
              initial scope to live customer traffic in record time.
            </p>
          </div>

          <motion.div
            ref={processRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInViewProcess ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {processSteps.map((step) => (
              <motion.div key={step.stage} variants={fadeUp} className="bg-surface-card p-6 rounded-xl shadow-card space-y-3 flex flex-col justify-between border border-border-subtle">
                <div>
                  <span className="text-label-code text-primary font-bold font-label">{step.stage}</span>
                  <h3 className="font-display font-semibold text-title-sm text-on-surface mt-1">{step.title}</h3>
                  <p className="text-body-sm text-text-muted mt-2">{step.description}</p>
                </div>
                <div className="pt-3 flex items-center gap-2 text-secondary text-label-badge font-medium uppercase">
                  <span className="material-symbols-outlined text-[16px]">{step.icon}</span>
                  <span>{step.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div ref={ctaRef} className="relative bg-surface-dark rounded-xl p-8 lg:p-16 overflow-hidden shadow-xl text-on-primary">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInViewCTA ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative z-10 max-w-3xl space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-accent-cyan text-label-badge font-medium">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>READY TO BUILD TOGETHER</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] tracking-tight text-white" style={{ letterSpacing: '-0.03em' }}>
                Ready to transform your tech roadmap?
              </h2>
              <p className="text-body-lg text-slate-300 max-w-2xl">
                Whether you are a hyper-growth venture building an MVP or an established enterprise
                modernizing legacy architecture, Jambhavan Software Systems delivers precision
                engineering at scale.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary-container text-white font-semibold shadow-md hover:bg-primary transition-all"
                >
                  <span>Start Your Project</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/centers"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  <span>Locate Engineering Centers</span>
                </Link>
              </div>
              <div className="pt-6 flex flex-wrap items-center gap-6 text-slate-400 text-body-sm">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-accent-cyan text-[18px]">lock</span>
                  <span>NDA Protected Discussions</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-accent-cyan text-[18px]">schedule</span>
                  <span>Discovery Sprint within 48 Hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-accent-cyan text-[18px]">code</span>
                  <span>100% IP & Code Ownership</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
