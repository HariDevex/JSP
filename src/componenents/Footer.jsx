import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Jambavan Software Systems Pvt Ltd</h2>
          <p className="text-sm text-gray-400">
            Building the future, one pixel at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        
             <ul className="space-y-1 text-gray-400">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
        <li><Link to="/about" className="hover:text-white">About</Link></li>
        <li><Link to="/centers" className="hover:text-white">Centers</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
    
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="" className="hover:text-blue-400">Twitter</a>
            <a href="https://www.facebook.com/share/1EVG8RoweH/" className="hover:text-blue-600">Facebook</a>
            <a href="https://www.instagram.com/jsplimited?igsh=MzRlODBiNWFlZA==" className="hover:text-pink-500">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jambavan Software Systems Pvt Ltd . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;