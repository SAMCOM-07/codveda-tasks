# AnimaFlow - Advanced Multipage Animation

A sophisticated multipage animation application built with modern web technologies, featuring smooth transitions and stunning visual effects.

## 🎨 Features

- **Multipage Routing** with React Router v7
- **Advanced Animations** powered by Framer Motion
- **Smooth Page Transitions** with multiple animation directions (left, right, up, down)
- **Scroll Reveal Effects** for dynamic content animations
- **Responsive Design** optimized for all devices
- **Gradient Effects** and animated backgrounds
- **Interactive Components** with hover and tap animations
- **Mobile Menu** with smooth animations

## 🛠 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Framer Motion 12** - Advanced animation library
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Intersection Observer** - Scroll-based visibility detection

## 📁 Project Structure

```
src/
├── pages/              # Page components
│   ├── Home.tsx       # Landing page with hero section
│   ├── Products.tsx   # Product showcase with cards
│   └── About.tsx      # About page with features
├── components/        # Reusable components
│   ├── Navbar.tsx     # Navigation with routing
│   ├── Hero.tsx       # Original hero component
│   ├── Products.tsx   # Products section
│   ├── ProductCard.tsx
│   └── ScrollReveal.tsx
├── layouts/           # Layout components
│   └── PageTransition.tsx  # Page animation wrapper
├── App.tsx            # Main app with router
└── main.tsx          # Entry point
```

## 🚀 Getting Started

### Install Dependencies

```bash
pnpm install
```

### Development Server

```bash
pnpm run dev
```

The app will start at `http://localhost:5173`

### Build for Production

```bash
pnpm run build
```

### Preview Build

```bash
pnpm run preview
```

### Lint Code

```bash
pnpm run lint
```

## 📄 Pages

### Home (`/`)
- Hero section with animated gradient text
- Floating background animations
- Call-to-action buttons with hover effects
- Smooth entrance animations with stagger effect

### Products (`/products`)
- Grid of 6 animated product cards
- Icon animations with varying delays
- Hover effects with gradient overlays
- Scroll-based reveal animations

### About (`/about`)
- Split layout with text and visual sections
- Feature cards with hover animations
- Rotating background pattern
- CTA section with gradient background

## 🎭 Animation Features

### Page Transitions
- Directional animations (left, right, up, down)
- Smooth opacity and position transitions
- AnimatePresence for unmount animations

### Component Animations
- **Hover Effects**: Scale, color, and position changes
- **Tap Animations**: Button press feedback
- **Scroll Reveals**: Content appears on scroll
- **Stagger Effects**: Sequential child animations
- **Float Animations**: Continuous floating motion

### navbar Features
- Animated entrance from top
- Active link indicator with layout animation
- Mobile hamburger menu with slide animations
- Gradient brand text with hover scale

## ⚙️ Configuration

### ESLint
The project includes ESLint configuration for TypeScript and React best practices. Customize in `eslint.config.js`

### Tailwind CSS
Configure styles in your components using Tailwind classes. The configuration is in `tailwindcss.config.js`

### TypeScript
Strict type checking enabled. Check `tsconfig.json` for compilation options.

## 🎯 Key Components

### PageTransition
Wrapper component that provides directional page animations:
```tsx
<PageTransition direction="right">
  {/* Page content */}
</PageTransition>
```

### ScrollReveal
Triggers animations when elements enter viewport:
```tsx
<ScrollReveal>
  {/* Content revealed on scroll */}
</ScrollReveal>
```

## 📱 Browser Support

- Modern browsers with ES2020+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Add New Pages

1. Create a new file in `src/pages/`
2. Use `PageTransition` wrapper
3. Add route in `App.tsx`
4. Add navigation link in `Navbar.tsx`

### Modify Animations

Edit animation variants in component files. Each component exports animation configurations that can be easily customized.

## 📦 Dependencies

- `framer-motion` - Animation library
- `react-router-dom` - Routing solution
- `react-intersection-observer` - Scroll detection
- `tailwindcss` - CSS framework

## 📝 License

This project is part of the Codveda internship program.
