import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { FlipReveal, FlipRevealItem } from '@/components/ui/flip-reveal';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';
import {
  slugToCategory,
  getProductsByCategory,
  getSubCategories,
  type GalleryItem,
} from '@/data/products';
import { getWhatsAppLink } from '@/config/business';

// ─── Product card for the category page ─────────────────────────────
function ProductCard({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-gold/20 shadow-lg hover:shadow-xl hover:shadow-gold/10 transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-t-2xl bg-gradient-to-b from-gold/8 via-transparent to-transparent" />
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />

        {/* Hover CTA overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-maroon/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
          <a
            href={getWhatsAppLink(item.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-gold-light shadow-lg shadow-gold/30"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <Badge variant="default" className="mb-1.5 text-[10px]">
          {item.subCategory}
        </Badge>
        <h3 className="font-display text-sm leading-tight text-charcoal">
          {item.title}
        </h3>
        <p className="mt-1 font-body text-sm font-semibold text-gold-dark">
          {item.priceRange}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Category page ──────────────────────────────────────────────────
export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [activeFilter, setActiveFilter] = useState('all');

  const categoryName = slug ? slugToCategory(slug) : undefined;
  const categoryItems = categoryName
    ? getProductsByCategory(categoryName)
    : [];
  const subCategories = categoryName ? getSubCategories(categoryName) : [];

  // Track whether the filter bar has more content to the right
  const filterScrollRef = useRef<HTMLDivElement>(null);
  const [hasMoreRight, setHasMoreRight] = useState(true);

  useEffect(() => {
    const el = filterScrollRef.current;
    if (!el) return;
    const check = () => {
      setHasMoreRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    check();
    el.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [subCategories]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Reset filter when category changes
  useEffect(() => {
    setActiveFilter('all');
  }, [slug]);

  if (!categoryName) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ivory">
        <div className="text-center">
          <h1 className="font-display text-3xl text-charcoal mb-4">
            Category Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-white hover:bg-gold-light transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero header */}
      <div className="relative overflow-hidden bg-maroon-dark pt-20 pb-12 sm:pt-24 sm:pb-16">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-gold/[0.06] blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-maroon-light/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          {/* Back link */}
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-gold/70 hover:text-gold transition-colors font-body text-sm"
          >
            <ArrowLeft size={16} />
            Back to Collection
          </Link>

          {/* Title */}
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-gold" size={24} />
            <p className="font-body text-sm uppercase tracking-[0.2em] text-gold">
              Browse Collection
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            <span className="gold-shimmer">{categoryName}</span>
          </h1>
          <p className="font-body text-gold/60 text-sm sm:text-base max-w-md">
            {categoryItems.length} exquisite{' '}
            {categoryItems.length === 1 ? 'piece' : 'pieces'} curated just for
            you
          </p>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 sm:py-12">
        {/* Subcategory filter tabs */}
        {subCategories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            {/* Scrollable filter bar — no visible scrollbar, fade-right hint */}
            <div className="relative -mx-4 sm:mx-0">
              {/* Hidden-scrollbar scroll track */}
              <div
                ref={filterScrollRef}
                className="overflow-x-auto px-4 sm:px-0 sm:flex sm:justify-center"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{'.filter-scroll::-webkit-scrollbar{display:none}'}</style>
                <ToggleGroup
                  type="single"
                  className="filter-scroll inline-flex flex-shrink-0 rounded-full border border-gold/20 bg-white/80 backdrop-blur-sm p-1.5 shadow-md shadow-gold/5"
                  value={activeFilter}
                  onValueChange={(val) => {
                    if (val) setActiveFilter(val);
                  }}
                >
                  <ToggleGroupItem value="all" className="px-4 sm:px-6 capitalize">
                    All
                  </ToggleGroupItem>
                  {subCategories.map((sub) => (
                    <ToggleGroupItem
                      key={sub}
                      value={sub}
                      className="px-4 sm:px-6 capitalize"
                    >
                      {sub}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              {/* Right-fade gradient — only shown on mobile when more tabs exist */}
              <div
                className={`pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-ivory to-transparent transition-opacity duration-300 sm:hidden ${
                  hasMoreRight ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </motion.div>
        )}

        {/* Products grid with flip animation */}
        <FlipReveal
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          keys={[activeFilter]}
          showClass="block"
          hideClass="hidden"
        >
          {categoryItems.map((item, i) => (
            <FlipRevealItem key={item.id} flipKey={item.subCategory}>
              <ProductCard item={item} index={i} />
            </FlipRevealItem>
          ))}
        </FlipReveal>

        {/* Empty state */}
        {categoryItems.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-charcoal/50 text-lg">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
