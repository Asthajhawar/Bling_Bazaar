import { Phone, MessageCircle } from 'lucide-react';
import {
  BUSINESS,
  getWhatsAppLink,
  getPhoneLink,
  getInstagramLink,
} from '../../config/business';

function InstagramIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-maroon-dark text-ivory">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-6xl mx-auto section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-gold mb-2">
              {BUSINESS.name}
            </h3>
            <p className="font-display text-sm text-ivory/60 italic mb-4">
              {BUSINESS.tagline}
            </p>
            <p className="font-body text-xs text-ivory/40 leading-relaxed">
              Serving Bihar | Shipping Pan India
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-gold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href={getPhoneLink()}
                className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors font-body text-sm"
              >
                <Phone size={16} className="text-gold/60" />
                {BUSINESS.phone}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors font-body text-sm"
              >
                <MessageCircle size={16} className="text-gold/60" />
                WhatsApp Order
              </a>
              <a
                href={getInstagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors font-body text-sm"
              >
                <InstagramIcon size={16} className="text-gold/60" />
                @{BUSINESS.instagram}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#gallery" className="text-ivory/70 hover:text-gold transition-colors font-body text-sm">
                Our Collection
              </a>
              <a href="#how-to-order" className="text-ivory/70 hover:text-gold transition-colors font-body text-sm">
                How to Order
              </a>
              <a href="#features" className="text-ivory/70 hover:text-gold transition-colors font-body text-sm">
                Why Choose Us
              </a>
              <a href="#instagram" className="text-ivory/70 hover:text-gold transition-colors font-body text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-ivory/30">
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </p>
            <p className="font-body text-xs text-ivory/30 text-center md:text-right">
              Prices subject to change. Contact us for bulk orders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
