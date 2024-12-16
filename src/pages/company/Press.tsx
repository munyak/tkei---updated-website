import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const Press: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Press</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Latest news, press releases, and media resources about Tkei.
          </p>
          
          <div className="space-y-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <span className="text-teal-600 font-medium mb-2 block">Latest News</span>
              <h3 className="text-2xl font-semibold mb-4">Tkei Launches Vision Pro Support</h3>
              <p className="text-gray-300">Bringing immersive spatial design to Apple's latest platform.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <span className="text-teal-600 font-medium mb-2 block">Press Kit</span>
              <h3 className="text-2xl font-semibold mb-4">Media Resources</h3>
              <p className="text-gray-300">Download logos, screenshots, and other media assets.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Press;