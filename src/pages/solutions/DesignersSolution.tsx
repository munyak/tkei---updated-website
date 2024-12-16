import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const DesignersSolution: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">For Designers</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Elevate your interior design presentations with immersive spatial experiences. Help clients visualize and experience spaces in true scale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Material Visualization</h3>
              <p className="text-gray-300">Experience materials and finishes in context with real-time visualization and lighting.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Space Planning</h3>
              <p className="text-gray-300">Walk through furniture layouts and space configurations at true scale before implementation.</p>
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

export default DesignersSolution;