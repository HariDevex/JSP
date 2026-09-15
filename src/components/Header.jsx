import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

const Header = () => {
  return (
    <header className="bg-surface-dark text-white py-2">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs font-label text-slate-400">
          <span className="hidden sm:inline">contact@jambavan.com</span>
          <span className="hidden sm:inline">|</span>
          <span>+91 8073514213</span>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <img
                src={link.iconURL}
                alt={link.name}
                className="w-4 h-4 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
