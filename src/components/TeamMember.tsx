import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedIn: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, linkedIn, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center text-center"
    >
      <div 
        className="w-32 h-32 rounded-full mb-6 overflow-hidden bg-gray-800 relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-teal-600 mb-4">{role}</p>
      <p className="text-gray-300 mb-6">{bio}</p>
      <a
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors"
      >
        View LinkedIn Profile →
      </a>
    </motion.div>
  );
};

export default TeamMember;