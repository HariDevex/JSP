import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { courses } from '../constants';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className={`w-full lg:w-[400px] p-6 rounded-2xl bg-gradient-to-br ${course.theme} 
        shadow-lg border border-white/10 hover:border-white/30 
        transition-all duration-300 relative overflow-hidden 
        hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
    >
      {/* Optional glowing border layer */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />

      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-white/5 rounded-xl flex justify-center items-center border border-white/20">
          <img src={course.icon} alt={course.title} className="w-12 h-12 object-contain" />
        </div>
        <h4 className="text-2xl font-bold tracking-wide text-white">{course.title}</h4>
      </div>

      <ul className="mt-4 space-y-2">
        {course.points.map((point, i) => (
          <li key={i} className="text-sm leading-relaxed text-white/80 flex items-start gap-2">
            <span className="text-teal-400 mt-0.5">•</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-container"
    >
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#3f87a6] to-[#ebf8e1] dark:from-gray-900 dark:to-gray-700 text-white py-12 text-center shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold uppercase tracking-wide text-white drop-shadow"
          >
            Courses <span className="text-teal-400 animate-pulse" >Offered</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg italic text-white/90"
          >
            Our Software Development training is designed to bridge the gap between academic knowledge and industry expectations.
            Whether you're a beginner or looking to sharpen your skills, this program offers a structured pathway to become a confident developer.
          </motion.p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 my-12 px-4">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <hr className="border-slate-300 mx-8" />
    </motion.section>
  );
};

export default Courses;
