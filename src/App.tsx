import React from 'react';
import { Header } from './components/layout/header';
import { Hero } from './components/landing/hero';
import { Features } from './components/landing/features';
import { Pricing } from './components/landing/pricing';
import { Contact } from './components/landing/contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
};

export default App;