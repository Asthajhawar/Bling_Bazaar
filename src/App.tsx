import './index.css';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './config/business';

import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { Features } from './components/sections/Features';
import { Gallery } from './components/sections/Gallery';
import { HowToOrder } from './components/sections/HowToOrder';
import { Instagram } from './components/sections/Instagram';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Sticky header */}
      <Header />

      {/* Page sections */}
      <Hero />
      <Marquee />
      <Features />
      <Gallery />
      <HowToOrder />
      <Instagram />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 pulse-ring"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  );
}

export default App;
