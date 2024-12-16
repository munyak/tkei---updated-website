import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DemoRequestModal from './DemoRequestModal';

const Footer: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to transform your presentations?
          </h3>
          <div>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block"
            >
              Request Demo
            </button>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-gray-400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-left">
              <div>
                <h4 className="font-medium mb-4">Solutions</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">For Architects</a></li>
                  <li><a href="#" className="hover:text-white">For Designers</a></li>
                  <li><a href="#" className="hover:text-white">For Developers</a></li>
                  <li><a href="#" className="hover:text-white">For Realtors</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-white">About</Link></li>
                  <li><Link to="/press" className="hover:text-white">Press</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link to="/support" className="hover:text-white">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link to="/security" className="hover:text-white">Security</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-8">
            © {new Date().getFullYear()} Tkei. All rights reserved.
          </div>
        </motion.div>
      </div>

      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;