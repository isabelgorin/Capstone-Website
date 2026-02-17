# Isabel Gorin Portfolio Website
## Complete Design & Implementation Guide

---

## 🎯 Project Overview

A single-page scrolling portfolio website that tells a visual story from day to night, showcasing Isabel's Senior Capstone project on AI sustainability alongside her extracurricular achievements in leadership and the arts.

**Dual Purpose:**
1. Senior Capstone project presentation
2. Long-term portfolio for college applications and beyond

---

## 🏗️ Site Architecture

```
ENTRY SCREEN (Arizona Sunset)
    │
    └── Click logo to enter
           │
           ▼
┌─────────────────────────────────────────────────────────────┐
│                    MAIN PORTFOLIO                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 1: About Me                                        │
│  ├── Profile photo placeholder                              │
│  ├── Name & school info                                     │
│  ├── Bio text (3 paragraphs)                               │
│  └── Quick links (Arts, STEM, Global Citizenship)          │
│                                                             │
│  ─────────── Scroll Transition ───────────                 │
│                                                             │
│  SECTION 2: Senior Capstone                                 │
│  ├── Policy Brief Card                                      │
│  │   ├── Title & description                               │
│  │   ├── Key topics (Water, Energy, Policy, Nuclear)       │
│  │   └── View PDF button                                   │
│  ├── Creative Companion Card (placeholder)                 │
│  └── Abstract quote preview                                │
│                                                             │
│  ─────────── Scroll Transition ───────────                 │
│                                                             │
│  SECTION 3: Portfolio                                       │
│  ├── Leadership & Civic Engagement                         │
│  │   ├── Model UN                                          │
│  │   ├── HeartBeats Director                               │
│  │   ├── ASA Ambassador                                    │
│  │   ├── RISE                                              │
│  │   └── STEM Society                                      │
│  ├── Arts Portfolio                                        │
│  │   ├── Global Science Opera (Featured)                   │
│  │   ├── Chamber Choir                                     │
│  │   └── Visual Arts & Music                               │
│  └── Footer                                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Visual Design Direction

### Section 1: Entry & About Me — Arizona Sunset

**Theme:** Warm, welcoming desert sunset with saguaro silhouettes

**Color Palette:**
```css
--sunset-orange: #ff6b35;
--sunset-gold: #f7931e;
--sunset-peach: #ffb347;
--sunset-coral: #ff8c69;
--sunset-magenta: #d4577d;
--sunset-purple: #9b4d96;

/* Gradient */
background: linear-gradient(to bottom, 
    #ff6b35 0%, 
    #f7931e 20%, 
    #ffb347 40%, 
    #ff8c69 60%, 
    #d4577d 80%, 
    #9b4d96 100%
);
```

**Typography:**
- Headings: Playfair Display (elegant serif)
- Body: Crimson Text (readable serif)

**Visual Elements:**
- Animated sun with glow effect
- Floating clouds with drift animation
- Saguaro cactus silhouettes
- Pulsing entry logo with ring animations

---

### Section 2: Capstone Project — Frutiger Aero

**Theme:** Early 2000s optimistic futurism with rolling green hills and bright sky

**Color Palette:**
```css
--aero-sky-light: #87ceeb;
--aero-sky-mid: #b4e4ff;
--aero-sky-soft: #e0f4ff;
--aero-sky-white: #f0faff;
--aero-green-light: #86efac;
--aero-green-mid: #4ade80;
--aero-green-dark: #22c55e;
--aero-text-dark: #1e4d6b;
--aero-text-mid: #4a7c94;
--aero-accent: #4caf50;

/* Sky Gradient */
background: linear-gradient(to bottom, 
    #87ceeb 0%, 
    #b4e4ff 30%, 
    #e0f4ff 60%, 
    #f0faff 100%
);
```

**Visual Elements:**
- Rolling hills with SVG gradients
- Rising translucent bubbles
- Glassmorphic cards with subtle glow
- Clean, optimistic aesthetic

**Design Notes:**
- Avoid cluttered Y2K elements
- Keep it clean and readable
- Focus on bright, hopeful colors
- Subtle animations only

---

### Section 3: Portfolio — Space Night

**Theme:** Deep space with nebulae and twinkling stars

**Color Palette:**
```css
--space-dark-1: #1a1a3e;
--space-dark-2: #0d0d24;
--space-dark-3: #050510;
--space-purple: #8b5cf6;
--space-pink: #ec4899;
--star-white: #ffffff;

/* Space Gradient */
background: linear-gradient(to bottom, 
    #1a1a3e 0%, 
    #0d0d24 30%, 
    #050510 100%
);
```

**Visual Elements:**
- Multiple star layers (random twinkling)
- Purple/pink nebula with blur
- Shooting star animation
- Glassmorphic cards with colored borders
- Featured opera section with special glow

---

## 📐 Layout Specifications

### Responsive Breakpoints
```css
/* Desktop */
@media (min-width: 1024px) {
    .about-content { flex-direction: row; gap: 60px; }
    .capstone-grid { grid-template-columns: repeat(2, 1fr); }
    .card-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Tablet */
@media (max-width: 1023px) and (min-width: 769px) {
    .card-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile */
@media (max-width: 768px) {
    .about-content { flex-direction: column; }
    .card-grid { grid-template-columns: 1fr; }
    font-size adjustments for headings
}
```

### Navigation
- Fixed right-side dots (desktop)
- Active section highlighting
- Smooth scroll snap
- Click to navigate

---

## ✨ Animation Specifications

### Entry Screen
```css
/* Sun glow pulse */
@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
}

/* Logo ring expansion */
@keyframes ringPulse {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.5); opacity: 0; }
}

/* Cloud drift */
@keyframes drift {
    0% { transform: translateX(0); }
    100% { transform: translateX(100vw); }
}
```

### Frutiger Aero Section
```css
/* Bubble rise */
@keyframes rise {
    0% { transform: translateY(100%) scale(0.5); opacity: 0; }
    50% { opacity: 0.8; }
    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
}
```

### Space Section
```css
/* Star twinkle */
@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

/* Shooting star */
@keyframes shoot {
    0% { transform: rotate(-45deg) translateX(0); opacity: 1; }
    100% { transform: rotate(-45deg) translateX(-200px) translateY(200px); opacity: 0; }
}
```

---

## 📝 Content Placeholders to Update

### Isabel Needs to Provide:

| Item | Section | Current Status |
|------|---------|----------------|
| Profile photo | About Me | Placeholder |
| Personal logo/image | Entry Screen | "IG" initials placeholder |
| Creative companion piece | Capstone | "Coming soon" placeholder |
| Global Science Opera link | Portfolio | Placeholder |
| Global Science Opera visuals | Portfolio | Placeholder |
| Chamber Choir photos | Portfolio | Placeholder |
| Visual arts gallery | Portfolio | Placeholder |
| Model UN position papers | Portfolio | Text placeholder |
| Model UN photos | Portfolio | None |
| Any bio text revisions | About Me | Filler content ready |

### How to Update Content:

**For profile photo:**
```html
<!-- Replace this: -->
<div class="profile-placeholder">...</div>

<!-- With this: -->
<img src="path/to/photo.jpg" alt="Isabel Gorin" style="width: 100%; height: 100%; object-fit: cover;">
```

**For custom entry logo:**
```html
<!-- Replace logo-inner content with custom image -->
<img src="path/to/logo.png" alt="Enter site" style="max-width: 80%; max-height: 80%;">
```

---

## 🚀 Implementation Roadmap

### Phase 1: Core Structure (Completed ✅)
- [x] Entry screen with sunset theme
- [x] Section 1: About Me layout
- [x] Section 2: Capstone cards
- [x] Section 3: Portfolio grid
- [x] Navigation dots
- [x] Scroll snap behavior
- [x] All CSS animations
- [x] Responsive design

### Phase 2: Content Integration
- [ ] Add Isabel's profile photo
- [ ] Update bio text if needed
- [ ] Embed policy brief PDF
- [ ] Add creative companion media

### Phase 3: Media Assets
- [ ] Add Global Science Opera content
- [ ] Add Chamber Choir photos
- [ ] Add Visual Arts gallery
- [ ] Add Model UN materials

### Phase 4: Polish & Deploy
- [ ] Test on multiple devices
- [ ] Optimize images for web
- [ ] Add custom entry logo
- [ ] Deploy to hosting platform

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload files
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repo-name`

### Option 2: Netlify (Free tier)
1. Drag & drop folder to Netlify
2. Get instant URL
3. Optional: Connect custom domain

### Option 3: Vercel (Free tier)
1. Connect GitHub repo
2. Automatic deployments on push

### Option 4: Custom Domain
1. Purchase domain (e.g., isabelgorin.com)
2. Point DNS to hosting provider
3. Enable HTTPS

---

## 📄 PDF Integration

The policy brief PDF should be embedded or linked. Options:

**Option A: Direct Link**
```html
<a href="Senior_Capstone_-_Isabel_Gorin.pdf" target="_blank" class="view-button">
    View Full Policy Brief →
</a>
```

**Option B: PDF Embed**
```html
<iframe src="Senior_Capstone_-_Isabel_Gorin.pdf" 
        width="100%" 
        height="600px">
</iframe>
```

**Option C: PDF.js Viewer**
For custom styling, use PDF.js library.

---

## 📱 Accessibility Checklist

- [x] Semantic HTML structure
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation support
- [x] Sufficient color contrast
- [x] Alt text placeholders for images
- [x] Focus states for buttons
- [ ] Screen reader testing (needs review)

---

## 🎨 Design Inspiration Sources

Referenced for visual direction:
- [mokanichokani.me](http://mokanichokani.me/) — Personal portfolio with strong visual identity
- [mackenziemorrow.com](http://mackenziemorrow.com/) — Clean, professional student portfolio

---

## 📁 File Structure

```
isabel-portfolio/
├── index.html          (main HTML file)
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── logo.png
│   │   └── gallery/
│   ├── documents/
│   │   ├── Senior_Capstone_-_Isabel_Gorin.pdf
│   │   └── creative-companion.mp4
│   └── fonts/ (optional if self-hosting)
└── README.md
```

---

## 💡 Tips for Isabel

1. **Photos:** Use high-quality images, at least 1200px wide for full-width elements
2. **PDF:** Keep file size reasonable (<5MB) for fast loading
3. **Updates:** The site is designed to grow with you—add new achievements easily
4. **Testing:** View on phone AND desktop before sharing
5. **Sharing:** Use the URL in college applications and LinkedIn

---

## 🎓 Senior Capstone Requirements Met

| Requirement | Status | Location |
|-------------|--------|----------|
| Policy brief embedded | ✅ | Section 2 |
| Creative companion space | ✅ | Section 2 |
| Bio/About Me | ✅ | Section 1 |
| Extracurricular showcase | ✅ | Section 3 |
| Professional presentation | ✅ | Throughout |
| Accessible content | ✅ | Throughout |

---

*Documentation created January 2026*
*Website designed for Isabel Gorin's Senior Capstone Project*
*Arizona School for the Arts — Class of 2026*
