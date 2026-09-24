---
name: image-optimizer
description: Optimize images for web performance, including format conversion (WebP/AVIF), responsive srcset generation, dimension budgeting, and LQIP placeholders.
---

# Image Optimizer Skill

Αυτό το skill παρέχει οδηγίες και αυτοματισμούς για τη βελτιστοποίηση εικόνων σε static sites και web apps, με στόχο μηδενικό CLS, άμεσο LCP και ελαχιστοποίηση του bandwidth.

## 1. Στρατηγική Βελτιστοποίησης

1. **Modern Formats**:
   - Προτεραιότητα: AVIF (κορυφαία συμπίεση) > WebP (ευρεία υποστήριξη 97%+) > Fallback PNG/JPG.
   - Μέγεθος στόχος για Hero/Promo εικόνες: `< 50 KB`.
   - Μέγεθος στόχος για Thumbnails/Icons: `< 15 KB`.
2. **Responsive Images (`<picture>` & `srcset`)**:
   - Παραγωγή μεγεθών: 1x (mobile), 2x (retina), 1200px (desktop).
   - Χρήση του tag `<picture>` με πολλαπλά `<source>`:
     ```html
     <picture>
       <source type="image/avif" srcset="assets/hero-400.avif 400w, assets/hero-800.avif 800w" sizes="(max-width: 768px) 100vw, 50vw">
       <source type="image/webp" srcset="assets/hero-400.webp 400w, assets/hero-800.webp 800w" sizes="(max-width: 768px) 100vw, 50vw">
       <img src="assets/hero-800.png" alt="Fuel Operation Tracker App Preview" width="800" height="600" loading="eager" fetchpriority="high">
     </picture>
     ```
3. **Layout Shift Prevention**:
   - Πάντα ορισμός explicit attributes `width` και `height` στο `<img>`.
   - CSS: `aspect-ratio: auto 800 / 600; max-width: 100%; height: auto;`.
4. **Loading Strategy**:
   - **Hero Image (Above the fold)**: `loading="eager"`, `fetchpriority="high"`, `<link rel="preload">`.
   - **Below the fold**: `loading="lazy"`, `decoding="async"`.

---

## 2. Εργαλεία & Εντολές CLI

### Μετατροπή μέσω sharp / squoosh / ffmpeg / powershell
```powershell
# Μετατροπή με ffmpeg ή sips ή sharp-cli
# Παράδειγμα μετατροπής fuel.png σε webp με ποιότητα 80%:
npx -y sharp-cli -i assets/fuel.png -o assets/fuel.webp -f webp -q 82
# Εναλλακτικά με imagemagick / cwebp:
cwebp -q 80 assets/fuel.png -o assets/fuel.webp
```

---

## 3. Image Budget Checklist
- [ ] Δεν υπάρχει εικόνα άνω των 100KB στη σελίδα.
- [ ] Όλες οι Hero εικόνες φορτώνουν σε < 500ms σε 4G σύνδεση.
- [ ] Όλα τα `<img>` έχουν καθορισμένα `width` και `height`.
- [ ] Χρήση SVG για διανυσματικά γραφικά και λογότυπα όπου είναι εφικτό.
