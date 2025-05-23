import React from 'react';
import { Code, Database, Globe, Server, Zap, Users, Target } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Zap className="text-yellow-400" size={20} />
                <span>Fast Learner</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Users className="text-blue-400" size={20} />
                <span>Team Player</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Target className="text-green-400" size={20} />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
              <Code className="text-purple-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Frontend Expert</h3>
              <p className="text-sm text-gray-400">React, Redux, Tailwind CSS</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <Server className="text-blue-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Backend Developer</h3>
              <p className="text-sm text-gray-400">Node.js, Express, MongoDB</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl backdrop-blur-sm border border-green-500/20">
              <Database className="text-green-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Database Design</h3>
              <p className="text-sm text-gray-400">MongoDB, Firebase</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-xl backdrop-blur-sm border border-orange-500/20">
              <Globe className="text-orange-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-sm text-gray-400">Netlify, Vercel, Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;