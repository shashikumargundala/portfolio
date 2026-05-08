/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Circle
} from "lucide-react";
import { RESUME_DATA } from "./constants";

export default function App() {
  const [firstName, ...restName] = RESUME_DATA.name.split(' ');
  const lastName = restName.join(' ');

  return (
    <div className="min-h-screen bg-bg-deep selection:bg-accent selection:text-bg-deep">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT COLUMN: Identity & Branding */}
        <div className="w-full lg:w-1/2 lg:h-screen flex flex-col justify-between p-8 md:p-12 lg:p-20 lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-border-muted overflow-hidden">
          {/* Top Bar */}
          <div className="flex justify-between items-start mb-12 lg:mb-0">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-12 h-12 bg-white flex items-center justify-center rounded-full"
            >
              <span className="text-bg-deep font-bold text-lg">SK</span>
            </motion.div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1">Status</p>
              <p className="text-xs font-medium text-accent">Open to Innovation</p>
            </div>
          </div>

          {/* Identity */}
          <div className="lg:mt-auto py-12 lg:py-0">
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl xl:text-[110px] leading-[0.85] font-serif italic mb-8 tracking-tighter"
            >
              {firstName}<br/>{lastName}
            </motion.h1>
            
            <p className="text-xl md:text-2xl font-light text-gray-400 max-w-sm mb-12 leading-tight">
              {RESUME_DATA.title} building architecture with <span className="text-white italic">precision</span> and <span className="text-white">scale</span>.
            </p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em]"
            >
              <a href={RESUME_DATA.contact.linkedin} target="_blank" className="hover:text-accent transition-colors flex items-center gap-1 group">
                LinkedIn <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href={RESUME_DATA.contact.github} target="_blank" className="hover:text-accent transition-colors flex items-center gap-1 group">
                GitHub <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-accent transition-colors">Contact</a>
            </motion.div>
          </div>
          
          {/* Bottom indicator for desktop */}
          <div className="hidden lg:block mt-12 text-[10px] uppercase tracking-[0.3em] opacity-20">
            Portfolio © {new Date().getFullYear()}
          </div>
        </div>

        {/* RIGHT COLUMN: Experience, Work & Education */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 lg:p-20 space-y-24">
          
          {/* Navigation Overlay (Mobile Floating or Desktop Top Right) */}
          <nav className="flex justify-start lg:justify-end space-x-8 mb-4 text-[10px] uppercase tracking-[0.2em] opacity-60">
            <a href="#about" className="hover:text-accent transition-colors">Overview</a>
            <a href="#projects" className="hover:text-accent transition-colors">Work</a>
            <a href="#experience" className="hover:text-accent transition-colors">Archive</a>
          </nav>

          {/* Objective Summary */}
          <section id="about" className="pt-8">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">Objective</h2>
            <p className="text-2xl font-light text-gray-300 leading-relaxed md:pr-12 italic">
             "{RESUME_DATA.objective}"
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-12">Selected Stretches</h2>
            <div className="space-y-12">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="group cursor-default border-b border-border-muted pb-8 block">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
                    <div>
                      <p className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">{exp.company}</p>
                      <h3 className="text-2xl text-white group-hover:text-accent transition-colors leading-tight">{exp.role}</h3>
                    </div>
                    <p className="text-[10px] font-mono text-gray-600 mt-2 md:mt-0 uppercase tracking-widest">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-accent mt-1 shrink-0"><ChevronRight size={14} /></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 mt-auto">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 bg-white/5 rounded-full text-gray-500 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-12">Key Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESUME_DATA.projects.map((project, idx) => (
                <div key={idx} className="aspect-[4/5] bg-white/[0.03] p-10 relative overflow-hidden group hover:bg-white/[0.05] transition-all border border-border-muted flex flex-col justify-between">
                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-widest text-accent mb-2">0{idx + 1}</p>
                    <h3 className="text-2xl font-serif italic leading-tight text-white group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="mt-4 text-xs text-gray-400 line-clamp-3 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((t, i) => (
                         <span key={i} className="text-[8px] text-gray-500 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-[11px] uppercase tracking-widest font-bold">Details</span>
                       <ArrowUpRight size={14} className="text-accent" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-tr from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills / Tech Footer */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">Technical Proficiency</h2>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.languages.concat(RESUME_DATA.skills.frameworks, RESUME_DATA.skills.cloud).map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/[0.05] rounded-full text-[10px] uppercase tracking-wider border border-border-muted hover:border-accent hover:text-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Education & Info */}
          <section className="border-t border-border-muted pt-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6">Education</h2>
                  <div className="space-y-6">
                    {RESUME_DATA.education.map((edu, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-white font-medium">{edu.institution}</p>
                        <p className="text-[11px] text-gray-500 uppercase tracking-widest mt-1">{edu.degree} • {edu.period}</p>
                      </div>
                    ))}
                  </div>
               </div>
               <div>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6">Connect</h2>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-300 flex items-center gap-3">
                      <Mail size={16} className="text-accent" /> {RESUME_DATA.contact.email}
                    </p>
                    <p className="text-sm text-gray-300 flex items-center gap-3">
                      <Phone size={16} className="text-accent" /> {RESUME_DATA.contact.phone}
                    </p>
                  </div>
               </div>
             </div>
          </section>

          {/* Global Footer for Mobile */}
          <div className="lg:hidden pt-8 border-t border-border-muted text-center italic text-gray-600 text-xs">
             © {new Date().getFullYear()} — Built with Intent.
          </div>

        </div>
      </div>
    </div>
  );
}
