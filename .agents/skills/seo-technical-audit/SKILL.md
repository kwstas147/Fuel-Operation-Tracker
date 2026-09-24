---
name: seo-technical-audit
description: Comprehensive technical SEO audit and implementation guide, including OpenGraph, Twitter Cards, JSON-LD Schema structured data, canonical URLs, sitemap.xml, robots.txt, and hreflang tags.
---

# Technical SEO Audit Skill

Αυτό το skill καθοδηγεί τον ολοκληρωμένο τεχνικό έλεγχο και τη βελτιστοποίηση SEO για static landing pages και web apps, με στόχο κορυφαία κατάταξη στις μηχανές αναζήτησης και άψογη εμφάνιση στα Social Media previews.

## 1. Βασική Αρχιτεκτονική Head & Meta Tags

### Α. Core Meta & Canonical
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Fuel Operation Tracker | Έξυπνη Διαχείριση & Παρακολούθηση Καυσίμων</title>
<meta name="description" content="Η απόλυτη εφαρμογή διαχείρισης καυσίμων και εξόδων στόλου. Παρακολουθήστε καταναλώσεις, κόστη και συντήρηση οχημάτων με ευκολία." />
<link rel="canonical" href="https://fueloperationtracker.com/" />
<meta name="robots" content="index, follow" />
```

### Β. Open Graph (Facebook, LinkedIn, Discord, Slack)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://fueloperationtracker.com/" />
<meta property="og:title" content="Fuel Operation Tracker | Έξυπνη Διαχείριση Καυσίμων" />
<meta property="og:description" content="Παρακολουθήστε καταναλώσεις, κόστη και συντήρηση οχημάτων σε πραγματικό χρόνο." />
<meta property="og:image" content="https://fueloperationtracker.com/assets/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Γ. Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Fuel Operation Tracker | Έξυπνη Διαχείριση Καυσίμων" />
<meta name="twitter:description" content="Παρακολουθήστε καταναλώσεις, κόστη και συντήρηση οχημάτων σε πραγματικό χρόνο." />
<meta name="twitter:image" content="https://fueloperationtracker.com/assets/og-image.jpg" />
```

---

## 2. Structured Data (JSON-LD)

Υποχρεωτική προσθήκη `SoftwareApplication` ή `MobileApplication` schema στο `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Fuel Operation Tracker",
  "operatingSystem": "Android, iOS, Web",
  "applicationCategory": "BusinessApplication, Productivity",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "0",
    "highPrice": "49.99"
  },
  "description": "Smart fuel tracking and fleet management solution."
}
</script>
```

---

## 3. Crawlability Files (`robots.txt` & `sitemap.xml`)

### robots.txt
```txt
User-agent: *
Allow: /
Sitemap: https://fueloperationtracker.com/sitemap.xml
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://fueloperationtracker.com/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://fueloperationtracker.com/privacy.html</loc>
    <lastmod>2026-09-24</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://fueloperationtracker.com/terms.html</loc>
    <lastmod>2026-09-24</lastmod>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 4. Checklist Τεχνικού SEO
- [ ] Title tag 50-60 χαρακτήρες, μοναδικό.
- [ ] Meta description 150-160 χαρακτήρες με clear call-to-action.
- [ ] Open Graph & Twitter Card tags παρόντα με έγκυρη εικόνα (1200x630px).
- [ ] Έγκυρο JSON-LD schema (επικυρωμένο με Schema Validator / Rich Results Test).
- [ ] Αρχεία `robots.txt` και `sitemap.xml` διαθέσιμα στο root.
- [ ] Canonical tag παρόν σε όλες τις σελίδες (`index.html`, `privacy.html`, `terms.html`).
