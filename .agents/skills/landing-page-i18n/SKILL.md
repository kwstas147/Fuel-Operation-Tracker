---
name: landing-page-i18n
description: Internationalization (i18n) best practices for static websites and landing pages, covering dynamic lang attributes, hreflang tags, bidirectional/RTL support, and clean key-value translation structures.
---

# Landing Page i18n Skill

Αυτό το skill καθοδηγεί την υλοποίηση επαγγελματικής διεθνοποίησης (Internationalization) σε static websites, διασφαλίζοντας πλήρη συγχρονισμό μεταξύ DOM, SEO tags, URL state και accessibility.

## 1. Βασικοί Κανόνες Υλοποίησης

1. **Δυναμικό Attribute `<html lang="...">`**:
   - Κατά την εναλλαγή γλώσσας μέσω JavaScript, το root στοιχείο `<html>` ΠΡΕΠΕΙ να ενημερώνεται άμεσα:
     ```javascript
     document.documentElement.lang = selectedLocale; // π.χ. 'el', 'en', 'de'
     ```
2. **Κατεύθυνση Κειμένου (RTL / LTR)**:
   - Για γλώσσες όπως Αραβικά ή Εβραϊκά, ρύθμιση `document.documentElement.dir = isRtl ? 'rtl' : 'ltr'`.
3. **SEO & Hreflang Tags**:
   - Στο `<head>`, δήλωση των διαθέσιμων εναλλακτικών γλωσσών:
     ```html
     <link rel="alternate" hreflang="el" href="https://example.com/?lang=el" />
     <link rel="alternate" hreflang="en" href="https://example.com/?lang=en" />
     <link rel="alternate" hreflang="de" href="https://example.com/?lang=de" />
     <link rel="alternate" hreflang="x-default" href="https://example.com/" />
     ```
4. **Local Storage & Auto-Detection**:
   - Προτεραιότητα γλώσσας:
     1. URL Parameter (π.χ. `?lang=el`)
     2. Αποθηκευμένη επιλογή χρήστη (`localStorage.getItem('preferred_lang')`)
     3. Γλώσσα περιηγητή (`navigator.language`)
     4. Default fallback: `en`

---

## 2. Δομή Δεδομένων Μεταφράσεων

- Κάθε μετάφραση οργανώνεται με ομοιόμορφα κλειδιά σε όλες τις υποστηριζόμενες γλώσσες (el, en, de, fr, es, it, ru, zh, hi).
- Απαγορεύεται η έλλειψη κλειδιών σε μεμονωμένες γλώσσες (fallback σε `en` αν λείπει).
- Διαχωρισμός σε namespace blocks: `nav`, `hero`, `features`, `pricing`, `testimonials`, `footer`.
- Στο DOM, χρήση data attributes:
  ```html
  <span data-i18n="hero.title">Διαχειριστείτε τα Καύσιμα σας</span>
  ```
  Και renderer:
  ```javascript
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = resolveTranslation(key, currentLocale);
    if (text) el.textContent = text;
  });
  ```

---

## 3. Checklist Ελέγχου i18n
- [ ] Η επιλογή γλώσσας αλλάζει άμεσα το `<html lang="...">`.
- [ ] Δεν υπάρχουν σπασμένα κλειδιά `undefined` στην οθόνη.
- [ ] Ο μεταφρασμένος πίνακας τιμολογίων/χαρακτηριστικών είναι πλήρης σε όλες τις γλώσσες.
- [ ] Η επιλογή αποθηκεύεται στο `localStorage`.
- [ ] Το `<title>` και το `<meta name="description">` ανανεώνονται δυναμικά με την αλλαγή γλώσσας.
