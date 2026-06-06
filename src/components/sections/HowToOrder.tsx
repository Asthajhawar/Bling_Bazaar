import { Eye, Camera, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../config/business';

const steps = [
  {
    number: '1',
    icon: Eye,
    title: 'Browse Our Collection',
    description: 'Scroll through our curated collection above and find the jewellery you love.',
  },
  {
    number: '2',
    icon: Camera,
    title: 'Screenshot or Note It',
    description: 'Take a screenshot of the product or note down its name for easy ordering.',
  },
  {
    number: '3',
    icon: MessageCircle,
    title: 'WhatsApp Us',
    description: 'Send us the product details on WhatsApp and we\'ll confirm your order instantly!',
  },
];

export function HowToOrder() {
  return (
    <section id="how-to-order" className="section-padding bg-cream">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-2">
            Simple & Easy
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
            How to <span className="gold-shimmer">Order</span>
          </h2>
          <div className="ornamental-divider mt-4 mx-auto max-w-xs">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-gold/40 to-gold/10" />
              )}

              {/* Step number circle */}
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-5 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                <span className="font-display text-2xl text-white font-bold">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <step.icon size={24} className="mx-auto text-gold/60 mb-3" />

              {/* Text */}
              <h3 className="font-display text-xl text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-12">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-body font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
          >
            <MessageCircle size={22} />
            Order on WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
