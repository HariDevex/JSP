/* eslint-disable no-unused-vars */
import React, { useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePageScroll } from '../components/three/usePageScroll';

const HeroBranded = lazy(() => import('../components/three/upgraded/HeroBranded'));
const TechGlobeUpgraded = lazy(() => import('../components/three/upgraded/TechGlobeUpgraded'));
const SceneWrapper = lazy(() => import('../components/three/SceneWrapper'));

// Icons
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

// Images
import mission from '../assets/images/misson.png';
import vision from '../assets/images/vision.png';
import software from '../assets/images/software.png';
import web from '../assets/images/web.png';
import mobile from '../assets/images/mobile.png';
import uiux from '../assets/images/uiux.png';
import cloud from '../assets/images/cloud.png';
import ecommerce from '../assets/images/ecommerce.png';

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
    title: 'Custom Software Development',
    image: software,
    description:
      "We build software that fits like a glove—tailored to your unique business needs.\nNo cookie-cutter code here, just solutions that stand the test of time.\nFrom concept to completion, we leave no stone unturned.\nLet your ideas take flight with scalable, secure, and smart systems.",
  },
  {
    title: 'Full-Stack Web Development',
    image: web,
    description:
      "We cover all bases—from pixel-perfect front-end to rock-solid back-end.\nYour website will be fast as lightning and smooth as silk.\nBuilt to handle traffic like a pro, even when the chips are down.\nLet’s turn your digital presence into a force to be reckoned with.",
  },
  {
    title: 'Mobile App Development',
    image: mobile,
    description:
      "Apps that put your brand in the palm of their hands—literally.\nWe craft experiences that keep users coming back for more.\nWhether native or hybrid, we hit the ground running.\nYour app will be sleek, swift, and ready to steal the show.",
  },
  {
    title: 'UI/UX Design',
    image: uiux,
    description:
      "Designs that speak louder than words and flow like water.\nWe read between the lines to understand your users’ needs.\nNo bells and whistles—just clean, intuitive, and delightful interfaces.\nLet’s make your product love at first sight.",
  },
  {
    title: 'Cloud & DevOps',
    image: cloud,
    description:
      "We take your infrastructure to the cloud—no strings attached.\nAutomate, optimize, and deploy at the drop of a hat.\nSay goodbye to downtime and hello to peace of mind.\nWith us, your tech stack runs like a well-oiled machine.",
  },
  {
    title: 'E-commerce Platforms',
    image: ecommerce,
    description:
      "Sell smarter, not harder—with platforms built to convert.\nFrom browsing to checkout, we smooth out every bump in the road.\nYour store will be open 24/7, rain or shine.\nLet’s turn clicks into customers and carts into cash.",
  },
];



const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeInOut' } },
};

const visionMissionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2, // Added stagger for children
    },
  },
};

const imageBounceVariants = {
  
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  hover: {
    scale: 1.15,
    rotate: [0, -10, 10, -5, 5, 0], // Fun little wobble effect
    transition: { type: 'spring', stiffness: 300, damping: 10, duration: 0.7 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const servicesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// --- Home Component ---

const Home = () => {
  const scrollRef = usePageScroll();
  
  const heroRef = useRef(null);
  const isInViewHero = useInView(heroRef, { once: true, amount: 0.5 });

  const vmRef = useRef(null);
  const isInViewVM = useInView(vmRef, { once: true, amount: 0.3 }); 

  const techRef = useRef(null);
  const isInViewTech = useInView(techRef, { once: true, amount: 0.4 });

  const servicesRef = useRef(null);
  const isInViewServices = useInView(servicesRef, { once: true, amount: 0.15 });

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 md:py-16 text-gray-900 bg-gray-50 overflow-hidden">
      {/* Hero Title with 3D Branded Background */}
      <div className="relative w-full flex flex-col items-center mb-12 md:mb-20" style={{ minHeight: '350px' }}>
        <Suspense fallback={null}>
          <SceneWrapper scrollRef={scrollRef}>
            <HeroBranded />
          </SceneWrapper>
        </Suspense>
        <motion.h1
          ref={heroRef}
          variants={heroVariants}
          initial="hidden"
          animate={isInViewHero ? 'visible' : 'hidden'}
          whileHover={{ scale: 1.03, color: '#047867' }} 
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center text-gray-900 cursor-pointer max-w-4xl leading-tight tracking-wider relative z-10"
        >
          From Concept to Clicks: <span className="text-teal-600">Building Websites That Win Hearts</span> 🚀
        </motion.h1>
      </div>

      {/* --- Vision & Mission --- */}
      <motion.div
        ref={vmRef}
        variants={visionMissionVariants}
        initial="hidden"
        animate={isInViewVM ? 'visible' : 'hidden'}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 md:gap-16 lg:gap-24 mb-24 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100" // Added background, shadow, and border
      >
        <motion.img
          src={vision}
          alt="Vision"
          variants={imageBounceVariants}
          animate={isInViewVM ? 'visible' : 'hidden'}
          whileHover="hover"
          className="w-40 h-40 sm:w-52 sm:h-52 object-contain rounded-full border-4 border-teal-500 p-2 shadow-lg" // Enhanced image styling
        />
        <motion.div
          variants={imageBounceVariants} // Using a simple variant for text reveal
          className="text-center md:text-left max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl text-teal-700 text-center font-extrabold mb-4 border-b-2 border-pink-500 inline-block px-4 pb-1">
            Your Vision is Our Mission
          </h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInViewVM ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl leading-relaxed text-center text-gray-600 italic"
          >
            We build web development solutions that pack a punch—scalable,
            high-performance, and ready to grow with your business. Whether
            you're just getting your feet wet or already making waves, we’ll
            help you stay ahead of the curve. Let’s craft a web experience that
            knocks your customers’ socks off and puts your brand on the map.
          </motion.p>
        </motion.div>
        <motion.img
          src={mission}
          alt="Mission"
          variants={imageBounceVariants}
          animate={isInViewVM ? 'visible' : 'hidden'}
          whileHover="hover"
          className="w-40 h-40 sm:w-52 sm:h-52 object-contain rounded-full border-4 border-pink-500 p-2 shadow-lg" // Enhanced image styling
        />
      </motion.div>

      {/* --- Tech Icons (Expertise) --- */}
      <motion.div
        ref={techRef}
        variants={visionMissionVariants}
        initial="hidden"
        animate={isInViewTech ? 'visible' : 'hidden'}
        className="relative w-full max-w-6xl bg-gradient-to-br from-indigo-700 to-purple-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-24 overflow-hidden transform skew-y-1 md:skew-y-0"
      >
        <Suspense fallback={null}>
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <SceneWrapper scrollRef={scrollRef}>
              <TechGlobeUpgraded />
            </SceneWrapper>
          </div>
        </Suspense>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-white relative z-10 uppercase tracking-wider">
          🛠️ Core Expertise
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-6 relative z-10 justify-items-center">
          {techIcons.map((icon, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              whileHover={{
                scale: 1.25,
                y: -10,
                rotate: 0,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              className="flex flex-col items-center justify-center p-3 cursor-pointer text-white bg-white/10 rounded-xl backdrop-blur-sm border-2 border-white/20 transition duration-300" // Stylish tech card
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="w-16 h-16 mb-2 object-contain filter drop-shadow-lg gap-2"
              />
              <span className="text-xs sm:text-sm font-medium text-center mt-1">
                {icon.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- Services Section --- */}
      <div className="py-10 md:py-20 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            ref={servicesRef}
            variants={heroVariants}
            initial="hidden"
            animate={isInViewServices ? 'visible' : 'hidden'}
            className="text-center text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            Digital Solutions That <span className="text-teal-600">Drive Results</span>
          </motion.h2>

          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate={isInViewServices ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-16 text-xl text-gray-600 leading-relaxed italic"
          >
            At Jambhavan, we don’t just write code—we engineer success. Our
            services are designed to empower businesses with technology that’s
            fast, flexible, and future-ready.
          </motion.p>

          <motion.div
            variants={servicesContainerVariants}
            initial="hidden"
            animate={isInViewServices ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" // Better responsive grid for services
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceCardVariants}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  boxShadow: '0 20px 30px rgba(4, 120, 87, 0.2)', // Teal shadow on hover
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-white rounded-3xl shadow-xl p-8 text-center cursor-pointer overflow-hidden border-t-4 border-teal-500 transform hover:rotate-1" // Added top border, rounded corners, and slight rotation on hover
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
                <h3 className="text-2xl font-bold mb-3 text-teal-700 border-b border-gray-200 pb-2">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;