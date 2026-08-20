import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PageHeader from './components/PageHeader';
import Services from './components/Services';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3E3D]">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {activePage === 'home' ? (
        <Hero />
      ) : (
        <PageHeader title={activePage === 'contact' ? 'Contact Us' : activePage} />
      )}

      <main>
        {(activePage === 'home' || activePage === 'services') && <Services />}
        {(activePage === 'home' || activePage === 'menu') && <Menu />}
        {(activePage === 'home' || activePage === 'contact') && <ContactForm />}
      </main>

    </div>
  );
}