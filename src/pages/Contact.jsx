import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://formspree.io/f/yourFormID';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', mobile: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 bg-surface-container-low">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container shadow-sm mb-6">
              <span className="material-symbols-outlined text-primary text-[16px]">mail</span>
              <span className="text-label-badge font-medium text-primary uppercase tracking-widest">Get In Touch</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-tight text-on-surface"
            style={{ letterSpacing: '-0.03em' }}
          >
            Let's <span className="text-gradient-primary">Build Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6"
          >
            Initiate contact. Let's engineer the future of your projects, training, or career placement.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1 p-8 bg-surface-card rounded-xl shadow-card border border-border-subtle h-fit"
            >
              <h2 className="font-display font-bold text-headline-md text-on-surface mb-6 pb-3 border-b border-border-subtle">
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  { icon: 'location_on', title: 'Location', text: '57, 7th Main Road, Near Gayathri Temple, Seethappa Layout, RT Nagar, Bangalore - 560032' },
                  { icon: 'call', title: 'Phone', text: '+91 8073514213', href: 'tel:8073514213' },
                  { icon: 'mail', title: 'Email', text: 'contact@jambavan.com', href: 'mailto:jambavansoftwaresystemspvtltd@gmail.com' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-title-sm text-on-surface mb-1">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-body-sm text-on-surface-variant hover:text-primary transition-colors">{item.text}</a>
                      ) : (
                        <p className="text-body-sm text-on-surface-variant">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border-subtle">
                <p className="text-label-badge text-outline uppercase tracking-wider font-medium mb-3">Response Time</p>
                <p className="text-body-sm text-on-surface-variant">We aim for sub-24-hour response latency.</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 p-8 bg-surface-card rounded-xl shadow-card border border-border-subtle"
            >
              <div className="mb-8">
                <h3 className="font-display font-bold text-headline-md text-on-surface mb-2">Send a Message</h3>
                <p className="text-body-sm text-on-surface-variant">Required fields are marked with *.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label-badge text-on-surface-variant uppercase tracking-wider font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-border-subtle text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-body-md"
                    />
                  </div>
                  <div>
                    <label className="block text-label-badge text-on-surface-variant uppercase tracking-wider font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      pattern="[0-9]{10}"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-border-subtle text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-body-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-label-badge text-on-surface-variant uppercase tracking-wider font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-border-subtle text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-body-md resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-md hover:bg-primary-container transition-all"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
