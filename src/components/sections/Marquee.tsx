export function Marquee() {
  const items = [
    '✦ Jhumkas',
    '✦ Necklaces',
    '✦ Studs',
    '✦ Earrings',
    '✦ Bangles',
    '✦ Ships Across India',
  ];

  const content = items.join('   ');

  return (
    <div className="bg-maroon overflow-hidden py-3 md:py-4 border-y border-gold/20">
      <div className="animate-marquee whitespace-nowrap flex">
        {/* Duplicate content for seamless loop */}
        {[0, 1].map((idx) => (
          <span
            key={idx}
            className="font-display text-gold text-sm md:text-base tracking-widest mx-0"
            style={{ paddingRight: '3rem' }}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
