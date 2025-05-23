import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Section } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import SectionTitle from '../ui/SectionTitle';

const Contact = () => {
  return (
    <>
         {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <SectionTitle className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </SectionTitle>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 break-all">{personalInfo.email}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <Phone className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+92 318*****81</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <MapPin className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Peshawar, Pakistan</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href={personalInfo.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:khantalharahi@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )

}


export default Contact;