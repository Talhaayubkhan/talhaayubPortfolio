import React from 'react';
import { ChevronDown, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { scrollToSection } from '../../utils/constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-bounce mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl">
            👨‍💻
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {personalInfo.title} crafting 
          <span className="text-purple-400 font-semibold"> exceptional </span>
          web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={20} className="text-purple-400" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={20} className="text-purple-400" />
            <span>{personalInfo.phone}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;