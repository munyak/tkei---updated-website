import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, ServerIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import SecurityHero from '../../components/security/SecurityHero';
import SecuritySection from '../../components/security/SecuritySection';
import SecurityContact from '../../components/security/SecurityContact';

const securitySections = [
  {
    title: "Security Standards",
    description: "We follow industry-leading security standards and best practices.",
    icon: <ShieldCheckIcon className="w-12 h-12" />,
    items: [
      "Built to SOC 2 security standards",
      "GDPR-ready infrastructure"
    ]
  },
  {
    title: "Data Protection",
    description: "Your data is encrypted and protected using industry-leading security measures.",
    icon: <LockClosedIcon className="w-12 h-12" />,
    items: [
      "End-to-end encryption for all data",
      "Multi-factor authentication"
    ]
  },
  {
    title: "Infrastructure Security",
    description: "Our infrastructure is built on secure, enterprise-grade cloud platforms.",
    icon: <ServerIcon className="w-12 h-12" />,
    items: [
      "Cloud security best practices",
      "Continuous backup systems"
    ]
  }
];

const Security: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="p-8">
        <Link to="/" className="inline-block">
          <Logo className="w-16 h-16" color="#F8E7FF" />
        </Link>
      </nav>
      
      <main className="flex-grow">
        <SecurityHero />
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-8 mb-16">
            {securitySections.map((section, index) => (
              <SecuritySection
                key={index}
                title={section.title}
                description={section.description}
                items={section.items}
                icon={section.icon}
              />
            ))}
          </div>
          
          <SecurityContact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;