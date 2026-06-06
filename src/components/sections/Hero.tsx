import { BUSINESS, getWhatsAppLink } from '../../config/business';
import { ChevronDown, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center hero-pattern overflow-hidden"
    >
      {/* Decorative gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(201, 168, 76, ${Math.random() * 0.3 + 0.1})`,
              animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric border decoration */}
      <div className="absolute top-6 left-6 right-6 bottom-6 border border-gold/10 rounded-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-gold/5 rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Small decorative text */}
        <p className="text-gold/70 font-body text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
          ✦ Style That Sparkles ✦
        </p>

        {/* Brand name */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 gold-shimmer">
          {BUSINESS.name}
        </h1>

        {/* Tagline */}
        <p className="font-body text-sm sm:text-base md:text-lg text-charcoal/80 uppercase tracking-[0.35em] mb-10">
  {BUSINESS.tagline}
</p>

        {/* Ornamental divider */}
        <div className="ornamental-divider mb-10 mx-auto max-w-sm">
          <span className="text-gold text-xl">❖</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#gallery"
            className="group flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-ivory font-body font-semibold text-sm md:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-maroon/20"
          >
            View Collection
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-body font-semibold text-sm md:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown size={28} className="text-gold/60" />
      </div>
    </section>
  );
}
