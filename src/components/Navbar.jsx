import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/courses', label: 'Courses' },
  { to: '/centers', label: 'Centers' },
  { to: '/joinus', label: 'Career' },
  { to: '/about', label: 'About' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-border-subtle'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-surface-tint flex items-center justify-center shadow-sm">
              <span className="text-white font-display font-extrabold text-sm">J</span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-bold text-on-surface text-sm tracking-tight">Jambhavan</span>
              <span className="text-[10px] text-outline font-label tracking-widest uppercase">Software Systems</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="material-symbols-outlined text-[22px]">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 bg-white border-t border-border-subtle">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary/8 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-primary text-on-primary text-sm font-semibold mt-2"
          >
            <span>Contact Us</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
