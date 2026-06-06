import { useEffect, useState } from 'react';
import { BUSINESS, getWhatsAppLink } from '../../config/business';
import { MessageCircle } from 'lucide-react';
import FavLogoIcon from '../../assets/Fav Logo Icon 3.png';

export function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-maroon-dark/95 backdrop-blur-md border-b border-gold/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center gap-2">
            <img 
              src={FavLogoIcon} 
              alt="Bling Bazaar Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="font-display text-gold text-xl md:text-2xl tracking-wide">
              {BUSINESS.name}
            </span>
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-body text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
