import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Badge } from './badge';
import { getWhatsAppLink } from '../../config/business';

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  priceRange: string;
}

interface Props {
  items: GalleryItem[];
}

// ─── Single card ───────────────────────────────────────────────────
const Card = ({ item }: { item: GalleryItem }) => (
  <div className="group relative h-[380px] w-[260px] md:h-[450px] md:w-[320px] flex-shrink-0 overflow-hidden rounded-3xl bg-white ring-1 ring-gold/20 shadow-xl">
    {/* top shimmer */}
    <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-gradient-to-b from-gold/10 via-transparent to-transparent" />

    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      draggable={false}
    />

    {/* bottom info */}
    <div className="absolute inset-x-0 bottom-0 z-20 flex h-28 flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
      <Badge variant="default" className="mb-1 self-start text-[10px]">
        {item.category}
      </Badge>
      <h3 className="font-display text-sm leading-tight text-white">{item.title}</h3>
      <p className="mt-0.5 font-body text-xs text-gold-light">{item.priceRange}</p>
    </div>

    {/* hover CTA */}
    <div className="absolute inset-0 z-30 flex items-center justify-center rounded-3xl bg-maroon/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <a
        href={getWhatsAppLink(item.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-gold-light"
      >
        Order Now
      </a>
    </div>
  </div>
);

// ─── Desktop: horizontal scroll via scroll-driven framer motion ────
const DesktopCarousel = ({ items }: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Each card ~336px (320 + 16 gap). Total track width minus one viewport.
  // -95% works for 7 cards; scale to item count.
  const endX = `-${Math.max(60, (items.length - 2) * 9)}%`;
  const x = useTransform(scrollYProgress, [0, 1], ['1%', endX]);

  return (
    <section ref={targetRef} className="relative hidden h-[300vh] md:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-ivory">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-3xl" />
        </div>

        {/* heading */}
        <div className="absolute left-0 right-0 top-10 z-20 px-4 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-gold">
            Curated for You
          </p>
          <h2 className="font-display text-4xl text-charcoal lg:text-5xl">
            Our <span className="gold-shimmer">Collection</span>
          </h2>
          <div className="ornamental-divider mx-auto mt-4 max-w-xs">
            <span className="text-lg text-gold">✦</span>
          </div>
        </div>

        {/* scrolling track */}
        <motion.div style={{ x }} className="flex gap-4 px-16">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </motion.div>

        {/* scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-1 text-gold/50">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
            <span className="font-body text-[10px] uppercase tracking-widest">Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Mobile: vertical snap scroll ─────────────────────────────────
const MobileCarousel = ({ items }: Props) => (
  <section className="block md:hidden bg-ivory py-16 px-4">
    {/* heading */}
    <div className="mb-10 text-center">
      <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-gold">
        Curated for You
      </p>
      <h2 className="font-display text-3xl text-charcoal">
        Our <span className="gold-shimmer">Collection</span>
      </h2>
      <div className="ornamental-divider mx-auto mt-4 max-w-xs">
        <span className="text-lg text-gold">✦</span>
      </div>
    </div>

    {/* vertical grid — 2 columns on small screens */}
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          {/* Smaller card variant for mobile grid */}
          <div className="group relative h-[240px] w-full overflow-hidden rounded-2xl bg-white ring-1 ring-gold/20 shadow-md">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-b from-gold/10 via-transparent to-transparent" />
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 h-24">
              <Badge variant="default" className="mb-1 self-start text-[9px]">
                {item.category}
              </Badge>
              <h3 className="font-display text-xs leading-tight text-white">{item.title}</h3>
              <p className="mt-0.5 font-body text-[10px] text-gold-light">{item.priceRange}</p>
            </div>
            {/* tap CTA on mobile */}
            <a
              href={getWhatsAppLink(item.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-30 flex items-center justify-center rounded-2xl bg-maroon/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
            >
              <span className="rounded-full bg-gold px-4 py-2 font-body text-xs font-semibold text-white">
                Order Now
              </span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── Main export ───────────────────────────────────────────────────
export function HorizontalScrollCarousel({ items }: Props) {
  return (
    <>
      <DesktopCarousel items={items} />
      <MobileCarousel items={items} />
    </>
  );
}