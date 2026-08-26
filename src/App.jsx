import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PageHeader from './components/PageHeader';
import Services from './components/Services';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

import { CartProvider } from './context/CartProvider';
import CartModal from './components/CartModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#1A1716] text-[#FAF7F2]">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {activePage === 'home' ? (
          <Hero />
        ) : (
          <PageHeader title={activePage === 'contact' ? 'Contact Us' : activePage} />
        )}

        <main>
          {(activePage === 'home' || activePage === 'services') && <Services />}
          {(activePage === 'home' || activePage === 'menu') && <Menu />}
          {activePage === 'about' && <AboutPage />}
          {(activePage === 'home' || activePage === 'contact') && <ContactForm />}
        </main>

        <Footer setActivePage={setActivePage} />
        <CartModal />
      </div>
    </CartProvider>
  );
}