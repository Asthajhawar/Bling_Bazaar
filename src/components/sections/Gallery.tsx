import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getCategoryMeta, type CategoryMeta } from '../../data/products';

// ─── Category card ─────────────────────────────────────────────────
function CategoryCard({
  category,
  index,
}: {
  category: CategoryMeta;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/category/${category.slug}`}
        className="group relative block h-[320px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-3xl bg-white ring-1 ring-gold/20 shadow-xl hover:shadow-2xl hover:shadow-gold/15 transition-all duration-500"
      >
        {/* Top shimmer */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-gradient-to-b from-gold/10 via-transparent to-transparent" />

        {/* Cover image */}
        <img
          src={category.coverImage}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          draggable={false}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-30 p-5 sm:p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-block rounded-full bg-gold/20 px-3 py-0.5 font-body text-[10px] font-medium text-gold-light uppercase tracking-wider">
              {category.count} {category.count === 1 ? 'piece' : 'pieces'}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-1 leading-tight">
            {category.name}
          </h3>
          <p className="font-body text-sm text-gold-light/80 mb-4">
            Starting from {category.priceRange}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 font-body text-sm font-semibold text-gold group-hover:text-gold-light transition-colors">
            <span>Explore Collection</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>

        {/* Hover glow */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-gold/30" />
      </Link>
    </motion.div>
  );
}

// ─── Gallery section (homepage) ────────────────────────────────────
export function Gallery() {
  const categories = getCategoryMeta();

  return (
    <section id="gallery" className="bg-ivory py-16 sm:py-24">
      {/* Heading */}
      <div className="mb-12 sm:mb-16 text-center px-4">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-gold">
          Curated for You
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal">
          Our <span className="gold-shimmer">Collection</span>
        </h2>
        <div className="ornamental-divider mx-auto mt-4 max-w-xs">
          <span className="text-lg text-gold">✦</span>
        </div>
        <p className="mt-4 max-w-md mx-auto font-body text-sm text-charcoal/60">
          Explore our handpicked categories of exquisite jewellery
        </p>
      </div>

      {/* Category grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
