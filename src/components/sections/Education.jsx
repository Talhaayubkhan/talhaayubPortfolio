import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Education & Certifications</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold text-blue-400">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science</h4>
                <p className="text-blue-400 font-medium">University of Agriculture Peshawar</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                  <Calendar size={14} />
                  <span>October 2020 - June 2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <MapPin size={14} />
                  <span>Peshawar, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-green-400" size={32} />
              <h3 className="text-2xl font-semibold text-green-400">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold">Namaste JavaScript Certification</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Mastered closures, event loop, async patterns (promises, async/await), 
                  deepened core JavaScript understanding.
                </p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold">Namaste React Certification</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Strengthened skills in React component design, state management, 
                  hooks, lifecycle methods, and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;