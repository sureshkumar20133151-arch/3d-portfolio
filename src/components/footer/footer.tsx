import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10 px-4 mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left — brand + location */}
          <div className="text-center md:text-left">
            <div className="font-semibold text-gray-900 dark:text-white">Suresh Kumar — UniqCraft</div>
            <div className="text-sm text-gray-400 mt-1">📍 Madurai, Tamil Nadu, India</div>
            <div className="text-sm text-gray-400">
              <a href="mailto:dev.sureshkumar01@gmail.com" className="hover:text-blue-500 transition-colors">
                dev.sureshkumar01@gmail.com
              </a>
            </div>
          </div>

          {/* Center — social links */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/solodevsuresh" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-600 transition-colors text-sm">
              LinkedIn
            </a>
            <a href="https://github.com/solodevsuresh" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
              GitHub
            </a>
            <a href="https://instagram.com/solodevsuresh" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-pink-500 transition-colors text-sm">
              Instagram
            </a>
            <a href="https://wa.me/919361599097" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-green-500 transition-colors text-sm">
              WhatsApp
            </a>
          </div>

          {/* Right — copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            © 2026 Suresh Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
