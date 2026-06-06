# Architecture & Project Flow

This document explains how data and components interact within the **Jhumka Gali** website.

## 🌊 Application Flow

1. **Initialization (`main.tsx`)**:
   - React mounts to the `#root` div in `index.html`.
   - `index.css` initializes Tailwind v4 and imports Google Fonts.

2. **Assembly (`App.tsx`)**:
   - The building blocks are imported from `src/components/sections/`.
   - All business logic (links, numbers) flows from `src/config/business.ts`.

3. **User Interaction Flow**:
   - **Hero/Header**: User clicks "Order on WhatsApp" -> Opens generic WhatsApp chat.
   - **Gallery Hover**: User hovers a card -> "Order Now" button appears.
   - **Gallery Order**: User clicks "Order Now" -> Opens WhatsApp with a pre-filled message: *"Hi, I want to order [Product Name]"*.

## 🧬 Component Communication

- **Configuration Injection**: Almost every visual component imports the `BUSINESS` object. This ensures that if the owner changes their WhatsApp number in one file, the entire site updates instantly.
- **GSAP Integration**: The `RadialScrollGallery` uses a `useRef` to track the container. As `ScrollTrigger` detects vertical scrolling, it maps that distance to the `rotation` property of the circular "track", moving cards along a radial path.

## 🔄 Animation System

- **Pure CSS**: Used for the Marquee, Gold Shimmer text, and Pulse rings. This keeps the initial load lightweight and performant.
- **GSAP**: Used specifically for the Scroll-driven gallery. It handles the complex math of mapping scroll position to radial rotation and orientation of cards.
