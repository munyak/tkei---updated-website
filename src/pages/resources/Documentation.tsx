import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Documentation</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Everything you need to get started with Tkei.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Getting Started</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Quick Start Guide</li>
                <li>• Installation</li>
                <li>• Basic Concepts</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Integration</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• BIM Integration</li>
                <li>• CAD Import</li>
                <li>• API Reference</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Tutorials</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Video Guides</li>
                <li>• Best Practices</li>
                <li>• Examples</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;