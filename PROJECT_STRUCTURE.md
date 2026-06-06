# Project Structure & File Usage

This document provides a map of the repository and explains the purpose of each file in the **Shringaar** project.

## 📁 Repository Map

```text
/
├── .github/             # GitHub workflow configs
├── node_modules/        # Installed dependencies
├── public/              # Static assets (favicons, etc.)
├── src/                 # Source code
│   ├── components/      # UI Components
│   │   ├── layout/      # General layout elements (Header, etc.)
│   │   ├── sections/    # Individual page sections
│   │   └── ui/          # Low-level reusable UI components
│   ├── config/          # Centralized business settings
│   ├── App.tsx          # Main assembly of sections
│   ├── index.css        # Tailwind v4 globals & custom animations
│   ├── main.tsx         # React entry point
│   └── vite-env.d.ts    # TS environment definitions
├── index.html           # Root HTML template (Headings & SEO)
├── package.json         # Scripts and dependencies
├── tailwind.config.js   # Tailwind legacy config (if needed)
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite + Tailwind v4 plugin config
```

## 📄 File-by-File Usage

### ⚙️ Configuration
- **`src/config/business.ts`**: The single source of truth for business details.
  - Contains `BUSINESS` object (name, phone, whatsapp number, instagram).
  - Provides helper functions `getWhatsAppLink()` and `getInstagramLink()`.

### 🏗️ Layout & Assembly
- **`src/App.tsx`**: The main page wrapper. It imports every section component and stacks them. It also hosts the fixed/floating WhatsApp pulsed button.
- **`src/components/layout/Header.tsx`**: A sticky navigation bar that appears only after the user scrolls past the Hero section.

### 🖼️ Page Sections (`src/components/sections/`)
- **`Hero.tsx`**: Full-viewport landing with gold shimmer text, animated floating gold particles, and primary CTA buttons.
- **`Marquee.tsx`**: CSS-animated infinite ticker for categories (Jhumkas, Bangles, etc.).
- **`Features.tsx`**: Grid of USP cards (COD, Shipping, etc.).
- **`Gallery.tsx`**: Wrapper for the main product showcase.
- **`HowToOrder.tsx`**: 3-step visualization of the screenshot-and-whatsapp workflow.
- **`Instagram.tsx`**: Social proof grid with custom SVG branding.
- **`Footer.tsx`**: Comprehensive bottom section with quick links and contact info.

### 🧩 UI Components (`src/components/ui/`)
- **`portfolio-and-image-gallery.tsx`**: Houses the `RadialScrollGallery`. This is the most complex component, using **GSAP ScrollTrigger** to rotate cards in an arc as the user scrolls.
- **`badge.tsx`**: Small reusable pill for product categories (e.g., "Earrings").

### 🎨 Styling
- **`src/index.css`**: Defines the Tailwind v4 theme, CSS variables for colors (Gold, Maroon, Ivory), and custom keyframe animations (`gold-shimmer`, `pulse-ring`, `marquee`).
