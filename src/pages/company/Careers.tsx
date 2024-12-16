import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Join Our Team</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Help us shape the future of spatial design and visualization. We're looking for passionate individuals who want to make a difference.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Engineering</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Senior Software Engineer</li>
                <li>• AR/VR Developer</li>
                <li>• Full Stack Developer</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Design</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• UX Designer</li>
                <li>• 3D Artist</li>
                <li>• Visual Designer</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Business</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Product Manager</li>
                <li>• Sales Executive</li>
                <li>• Marketing Manager</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;