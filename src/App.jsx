import React from 'react';
// Import everything as a single object 'Icons'
import * as Icons from 'lucide-react';

const App = () => {
  // Helper to safely get icons regardless of naming convention
  // It checks for 'Github', then 'GithubIcon', then 'LucideGithub'
  const getIcon = (name) => {
    return Icons[name] || Icons[`${name}Icon`] || Icons[`Lucide${name}`] || Icons.HelpCircle;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            STUDIO.DEV
          </span>
          <div className="space-x-8 hidden md:flex text-sm font-medium">
            <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Building digital <br />
            <span className="text-slate-500">experiences that matter.</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-400 mb-8 leading-relaxed">
            A Full-stack Developer and UI Designer specializing in high-performance 
            React applications and minimalist aesthetics.
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-full font-bold transition-all">
              View Projects
            </button>
            <button className="border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-full font-bold transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-12">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              Icon={getIcon('Code2')} 
              title="Frontend Dev" 
              desc="Pixel-perfect implementation using React, Next.js, and Tailwind." 
            />
            <ServiceCard 
              Icon={getIcon('Terminal')} 
              title="Backend Systems" 
              desc="Scalable API architectures with Node.js and PostgreSQL." 
            />
            <ServiceCard 
              Icon={getIcon('Palette')} 
              title="UI/UX Design" 
              desc="User-centric design systems built with Figma and Framer." 
            />
          </div>
        </div>
      </section>

      {/* Project Teaser */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl bg-slate-800 aspect-video md:aspect-21/9 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Project Nebula</h3>
              <p className="text-slate-400 mb-4">SaaS Analytics Dashboard</p>
              {React.createElement(getIcon('ExternalLink'), { className: "mx-auto text-cyan-400" })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-slate-900 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">© 2026 Studio Dev. Built with React & Tailwind.</p>
          <div className="flex gap-6 text-slate-400">
            {React.createElement(getIcon('Github'), { size: 20, className: "hover:text-white cursor-pointer" })}
            {React.createElement(getIcon('Linkedin'), { size: 20, className: "hover:text-white cursor-pointer" })}
            {React.createElement(getIcon('Mail'), { size: 20, className: "hover:text-white cursor-pointer" })}
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ Icon, title, desc }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
    <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">
      {Icon && <Icon size={32} />}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

export default App;