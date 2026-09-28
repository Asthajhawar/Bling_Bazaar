import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Features } from '@/components/sections/Features';
import { Gallery } from '@/components/sections/Gallery';
import { HowToOrder } from '@/components/sections/HowToOrder';
import { Instagram } from '@/components/sections/Instagram';
import { Footer } from '@/components/sections/Footer';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Features />
      <Gallery />
      <HowToOrder />
      <Instagram />
      <Footer />
    </>
  );
}
