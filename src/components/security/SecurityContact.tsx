import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SecurityContact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">Have Security Questions?</h2>
      <p className="text-xl text-gray-300 mb-8">
        Our team is ready to discuss our security practices and standards in detail.
      </p>
      <div className="space-x-4">
        <Link
          to="/contact"
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block"
        >
          Contact Our Team
        </Link>
      </div>
    </motion.div>
  );
};

export default SecurityContact;