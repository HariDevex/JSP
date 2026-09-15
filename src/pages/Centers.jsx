import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { branches } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Centers = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 bg-surface-container-low">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container shadow-sm mb-6">
              <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
              <span className="text-label-badge font-medium text-primary uppercase tracking-widest">Our Locations</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-tight text-on-surface"
            style={{ letterSpacing: '-0.03em' }}
          >
            Engineering <span className="text-gradient-primary">Centers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6"
          >
            Visit our centers across India. We're expanding to bring world-class technology
            training and software development services closer to you.
          </motion.p>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-surface-card rounded-xl overflow-hidden shadow-card border border-border-subtle hover:shadow-card-hover transition-all"
              >
                <div className="relative h-56 bg-surface-container-low flex items-center justify-center overflow-hidden">
                  <img
                    src={branch.imageURL}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-on-primary text-label-badge font-medium uppercase">
                      {branch.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-headline-md text-on-surface mb-3">{branch.name}</h3>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">location_on</span>
                    <p className="text-body-md text-on-surface-variant">{branch.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Centers;
