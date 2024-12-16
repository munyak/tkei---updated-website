import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-3xl">
            <p className="text-xl text-gray-300 mb-8">
              We take your privacy seriously. This policy explains how we collect, use, and protect your data.
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
                <p className="text-gray-300">We collect information that you provide directly to us, as well as data about how you use our services.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
                <p className="text-gray-300">Your data is used to provide and improve our services, and to communicate with you about updates and features.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
                <p className="text-gray-300">We implement security measures to protect your information from unauthorized access or disclosure.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;