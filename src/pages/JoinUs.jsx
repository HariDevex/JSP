import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const roles = [
  {
    title: 'Full Stack Developer',
    tech: 'MERN & MEAN',
    type: 'Senior & Trainee',
    icon: 'code',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Frontend Developer',
    tech: 'React, Angular, VueJs, Tailwind, Framer Motion, Three.js',
    type: 'Senior',
    icon: 'desktop_windows',
    color: 'bg-accent-cyan/10 text-accent-cyan',
  },
  {
    title: 'Backend Developer',
    tech: 'Node.js, Express, MongoDB, SQL',
    type: 'Trainee',
    icon: 'dns',
    color: 'bg-secondary/10 text-secondary',
  },
];

const perks = [
  'Flexible work hours & 4-day workweek options',
  'Fully remote-friendly culture (work from anywhere)',
  'Annual learning budget for courses and conferences',
  'Generous paid time off and health benefits',
];

const JoinUs = () => {
  const HR_EMAIL = 'jambavansoftwaresystemspvtltd@gmail.com';

  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 bg-surface-container-low">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container shadow-sm mb-6">
              <span className="material-symbols-outlined text-primary text-[16px]">groups</span>
              <span className="text-label-badge font-medium text-primary uppercase tracking-widest">Join Our Team</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-tight text-on-surface"
            style={{ letterSpacing: '-0.03em' }}
          >
            Build the Future <span className="text-gradient-primary">With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6"
          >
            We're building something extraordinary. If you're passionate, curious, and ready to
            grow — this is your place.
          </motion.p>
        </div>
      </section>

      {/* Mission & Perks */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            <motion.div variants={fadeUp} className="bg-surface-card rounded-xl p-8 shadow-card border border-border-subtle">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-[28px]">flag</span>
              </div>
              <h3 className="font-display font-semibold text-headline-md text-on-surface mb-3">Our Mission</h3>
              <p className="text-body-md text-on-surface-variant">
                Empower developers and creators through cutting-edge training, mentorship, and
                community support. We believe in high-impact work over long hours.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-surface-card rounded-xl p-8 shadow-card border border-border-subtle">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined text-[28px]">card_giftcard</span>
              </div>
              <h3 className="font-display font-semibold text-headline-md text-on-surface mb-3">Perks & Benefits</h3>
              <ul className="space-y-2">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Open Roles */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider mb-3">
              Open Positions
            </div>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">Open Roles</h2>
            <p className="text-body-md text-on-surface-variant mt-3">
              We're looking for <strong>Senior Developers</strong> who can lead and{' '}
              <strong>Trainees</strong> eager to learn.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-surface-card rounded-xl p-8 shadow-card border border-border-subtle text-center hover:shadow-card-hover transition-all"
              >
                <div className={`w-14 h-14 rounded-xl ${role.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="material-symbols-outlined text-[28px]">{role.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-headline-md text-on-surface mb-2">{role.title}</h3>
                <p className="text-body-sm text-on-surface-variant mb-4">{role.tech}</p>
                <span className="inline-block px-3 py-1 text-label-badge font-medium uppercase tracking-wider bg-surface-container text-on-surface-variant rounded-full">
                  {role.type}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Apply CTA */}
          <div className="text-center mt-12">
            <a
              href={`mailto:${HR_EMAIL}?subject=Application for Open Role at Jambhavan Software Systems`}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-on-primary font-semibold shadow-md hover:bg-primary-container transition-all"
            >
              <span>Apply Now</span>
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
            <p className="mt-4 text-body-sm text-outline">
              Send your resume to: {HR_EMAIL}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
