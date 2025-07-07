import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDribbble, FiMail, FiHeart } from 'react-icons/fi';

const Footer = ({ portfolioData }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: portfolioData?.social?.github || '#',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: portfolioData?.social?.linkedin || '#',
      label: 'LinkedIn'
    },
    {
      icon: FiDribbble,
      href: portfolioData?.social?.dribbble || '#',
      label: 'Dribbble'
    },
    {
      icon: FiMail,
      href: `mailto:${portfolioData?.email || 'marco@example.com'}`,
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
              className="text-2xl font-display font-bold text-white cursor-pointer mb-2"
            >
              {portfolioData?.name || 'Marco Mendoza'}
            </motion.h3>
            <p className="text-white/60">
              {portfolioData?.title || 'Design Engineer'}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with{' '}
              <FiHeart className="text-red-400 mx-1" size={14} />
              by {portfolioData?.name?.split(' ')[0] || 'Marco'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;