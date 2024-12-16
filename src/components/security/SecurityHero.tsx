import React from 'react';
import { motion } from 'framer-motion';

const SecurityHero: React.FC = () => {
  return (
    <div className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Built with Security in Mind</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your data security is our top priority. Our platform is built following industry-leading security standards and best practices to protect your information and maintain your trust.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityHero;