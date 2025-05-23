import React from 'react';
import { skills } from '../../data/skills';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400">Frontend</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill} 
                  gradientFrom="from-purple-400" 
                  gradientTo="to-pink-400" 
                />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">Backend</h3>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill} 
                  gradientFrom="from-blue-400" 
                  gradientTo="to-cyan-400" 
                />
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-green-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-green-400">Tools & Others</h3>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill} 
                  gradientFrom="from-green-400" 
                  gradientTo="to-emerald-400" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;