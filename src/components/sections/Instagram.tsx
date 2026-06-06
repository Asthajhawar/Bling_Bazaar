import { BUSINESS, getInstagramLink } from '../../config/business';
import BabyPinkSwan from '../../assets/products/BabyPink Swan.png';
import MoonBell from '../../assets/products/Moon Bell.png';
import MulticoulorLeaflet from '../../assets/products/Multicoulor Leaflet.png';
import RedSwan from '../../assets/products/Red Swan.png';
import SwanBell from '../../assets/products/Swan Bell.png';
import RingBell from '../../assets/products/Ring Bell.png'; 
import RedHairHook from '../../assets/products/Red Hair Hook Jhumka.png';
import YellowHairHook from '../../assets/products/Yellow Hair Hook Jhumka.png';
import GreenSet from '../../assets/products/Green Set.png';

function InstagramIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// TODO: Replace with actual Instagram post screenshots
// Use local images for Instagram posts
const igPosts = [
  BabyPinkSwan,
  // BlackSwan,
  // GreenSwan,
  MoonBell,
  MulticoulorLeaflet,
  // PinkSwan,
  SwanBell,
  RedSwan,
  // TealSwan,
  // YellowSwan,
  RingBell,
  RedHairHook,
  GreenSet,
  YellowHairHook
];

export function Instagram() {
  return (
    <section id="instagram" className="section-padding bg-ivory">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-2">
            Stay Connected
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Follow Us on <span className="gold-shimmer">Instagram</span>
          </h2>
          <p className="font-body text-charcoal/60 mt-3 text-base">
            Daily drops, new arrivals & styling inspiration
          </p>
          <div className="ornamental-divider mt-4 mx-auto max-w-xs">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        {/* Instagram grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {igPosts.map((url, i) => (
            <a
              key={i}
              href={getInstagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl overflow-hidden aspect-square gold-border"
            >
              <img
                src={url}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/50 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Instagram handle & CTA */}
        <div className="text-center mt-10">
          <p className="font-display text-2xl text-charcoal mb-4">
            @{BUSINESS.instagram}
          </p>
          <a
            href={getInstagramLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-body font-semibold text-sm px-7 py-3 rounded-full hover:shadow-lg hover:shadow-[#E1306C]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <InstagramIcon size={18} />
            Follow for New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
}
