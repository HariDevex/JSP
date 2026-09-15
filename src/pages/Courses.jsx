import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { courses } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const Courses = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 bg-surface-container-low">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container shadow-sm mb-6">
              <span className="material-symbols-outlined text-primary text-[16px]">school</span>
              <span className="text-label-badge font-medium text-primary uppercase tracking-widest">Training Programs</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-tight text-on-surface"
            style={{ letterSpacing: '-0.03em' }}
          >
            Courses <span className="text-gradient-primary">Offered</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6"
          >
            Our software development training bridges the gap between academic knowledge and industry
            expectations. A structured pathway to become a confident developer.
          </motion.p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-surface-card rounded-xl p-6 shadow-card border border-border-subtle flex flex-col hover:shadow-card-hover transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center border border-border-subtle shrink-0">
                    <img src={course.icon} alt={course.title} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-title-sm text-on-surface leading-tight">{course.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {course.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 shrink-0">check_circle</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-label-badge text-outline uppercase tracking-wider font-medium">
                    Course {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
