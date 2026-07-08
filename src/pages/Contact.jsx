import React, { useState } from 'react';
// ⚠️ Ensure you have installed and imported framer-motion!
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ⚠️ Remember to change this to your actual Formspree endpoint!
    const endpoint = 'https://formspree.io/f/yourFormID'; 

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Transmission successful! Your message is in the pipeline. 🌌');
        setFormData({ name: '', mobile: '', message: '' });
      } else {
        alert('Error: Data transmission failed. Please check your connection. 🛑');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('System malfunction. Try again later.');
    }
  };

  return (
    // 1. MODIFIED: Removed 'min-h-screen bg-gray-900 text-white' 
    // to allow parent page background to show. Text color set to dark for contrast.
    <div className="font-mono px-4 py-20 relative overflow-hidden text-gray-800">
      
      {/* --- Section 1: Dynamic Header --- */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          {/* 2. MODIFIED: Removed text-transparent bg-clip-text bg-gradient-to-r... 
               and applied a solid color for a clean look */}
          <span className="text-violet-600">
            Jambavan Systems // Connect
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Initiate Contact. Let's engineer the future of your projects, training, or career placement.
        </motion.p>
      </div>

      {/* --- Section 2: Form & Details Container --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Contact Info (Side Panel) - Kept card background colors */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          // 3. RETAINED: Card background color and border
          className="md:col-span-1 p-8 bg-violet-600/10 rounded-xl border border-violet-600/30 shadow-2xl shadow-violet-500/10 h-fit text-white"
        >
          <h2 className="text-2xl font-bold text-violet-600 mb-6 border-b border-violet-600/50 pb-2">
            System Data Streams
          </h2>
          <div className="space-y-6 text-sm">
            
            <div className="flex items-start">
              <span className="text-2xl mr-3 text-teal-400">📍</span>
              <div>
                <h4 className="font-semibold text-gray-800">Location Matrix</h4>
                <p className="text-gray-600">
                  57, 7th Main Road, Near Gayathri Temple, Seethappa Layout, RT Nagar, Bangalore - 560032
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-teal-400">📞</span>
              <div>
                <h4 className="font-semibold text-gray-800">Direct Line</h4>
                <a href="tel:8073514213" className="hover:text-violet-600 transition text-gray-600">
                  +91 8073514213
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-teal-400">📧</span>
              <div>
                <h4 className="font-semibold text-gray-800">Email Conduit</h4>
                <a href="mailto:jambavansoftwaresystemspvtltd@gmail.com" className="hover:text-violet-600 transition text-gray-600">
                  jambavansoftwaresystems<br />pvtltd@gmail.com
                </a>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Form Section - Kept card background colors (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          // 4. RETAINED/MODIFIED: Used a lighter, clearer glassmorphism effect and adjusted text color
          className="md:col-span-2 p-10 bg-white/70 backdrop-blur-lg border border-gray-300 shadow-xl rounded-3xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-teal-600">Secure Data Input</h3>
            <p className="text-md text-gray-500 mt-2">Required fields are marked with **.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Input fields with 'glowing' underline style */}
            {[
              { id: 'name', type: 'text', label: 'Name **', name: 'name', value: formData.name, required: true },
              { id: 'mobile', type: 'tel', label: 'Mobile Number **', name: 'mobile', value: formData.mobile, required: true, pattern: '[0-9]{10}' },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  pattern={field.pattern}
                  value={field.value}
                  onChange={handleChange}
                  placeholder={`Enter your ${field.label.replace(' **', '')}`}
                  // 5. MODIFIED: Adjusted input text color for visibility on a lighter background
                  className="w-full text-lg pb-1 bg-transparent border-b-2 border-gray-400 focus:border-teal-600 outline-none transition-all duration-300 peer text-gray-800"
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-0 -top-5 text-sm font-medium text-gray-500 peer-focus:text-teal-600 transition-all"
                >
                  {field.label}
                </label>
                {/* Neon effect line on focus */}
                <span className="absolute bottom-0 left-0 w-full h-px bg-teal-600/50 transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-500"></span>
              </div>
            ))}

            {/* Message Textarea */}
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your requirements or legendary ideas..."
                // 6. MODIFIED: Adjusted textarea background, border, and text color
                className="w-full text-lg p-3 bg-white/80 border border-gray-400 focus:border-violet-600 rounded-lg outline-none transition-all duration-300 peer resize-none text-gray-800"
              ></textarea>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-1 peer-focus:text-violet-600 transition-colors">
                Message **
              </label>
            </div>
            
            {/* Submit Button with Animated Gradient - Unchanged */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(99, 102, 241, 0.7)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-teal-500 text-white py-3 px-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-violet-500/30"
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">Initiate Transmission</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H14a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.button>
            
          </form>
          <p className="text-xs text-gray-500 text-center italic mt-6">
              Processing power is standing by. We aim for sub-24-hour response latency.
            </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;