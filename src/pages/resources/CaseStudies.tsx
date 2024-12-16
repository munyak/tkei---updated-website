import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Case Studies</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            See how leading firms are using Tkei to transform their spatial design presentations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <span className="text-teal-600 font-medium mb-2 block">Architecture</span>
              <h3 className="text-2xl font-semibold mb-4">Modern Museum Design</h3>
              <p className="text-gray-300">How Studio Architects used Tkei to win a major museum project.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <span className="text-teal-600 font-medium mb-2 block">Real Estate</span>
              <h3 className="text-2xl font-semibold mb-4">Luxury Development</h3>
              <p className="text-gray-300">Pre-selling condos with immersive virtual tours.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;