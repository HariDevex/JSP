import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-on-primary font-display font-bold text-sm">J</span>
              </div>
              <span className="font-display font-bold text-on-surface text-base">
                Jambhavan Software Systems
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-sm">
              Building the future, one pixel and system at a time.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-outline text-[18px]">location_on</span>
                <span className="text-body-sm">Global Technology Hub, Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-outline text-[18px]">mail</span>
                <span className="text-body-sm">contact@jambavan.com</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-outline text-[18px]">call</span>
                <span className="text-body-sm">+91 8073514213</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-on-surface text-title-sm">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/courses', label: 'Courses' },
                { to: '/centers', label: 'Centers' },
                { to: '/projects', label: 'Projects' },
                { to: '/joinus', label: 'Careers' },
                { to: '/about', label: 'About' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-on-surface text-title-sm">Services</h4>
            <ul className="space-y-2">
              {[
                'Custom Software',
                'Full-Stack Web',
                'Mobile Apps',
                'UI/UX Design',
                'Cloud & DevOps',
              ].map((item) => (
                <li key={item}>
                  <span className="text-body-sm text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-on-surface text-title-sm">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/share/1EVG8RoweH/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">facebook</span>
              </a>
              <a
                href="https://www.instagram.com/jsplimited?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                href="https://wa.link/qq9tdj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-outline">
            &copy; {new Date().getFullYear()} Jambhavan Software Systems Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-body-sm text-outline">
            <span>SOC2</span>
            <span className="w-1 h-1 rounded-full bg-outline"></span>
            <span>HIPAA</span>
            <span className="w-1 h-1 rounded-full bg-outline"></span>
            <span>GDPR Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
