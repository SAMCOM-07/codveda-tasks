# Level 3 – Performance Optimization Report

**Project:** Omnishop (Next.js, TypeScript, Tailwind CSS, Firebase, Cloudinary)

### Quick Links
- 🔗 **Live Demo:** [https://omnishop-ng.vercel.app](https://omnishop-ng.vercel.app)
- 📦 **GitHub Repository:** [https://github.com/SAMCOM-07/omnishop.git](https://github.com/SAMCOM-07/omnishop.git)

---

## Objective

The goal of this task was to optimize the performance of the Omnishop web application, improving key metrics:

- **First Contentful Paint (FCP)** – Time to first visible content
- **Largest Contentful Paint (LCP)** – Time to render largest visible element  
- **Total Blocking Time (TBT)** – Total duration of blocking tasks
- **Cumulative Layout Shift (CLS)** – Visual stability score

### Testing Tools
- Google Lighthouse
- PageSpeed Insights

---

## Steps Taken

### 1. Image Optimization

**Approach:**
- Converted all large PNG images to AVIF format using Cloudinary Image Converter and online tools (resizepixel.com)
- Reduced image resolutions from 6005×4000 px to 1500×1000 px (mobile-friendly)
- Leveraged Next.js Image component for automatic optimization:
  - Set priority for hero images
  - Added responsive sizes configuration
  - Enabled automatic WebP/AVIF delivery

**Impact:**
- Significantly reduced image load size
- Improved FCP and LCP, especially on mobile devices

---

### 2. Dynamic Import of Heavy Components

**Approach:**
- Applied dynamic loading to components not needed on initial page load
- Targeted shop page and product details components

**Code Example:**
```typescript
import dynamic from "next/dynamic";

const ProductDetails = dynamic(() => import("../components/ProductDetails"), {
  ssr: false,
});
```

**Impact:**
- Reduced main-thread work
- Decreased JavaScript bundle size on initial load
- Improved Total Blocking Time (TBT)

---

### 3. Layout and Next.js Optimizations

**Approach:**
- Adjusted layouts to avoid render-blocking resources
- Ensured hero images were inline in critical rendering path
- Removed unused CSS and optimized Tailwind purge configuration
- Added preconnect directives to Cloudinary CDN

**Impact:**
- Reduced LCP and FCP delays
- Optimized critical rendering path

---

### 4. Accessibility Optimization

**Approach:**
- Ensured proper semantic HTML structure and ARIA labels
- Optimized color contrast ratios for WCAG AA compliance
- Added keyboard navigation support throughout the application
- Implemented proper heading hierarchy and alt text for images
- Added screen reader optimizations and focus management

**Impact:**
- Achieved 96/100 accessibility score on PageSpeed Insights
- Improved user experience for visitors with disabilities
- Enhanced overall code quality and semantic structure

---

## Performance Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Mobile Performance Score | 65 | 99 | +52% |
| Desktop Performance Score | 98 | 100 | +2% |
| FCP (Mobile) | 4.2s | 0.9s | -78% |
| LCP (Mobile) | 6.9s | 4.1s | -41% |
| Total Blocking Time | 30–100ms | 10–40ms | -67% |
| CLS | 0.07 | 0.071 | Stable |

---

## Tools and Technologies Used

| Tool | Purpose |
|------|---------|
| **Cloudinary** | Image format conversion and CDN optimization |
| **Next.js Image Component** | Automatic image optimization and responsive delivery |
| **Tailwind CSS** | Utility-first CSS with optimized purging |
| **Google Lighthouse** | Performance metrics and analysis |
| **PageSpeed Insights** | Real-world performance monitoring |

---

## Key Achievements

✓ **Mobile Performance:** 99/100 (up from 65/100)  
✓ **Desktop Performance:** 100/100 (up from 98/100)  
✓ **Accessibility (PageSpeed Insights):** 96/100  
✓ **Page Load Time:** Drastically reduced  
✓ **Best Practices & SEO:** 100/100  

---

## Conclusion

The systematic optimization efforts resulted in substantial performance improvements across all core metrics:

- **Image optimization** using modern AVIF format reduced file sizes significantly
- **Dynamic imports** minimized initial JavaScript bundle size
- **Layout adjustments** optimized the critical rendering path

**Result:** The Omnishop application now delivers excellent performance on both mobile and desktop, providing users with a fast, responsive, and seamless experience. The 99/100 mobile performance score represents industry-leading optimization.

---

*Report Prepared: March 17, 2026*
