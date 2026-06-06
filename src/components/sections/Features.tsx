import { Gem, Truck, Package, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: '100% Imitation | Safe to Wear',
    description:
      'High-quality imitation jewellery crafted with care — no allergies, no worries. Perfect for everyday glam.',
  },
  {
  icon: Truck,
  title: 'Free Delivery Above ₹199*',
  description: 'Free shipping pan-India depends on location and variable minimum delivery value. Fast and reliable delivery to your doorstep.',
},
  {
    icon: Package,
    title: 'Ships Across India',
    description:
      'From Muzaffarpur to every corner of mainland India. Fast and secure delivery to your doorstep.',
  },
  {
    icon: Smartphone,
    title: 'Easy WhatsApp Ordering',
    description:
      'No complicated checkout. Just WhatsApp us, confirm your order, and we ship it!',
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-2">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Aapka <span className="gold-shimmer">Bharosa</span>, Humari Zimmedari
          </h2>
          <div className="ornamental-divider mt-4 mx-auto max-w-xs">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="gold-border rounded-2xl p-6 bg-ivory hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-maroon/8 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <feature.icon size={28} className="text-gold" />
              </div>
              <h3 className="font-display text-lg text-charcoal mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
