import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import TeamMember from '../../components/TeamMember';

const About: React.FC = () => {
  const founders = [
    {
      name: "Ade Ayoade",
      role: "Co-Founder & CEO",
      image: "/founders/ade.jpeg",
      linkedIn: "https://www.linkedin.com/in/aayoade/",
      bio: "Experienced technology leader with a passion for spatial computing and immersive experiences. Leading Tkei's vision to transform how we experience architectural designs."
    },
    {
      name: "Munya Kanaventi",
      role: "Co-Founder & CTO",
      image: "/founders/munya.jpeg",
      linkedIn: "https://www.linkedin.com/in/mkanaventi/",
      bio: "Technical innovator with deep expertise in AR/VR technologies. Driving Tkei's technical strategy and product development to create cutting-edge spatial visualization solutions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-bold mb-16">About Tkei</h1>
            <a
              href="https://thelittlethings.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block"
            >
              Visit Corporate Site
            </a>
          </div>
          
          <h2 className="text-3xl font-bold mb-8">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {founders.map((founder) => (
              <TeamMember
                key={founder.name}
                name={founder.name}
                role={founder.role}
                image={founder.image}
                linkedIn={founder.linkedIn}
                bio={founder.bio}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;