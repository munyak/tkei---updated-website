import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const ArchitectsSolution: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">For Architects</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Transform your architectural presentations with immersive spatial experiences. Let clients walk through your designs at true scale before they're built.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Design Reviews</h3>
              <p className="text-gray-300">Conduct immersive design reviews with clients and stakeholders in a true-to-scale virtual environment.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">BIM Integration</h3>
              <p className="text-gray-300">Seamlessly import your BIM models and visualize them in augmented reality with full spatial awareness.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/#demo" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block">
              Request Demo
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArchitectsSolution;