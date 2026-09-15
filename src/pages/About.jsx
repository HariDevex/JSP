import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const aboutServices = [
  { icon: 'terminal', title: 'Custom Software Development', desc: 'We develop innovative software tailored to your business needs.' },
  { icon: 'campaign', title: 'Digital Marketing', desc: 'Our marketing experts help you grow your brand and reach your audience.' },
  { icon: 'support_agent', title: 'Consulting Services', desc: 'Insightful strategies to help navigate your industry and challenges.' },
  { icon: 'devices', title: 'Mobile & Web Apps', desc: 'Seamless experiences across platforms, designed for performance and usability.' },
  { icon: 'cloud', title: 'Cloud Solutions', desc: 'Scalable, secure, and cost-effective cloud architectures for modern enterprises.' },
  { icon: 'smart_toy', title: 'AI & Automation', desc: 'Intelligent systems that streamline workflows and unlock new possibilities.' },
];

const whyUs = [
  { icon: 'school', title: 'Expertise', desc: 'Years of experience delivering exceptional results across industries.' },
  { icon: 'groups', title: 'Client-Centric Approach', desc: 'We tailor our services to meet your goals and exceed expectations.' },
  { icon: 'emoji_events', title: 'Proven Results', desc: 'Helping businesses achieve their objectives with measurable success.' },
];

const About = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 bg-surface-container-low">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container shadow-sm mb-6">
              <span className="text-label-badge font-medium text-primary uppercase tracking-widest">Our Story</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-tight text-on-surface"
            style={{ letterSpacing: '-0.03em' }}
          >
            Empowering Digital Evolution with{' '}
            <span className="text-gradient-primary">Wisdom and Strength</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6"
          >
            Inspired by the legendary Jambhavan — known for his wisdom, strength, and unwavering
            loyalty — we bring those same values to the digital world.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider">
              About Us
            </div>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">Who We Are</h2>
            <p className="text-body-md text-on-surface-variant">
              We are a team of passionate engineers, designers, and strategists committed to crafting
              high-performance software that solves real-world problems.
            </p>
          </div>
          <div className="text-center max-w-4xl mx-auto text-body-lg text-on-surface-variant leading-relaxed">
            <p>
              Whether you're a startup looking to disrupt your industry or an enterprise aiming to
              optimize operations, we tailor our solutions to meet your unique needs. Our mission is
              to build software solutions that are robust, scalable, and deeply aligned with our
              clients' goals.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider">
              Capabilities
            </div>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">What We Do</h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {aboutServices.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-surface-card rounded-xl p-6 shadow-card border border-border-subtle flex items-start gap-4 hover:shadow-card-hover transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-title-sm text-on-surface mb-1">{s.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider">
              Why Choose Us
            </div>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">Why Us</h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {whyUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-surface-card rounded-xl p-8 shadow-card border border-border-subtle text-center hover:shadow-card-hover transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary mx-auto mb-4">
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-headline-md text-on-surface mb-2">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary text-label-badge font-medium uppercase tracking-wider">
              Our Commitment
            </div>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">Our Mission</h2>
          </div>
          <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            At Jambhavan Software Systems, we are committed to delivering exceptional services with
            innovation, quality, and dedication. We strive to empower businesses through technology
            that is both resilient and intelligent.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-md hover:bg-primary-container transition-all"
          >
            <span>Start a Conversation</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
