import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const roleGlowHover = (color) => ({
  boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80`,
});

const JoinUs = () => {
  const HR_EMAIL = 'jambavansoftwaresystemspvtltd@gmail.com';
  
  
  const CARD_GRADIENT_CLASS = 'bg-gradient-to-br from-gray-600 to-gray-600';

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      
      className="min-h-screen px-4 py-16 md:py-24 text-gray-900" 
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          variants={itemVariants}
          
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter text-gray-800"
        >
          Join Our <span className="text-cyan-600 border-b-4 border-indigo-500 pb-1">Team</span> 🚀
        </motion.h1>
        <motion.p
          variants={itemVariants}
          transition={{ delay: 0.2 }}
         
          className="text-lg md:text-xl max-w-3xl mx-auto mb-16 italic text-gray-600"
        >
          We're building something extraordinary. If you're passionate, curious, and ready to grow—this is your place.
        </motion.p>
      </div>

      {/* Mission & Perks */}
      <motion.div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, boxShadow: '0 0 30px rgba(99,102,241,0.6)' }}
          transition={{ type: 'spring', stiffness: 200 }}
         
          className={`${CARD_GRADIENT_CLASS} backdrop-blur-lg border-2 border-indigo-400/60 hover:border-indigo-300 p-8 rounded-2xl transition-all duration-300 text-white`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-cyan-300">
            <span className="mr-2">🌟</span>Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-white">
            Empower developers and creators through cutting-edge training, mentorship, and community support. We believe in high-impact work over long hours.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, boxShadow: '0 0 30px rgba(6,182,212,0.6)' }}
          transition={{ type: 'spring', stiffness: 200 }}
         
          className={`${CARD_GRADIENT_CLASS} backdrop-blur-lg border-2 border-cyan-400/60 hover:border-cyan-300 p-8 rounded-2xl transition-all duration-300 text-white`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-cyan-300">
            <span className="mr-2">🎁</span>Perks & Benefits
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-left pl-6 text-white">
            <li>Flexible work hours & 4-day workweek options.</li>
            <li>Fully remote-friendly culture (work from anywhere).</li>
            <li>Annual learning budget for courses and conferences.</li>
            <li>Generous paid time off and health benefits.</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Open Roles */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4 border-b border-gray-300 inline-block px-4 pb-1 text-gray-800">
          Open Roles
        </h2>
        <p className="text-xl mb-12 text-gray-600">
          We’re looking for <strong>Senior Developers</strong> who can lead and <strong>Trainees</strong> eager to learn.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Full Stack */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, ...roleGlowHover('rgba(168,85,247,0.6)') }}
           
            className={`${CARD_GRADIENT_CLASS} border-2 border-purple-500/60 hover:border-purple-300 p-8 rounded-xl text-purple-300 hover:text-white transition-all duration-300 backdrop-blur-md text-white`}
          >
            <motion.h3
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h3>
            <h5 className="text-lg text-white mt-1 mb-3">MERN & MEAN</h5>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-purple-600/50 rounded-full text-white">
              Senior & Trainee
            </span>
          </motion.div>

          {/* Frontend */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, ...roleGlowHover('rgba(59,130,246,0.6)') }}
           
            className={`${CARD_GRADIENT_CLASS} border-2 border-blue-500/60 hover:border-blue-300 p-8 rounded-xl text-blue-300 hover:text-white transition-all duration-300 backdrop-blur-md text-white`}
          >
            <h3 className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frontend Developer
            </h3>
            <h5 className="text-lg text-white mt-1 mb-3">React, Angular, VueJs, Tailwind, Framer Motion and Three.js</h5>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-600/50 rounded-full text-white">
              Senior
            </span>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, ...roleGlowHover('rgba(16,185,129,0.6)') }}
           
            className={`${CARD_GRADIENT_CLASS} border-2 border-green-500/60 hover:border-green-300 p-8 rounded-xl text-green-300 hover:text-white transition-all duration-300 backdrop-blur-md text-white`}
          >
            <h3 className="text-3xl font-bold mb-1 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Backend Developer
            </h3>
            <h5 className="text-lg text-white mt-1 mb-3">Node.js, Express, MongoDB, SQL</h5>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-green-600/50 rounded-full text-white">
              Trainee
            </span>
          </motion.div>
        </motion.div>
      </div>

     
      <div className="max-w-md mx-auto mt-20 text-center">
        <motion.a
          href={`mailto:${HR_EMAIL}?subject=Application for Open Role at Your Company`}
          className="inline-block px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 animate-pulse uppercase tracking-wider"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
        >
          Click to Apply! 📧
        </motion.a>
        
        <p className="mt-4 text-sm text-gray-500">
          Send your resume and portfolio to: **{HR_EMAIL}**
        </p>
         <a href="tel:8073514213" className="hover:text-violet-600 transition text-gray-600">
                  +91 8073514213
                </a>
      </div>
    </motion.section>
  );
};

export default JoinUs;

