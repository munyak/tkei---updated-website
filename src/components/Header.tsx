import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DemoRequestModal from './DemoRequestModal';
import Logo from './Logo';
import HeroVideo from './HeroVideo';

const Header: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute top-8 left-8 z-10">
        <Logo className="w-16 h-16" color="#F8E7FF" />
      </div>
      
      <div className="absolute inset-0 z-0">
        <HeroVideo className="opacity-80" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-lg mb-4 text-gray-300">Introducing</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Tkei for Vision Pro
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Transform how clients experience spaces before they're built.
            <br />
            The future of spatial visualization is here.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-4"
        >
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block"
          >
            Request Demo
          </button>
          <a 
            href="https://vimeo.com/1035886164?share=copy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors inline-block"
          >
            Watch the film →
          </a>
        </motion.div>
      </div>

      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </header>
  );
};

export default Header;