import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BackgroundVideo from './BackgroundVideo';

interface Benefit {
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    src: string;
    poster?: string;
  };
  audience: string;
}

const benefits: Benefit[] = [
  {
    title: "Immersive Design Reviews",
    description: "Let clients walk through spaces at true scale. Perfect for architects and designers to showcase their vision and get immediate feedback.",
    media: {
      type: 'video',
      src: "https://storage.googleapis.com/tkei-marketing/hero-background.mp4",
      poster: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    },
    audience: "Architects & Designers"
  },
  {
    title: "Virtual Property Tours",
    description: "Transform property showings with immersive virtual tours. Help clients visualize potential or pre-construction properties from anywhere in the world.",
    media: {
      type: 'image',
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    audience: "Realtors"
  },
  {
    title: "Development Previews",
    description: "Showcase developments before breaking ground. Help stakeholders understand the full scope and impact of projects with true-to-scale visualization.",
    media: {
      type: 'video',
      src: "https://storage.googleapis.com/tkei-marketing/hero-background.mp4",
      poster: "https://images.unsplash.com/photo-1600607687644-c7171b42498b"
    },
    audience: "Developers"
  }
];

const BenefitSection: React.FC<{ benefit: Benefit; index: number }> = ({ benefit, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row items-center ${
        index % 2 === 0 ? '' : 'md:flex-row-reverse'
      } py-24 px-4`}
    >
      <div className="flex-1 p-8">
        <span className="text-teal-600 font-medium mb-2 block">{benefit.audience}</span>
        <h3 className="text-3xl font-semibold mb-4">{benefit.title}</h3>
        <p className="text-xl text-gray-600">{benefit.description}</p>
      </div>
      <div className="flex-1 relative">
        {benefit.media.type === 'video' ? (
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <BackgroundVideo />
          </div>
        ) : (
          <img
            src={benefit.media.src}
            alt={benefit.title}
            className="rounded-2xl shadow-2xl w-full aspect-video object-cover"
          />
        )}
      </div>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Spatial design for every professional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're an architect, designer, developer, or realtor, Tkei transforms how your clients experience spaces before they're built.
          </p>
        </motion.div>

        {benefits.map((benefit, index) => (
          <BenefitSection key={index} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;