import React from 'react';
import { motion as Motion } from 'framer-motion';

// --- BEGIN: Utility component for the Card border gradient and unique background ---
// Modified to accept and use the bgGradient prop for the inner div
const CardBorderWrapper = ({ children, className = '', bgGradient = 'from-green-300 to-purple-50' }) => (
    // Outer div for border effect. Permanent subtle shadow and rounded corners.
    <div className={`relative p-0.5 rounded-3xl group transition-all duration-500 shadow-xl ${className}`}>
       
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-400 opacity-30 group-hover:opacity-100 transition-opacity duration-500 rounded-[calc(1.5rem+2px)] z-0 blur-sm group-hover:blur-none"></div>
        
       
        <div className={`relative h-full w-full rounded-[1.5rem] bg-gradient-to-br ${bgGradient} p-6 z-10 transition-colors duration-500`}>
            {children}
        </div>
    </div>
);
// --- END: Utility component ---


const Header = () => (
 // Updated header with a clear bottom border/shadow
 <header className="bg-white text-gray-800 py-16 text-center shadow-lg border-b-4 border-purple-100">
  <div className="max-w-5xl mx-auto px-6">
   <h1 className="text-5xl font-extrabold tracking-wide uppercase text-purple-700">
    Our Story
   </h1>
   <h2 className="mt-4 text-xl italic text-purple-500">
    Empowering Digital Evolution with Wisdom and Strength
   </h2>
   <p className="mt-6 text-lg text-gray-600 leading-relaxed">
    At Jambhavan Software, we believe that technology should be as resilient as it is intelligent.
    Inspired by the legendary Jambhavan—known for his wisdom, strength, and unwavering loyalty—we bring
    those same values to the digital world. Our mission is to build software solutions that are robust,
    scalable, and deeply aligned with our clients’ goals.
   </p>
  </div>
 </header>
);

// Card now accepts a 'gradient' prop to define its inner background
const Card = ({ children, gradient }) => (
  <Motion.div
   initial={{ opacity: 0, y: 30 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true }}
   // Enhanced hover effects: deeper lift, increased scale, and a purple glow shadow
   whileHover={{ 
            scale: 1.04, 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(168, 85, 247, 0.5)' 
        }}
      // Combined the transition props
      transition={{
          duration: 0.6,
          scale: { type: 'spring', stiffness: 200, damping: 12 },
          boxShadow: { type: 'spring', stiffness: 200, damping: 12 }
      }}
   className="w-full sm:w-[80%] md:w-[30%] mb-8 cursor-pointer"
  >
    {/* Passes the gradient to the wrapper */}
    <CardBorderWrapper className="h-full" bgGradient={gradient}>
      {children} 
    </CardBorderWrapper>
  </Motion.div>
);

const Section = ({ title, children }) => (
 // Added a very subtle light gradient to the section background for depth
 <section className="py-16 text-center text-gray-800 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-6">
   <h2 className="text-4xl font-bold mb-4 text-purple-600 uppercase">
    {title}
   </h2>
   <div className="w-24 h-1 bg-purple-300 mx-auto mb-8 rounded-full"></div>
   {children}
  </div>
 </section>
);

// ServiceItem now accepts a 'gradient' prop and passes it to Card
const ServiceItem = ({ title, description, gradient }) => (
 <Card gradient={gradient}>
  <h3 className="text-2xl font-semibold mb-2 text-teal-800">{title}</h3>
  <p className="text-gray-600">{description}</p>
 </Card>
);

const About = () => (
 // Set main background to a very subtle light gray
 <main className="font-sans bg-gray-50/50">
  <Header />

  <Section title="Who We Are">
   <div className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
    <p>
     We are a team of passionate engineers, designers, and strategists committed to crafting
     high-performance software that solves real-world problems. Whether you're a startup looking
     to disrupt your industry or an enterprise aiming to optimize operations, we tailor our
     solutions to meet your unique needs.
    </p>
    </div>
  </Section>

  <Section title="What We Do">
   <div className="flex flex-wrap justify-center gap-8 mt-8">
    {/* What We Do Cards: Teal/Blue Gradient */}
    <ServiceItem gradient="from- to-teal-50" title="Custom Software Development" description="We develop innovative software tailored to your business needs." />
    <ServiceItem gradient="from- to-teal-50" title="Digital Marketing" description="Our marketing experts help you grow your brand and reach your audience." />
    <ServiceItem gradient="from- to-teal-50" title="Consulting Services" description="Insightful strategies to help navigate your industry and challenges." />
    <ServiceItem gradient="from- to-teal-50" title="Mobile & Web Apps" description="Seamless experiences across platforms, designed for performance and usability." />
    <ServiceItem gradient="from- to-teal-50" title="Cloud Solutions" description="Scalable, secure, and cost-effective cloud architectures for modern enterprises." />
    <ServiceItem gradient="from- to-teal-50" title="AI & Automation" description="Intelligent systems that streamline workflows and unlock new possibilities." />
   </div>
  </Section>

  <Section title="Why Us">
   <div className="flex flex-wrap justify-center gap-8 mt-8">
    {/* Why Us Cards: Pink/Purple Gradient */}
    <ServiceItem gradient="from- to-pink-50" title="Expertise" description="Years of experience delivering exceptional results across industries." />
    <ServiceItem gradient="from- to-pink-50" title="Client-Centric Approach" description="We tailor our services to meet your goals and exceed expectations." />
    <ServiceItem gradient="from- to-pink-50" title="Proven Results" description="Helping businesses achieve their objectives with measurable success." />
   </div>
  </Section>

  <Section title="Our Mission">
   <div className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
    <p>
     At Jambhavan Software Systems, we are committed to delivering exceptional services with innovation,
     quality, and dedication. We strive to empower businesses through technology that is both resilient
     and intelligent.
    </p>
   </div>
  </Section>
 </main>
);

export default About;
