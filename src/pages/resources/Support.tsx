import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Support</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Get help with Tkei. Our support team is here to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Help Center</h3>
              <p className="text-gray-300 mb-4">Find answers to common questions and learn how to get the most out of Tkei.</p>
              <Link to="/documentation" className="text-teal-600 hover:text-white transition-colors">Browse articles →</Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Contact Support</h3>
              <p className="text-gray-300 mb-4">Need personalized help? Our support team is available 24/7.</p>
              <a href="mailto:support@tkei.com" className="text-teal-600 hover:text-white transition-colors">Email support →</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;