import { FC } from 'react';
import Header from '../components/Header';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Benefits />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;