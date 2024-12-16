import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BackgroundVideo from './BackgroundVideo';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional tools for every need
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful features that integrate seamlessly with your workflow, whether you're designing, developing, or selling spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">For Architects & Designers</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Direct CAD/BIM integration</li>
              <li>• Real-time material editing</li>
              <li>• Lighting simulation</li>
              <li>• Annotation tools</li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">For Developers</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Multi-user presentations</li>
              <li>• Progress tracking</li>
              <li>• Stakeholder collaboration</li>
              <li>• Marketing assets export</li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">For Realtors</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Virtual property tours</li>
              <li>• Remote client presentations</li>
              <li>• Customizable spaces</li>
              <li>• Lead capture integration</li>
            </ul>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-24">
          <BackgroundVideo className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="text-2xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-lg text-gray-200">Works with your existing tools and workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;