# Development Guidelines

Following these guidelines ensures the **Jhumka Gali** website maintains its premium luxury feel and code quality.

## 🎨 Visual Standards

### Colors
- **Gold**: Use `var(--color-gold)` (#C9A84C). Avoid generic yellow.
- **Maroon**: Use `var(--color-maroon)` (#6B0F1A) for depth and tradition.
- **Ivory**: Use `var(--color-ivory)` (#FDF6EC) and `var(--color-cream)` (#FAF0DC) instead of flat white (#FFF).

### Typography
- **Headings**: Use `font-display` (Playfair Display). It should feel Serif and traditional.
- **Body**: Use `font-body` (DM Sans). Clean and readable.
- **Shimmer**: Use the `.gold-shimmer` class for brand-level headings.

## 💻 Coding Standards

### Tailwind v4
- Use `@theme` variables defined in `index.css`.
- Avoid arbitrary values (e.g., `bg-[#123456]`) if a theme variable exists.
- Prefer utility classes for layout, but use custom CSS for complex animations.

### Components
- **Responsive-First**: Always check `mobileRadius` and `baseRadius` in the `RadialScrollGallery`.
- **Accessibility**: Ensure images have `alt` tags and buttons have `aria-label` where text is missing.

### Assets
- **Product Images**: Maintain a 200x280 aspect ratio (or equivalent) for the radial gallery cards to ensure the rotation math looks balanced.
- **Icons**: Use `Lucide React`. If an icon is missing (like Instagram), use a clean inline SVG to match the stroke width (2px) of Lucide.

## 📱 Verification Checklist
Before deploying changes:
1. Ensure the sticky header doesn't jitter on scroll.
2. Check that the WhatsApp link pre-fills the correct product name.
3. Verify the gallery rotation on a real mobile viewport (375px width).
