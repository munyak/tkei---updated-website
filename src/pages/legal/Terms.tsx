import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-3xl">
            <p className="text-xl text-gray-300 mb-8">
              By using Tkei, you agree to these terms. Please read them carefully.
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Usage Terms</h2>
                <p className="text-gray-300">Guidelines for using our services, including acceptable use and user responsibilities.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Licensing</h2>
                <p className="text-gray-300">Terms regarding the license granted to use our software and services.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
                <p className="text-gray-300">Restrictions and limitations on the use of our services.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;