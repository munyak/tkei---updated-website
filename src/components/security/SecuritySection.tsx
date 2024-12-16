import React from 'react';
import { motion } from 'framer-motion';

interface SecuritySectionProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

const SecuritySection: React.FC<SecuritySectionProps> = ({ title, description, items, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-2xl p-8"
    >
      <div className="flex items-start gap-6">
        <div className="text-teal-600 w-12 h-12 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SecuritySection;