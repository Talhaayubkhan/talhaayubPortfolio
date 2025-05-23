import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Coffee className="text-yellow-400" size={20} />
          <span className="text-gray-400">Made with</span>
          <Heart className="text-red-400" size={16} />
          <span className="text-gray-400">by Talha Ayub</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 Talha Ayub. All rights reserved. | MERN Stack Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;