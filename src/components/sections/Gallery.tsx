import { HorizontalScrollCarousel, type GalleryItem } from '../ui/portfolio-and-image-gallery';

import BabyPinkSwan from '../../assets/products/BabyPink Swan.png';
import BlackSwan from '../../assets/products/Black Swan.png';
import GreenSwan from '../../assets/products/Green Swan.png';
import MoonBell from '../../assets/products/Moon Bell.png';
import MulticoulorLeaflet from '../../assets/products/Multicoulor Leaflet.png';
import PinkSwan from '../../assets/products/Pink Swan.png';
import RedSwan from '../../assets/products/Red Swan.png';
import SwanBell from '../../assets/products/Swan Bell.png';
import TealSwan from '../../assets/products/Teal Swan.png';
import YellowSwan from '../../assets/products/Yellow Swan.png';
import RingBell from '../../assets/products/Ring Bell.png'; 
import RedHairHook from '../../assets/products/Red Hair Hook Jhumka.png';
import YellowHairHook from '../../assets/products/Yellow Hair Hook Jhumka.png';
import BlackHairHook from '../../assets/products/Black Hair Hook Jhumka.png';
import BlueHairHook from '../../assets/products/Blue Hair Hook Jhumka.png';
import GreenHairHook from '../../assets/products/Green Hair Hook Jhumka.png';
import BrownHairHook from '../../assets/products/Brown Hair Hook Jhumka.png';
import LightPinkHairHook from '../../assets/products/Light Pink Hair Hook Jhumka.png';
import PinkHairHook from '../../assets/products/Pink Hair Hook Jhumka.png';
import DarkPinkSet from '../../assets/products/Dark Pink Set.png';
import LightPinkSet from '../../assets/products/Light Pink Set.png';
import RedSet from '../../assets/products/Red Set.png';
import GreenSet from '../../assets/products/Green Set.png';
import TealSet from '../../assets/products/Teal Set.png';


// TODO: Replace all Unsplash URLs with actual product photos
const products: GalleryItem[] = [
  {
    id: 'baby-pink-swan',
    image: BabyPinkSwan, // TODO: Replace with actual product photo
    title: 'Baby Pink Swan',
    category: 'Earrings',
    priceRange: '₹49',
  },
  {
    id: 'black-swan',
    image: BlackSwan, // TODO: Replace with actual product photo
    title: 'Black Swan',
    category: 'Earrings', 
    priceRange: '₹49',
  },
  {
    id: 'green-swan',
    image: GreenSwan, // TODO: Replace with actual product photo
    title: 'Green Swan',
    category: 'Earrings',
    priceRange: '₹49',
  },
  {
    id: 'moon-bell',
    image: MoonBell, // TODO: Replace with actual product photo
    title: 'Moon Bell',
    category: 'Earrings',
    priceRange: '₹149',
  },
  {
    id: 'multicolor-leaflet',
    image: MulticoulorLeaflet, // TODO: Replace with actual product photo
    title: 'Multicoulor Leaflet',
    category: 'Earrings',
    priceRange: '₹55',
  },
  {
    id: 'pink-swan',
    image: PinkSwan, // TODO: Replace with actual product photo
    title: 'Pink Swan',
    category: 'Earrings',
    priceRange: '₹49',
  },
  {
    id: 'red-swan',
    image: RedSwan, // TODO: Replace with actual product photo
    title: 'Red Swan',
    category: 'Earrings',
    priceRange: '₹49',
  },
  {
    id: 'swan-bell',
    image: SwanBell, // TODO: Replace with actual product photo
    title: 'Swan Bell',
    category: 'Earrings',
    priceRange: '₹39',
  },
  {
    id: 'teal-swan',
    image: TealSwan, // TODO: Replace with actual product photo
    title: 'Teal Swan',
    category: 'Earrings',
    priceRange: '₹49',
  },
  {
    id: 'yellow-swan',
    image: YellowSwan, // TODO: Replace with actual product photo
    title: 'Yellow Swan',
    category: 'Earrings',
    priceRange: '₹49',
  },
  {
    id: 'ring-bell',
    image: RingBell,
    title: 'Ring Bell',
    category: 'Earrings',
    priceRange: '₹99',
  },
  {
    id: 'red-hair-hook',
    image: RedHairHook,
    title: 'Red Hair Hook Jhumka',
    category: 'Earring Studs Accessories',
    priceRange: '₹79',
  },
  {
    id: 'yellow-hair-hook',
    image: YellowHairHook,
    title: 'Yellow Hair Hook Jhumka',
    category: 'Earring Studs Accessories',
    priceRange: '₹79',
  },
  {
    id: 'black-hair-hook',
    image: BlackHairHook,
    title: 'Black Hair Hook Jhumka',
    category: 'Earring Studs Accessories',
    priceRange: '₹79',
  },
  {
    id: 'blue-hair-hook',
    image: BlueHairHook,
    title: 'Blue Hair Hook Jhumka',
    category: 'Earring Studs Accessories',
    priceRange: '₹79',
  },
  {
    id: 'green-hair-hook',
    image: GreenHairHook,
    title: 'Green Hair Hook Jhumka',
    category: 'Earring Studs Accessories',
    priceRange: '₹79',
  },
  {
    id: 'brown-hair-hook',
    image: BrownHairHook,
    title: 'Brown Hair Hook Jhumka',
    category: 'Earring Studs Accessories',
    priceRange: '₹79',
  },
  {
    id: 'light-pink-hair-hook',
    image: LightPinkHairHook,
    title: 'Light Pink Hair Hook Jhumka',
    category: 'Earring Studs Accessories',
    priceRange: '₹79',
  },
  {
    id: 'pink-hair-hook',
    image: PinkHairHook,
    title: 'Pink Hair Hook Jhumka',
    category: 'Set',
    priceRange: '₹79',
  },
  {
    id: 'light-pink-set',
    image: LightPinkSet,
    title: 'Light Pink Set',
    category: 'Set',
    priceRange: '₹59',
  },
  {
    id: 'dark-pink-set',
    image: DarkPinkSet,
    title: 'Dark Pink Set',
    category: 'Set',
    priceRange: '₹59',
  },
  {
    id: 'red-set',
    image: RedSet,
    title: 'Red Set',
    category: 'Set',
    priceRange: '₹59',
  },
  {
    id: 'green-set',
    image: GreenSet,
    title: 'Green Set',
    category: 'Set',
    priceRange: '₹59',
  },
  {
    id: 'teal-set',
    image: TealSet,
    title: 'Teal Set',
    category: 'Set',
    priceRange: '₹59',
  },
  
];

export function Gallery() {
  return (
    <section id="gallery">
      <HorizontalScrollCarousel items={products} />
    </section>
  );
}
