# Project Structure & File Usage

This document provides a map of the repository and explains the purpose of each file in the **Bling Bazaar** project.

## 📁 Repository Map

```text
/
├── .github/             # GitHub workflow configs
├── node_modules/        # Installed dependencies
├── public/              # Static assets (favicons, etc.)
├── src/                 # Source code
│   ├── assets/          # Product images & corporate logos
│   ├── components/      # UI Components
│   │   ├── layout/      # General layout elements (Header, etc.)
│   │   ├── sections/    # Individual page sections
│   │   └── ui/          # Low-level reusable UI components
│   ├── config/          # Centralized business settings
│   ├── App.tsx          # Main assembly of sections
│   ├── index.css        # Tailwind v4 globals & custom animations
│   ├── main.tsx         # React entry point
│   └── vite-env.d.ts    # TS environment definitions
├── .env                 # Business configuration variables
├── index.html           # Root HTML template (Headings & SEO)
├── package.json         # Scripts and dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite + Tailwind v4 plugin config
```

## 📄 File-by-File Usage

### ⚙️ Configuration
- **`src/config/business.ts`**: The single source of truth for business details, now driven by environment variables.
  - Contains `BUSINESS` object (name, phone, whatsapp number, instagram).
  - Provides helper functions `getWhatsAppLink()` and `getInstagramLink()`.

### 🏗️ Layout & Assembly
- **`src/App.tsx`**: The main page wrapper. It imports every section component and stacks them.
- **`src/components/layout/Header.tsx`**: A sticky navigation bar that appears only after scrolling, now featuring the corporate logo.

### 🖼️ Page Sections (`src/components/sections/`)
- **`Hero.tsx`**: Full-viewport landing with gold shimmer text, animated particles, and primary CTA buttons.
- **`Marquee.tsx`**: CSS-animated infinite ticker for categories.
- **`Features.tsx`**: Grid of USP cards (COD, Shipping, etc.).
- **`Gallery.tsx`**: Wrapper for the main product showcase.
- **`HowToOrder.tsx`**: Step-by-step guide for ordering via WhatsApp.
- **`Instagram.tsx`**: Social proof grid with custom visual branding.
- **`Footer.tsx`**: Bottom section with quick links and contact info.

### 🧩 UI Components (`src/components/ui/`)
- **`portfolio-and-image-gallery.tsx`**: Houses the `HorizontalScrollCarousel`. This component uses **Framer Motion** for high-performance scroll-driven animations and parallax effects.
- **`badge.tsx`**: Small reusable pill for product categories.

### 🎨 Styling
- **`src/index.css`**: Defines the Tailwind v4 theme, CSS variables for colors (Gold, Charcoal, Ivory), and custom keyframe animations.
