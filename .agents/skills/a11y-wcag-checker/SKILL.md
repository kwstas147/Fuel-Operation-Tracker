---
name: a11y-wcag-checker
description: Accessibility and WCAG 2.1 AA auditing, remediation, focus management, screen reader optimization, and color contrast compliance.
---

# Accessibility & WCAG 2.1 AA Checker Skill

Αυτό το skill καθοδηγεί τον έλεγχο προσβασιμότητας (Accessibility / a11y) σύμφωνα με το πρότυπο WCAG 2.1 Level AA, διασφαλίζοντας ότι η ιστοσελίδα είναι πλήρως προσβάσιμη από χρήστες με αναπηρίες και screen readers.

## 1. Βασικοί Πυλώνες WCAG 2.1 AA

### Α. Αντίθεση Χρωμάτων (Color Contrast)
- **Κανονικό κείμενο (<18pt)**: Ελάχιστη αναλογία αντίθεσης **4.5:1** έναντι του background.
- **Μεγάλο κείμενο (>=18pt ή >=14pt bold)**: Ελάχιστη αναλογία αντίθεσης **3:1**.
- **UI Components & Icons**: Ελάχιστη αντίθεση **3:1** (π.χ. borders πεδίων εισαγωγής, εικονίδια κουμπιών).
- *Προσοχή στο Dark Mode*: Τα muted κείμενα (π.χ. `#71717a` σε `#09090b`) συχνά παραβιάζουν το 4.5:1. Χρήση φωτεινότερων αποχρώσεων όπως `#a1a1aa`.

### Β. Πλοήγηση μέσω Πληκτρολογίου (Keyboard Navigation)
1. **Skip to Main Content Link**:
   - Πρώτο focusable στοιχείο στη σελίδα:
     ```html
     <a href="#main-content" class="skip-link">Μετάβαση στο περιεχόμενο</a>
     ```
2. **Focus Indicators (`:focus-visible`)**:
   - Απαγορεύεται το `outline: none;` χωρίς αντικατάσταση!
   - Καθολικό visual focus ring:
     ```css
     :focus-visible {
       outline: 2px solid var(--primary-color);
       outline-offset: 3px;
       border-radius: 4px;
     }
     ```
3. **Tab Order**:
   - Λογική σειρά ανάγνωσης χωρίς θετικά `tabindex` (μόνο `0` ή `-1`).

### Γ. Σημασιολογικό HTML & ARIA
- Χρήση `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<footer>`.
- Όλα τα διαδραστικά εικονίδια / κουμπιά χωρίς κείμενο πρέπει να φέρουν `aria-label`:
  ```html
  <button id="themeToggle" aria-label="Εναλλαγή θέματος εμφάνισης (Σκοτεινό/Φωτεινό)">
    <i data-lucide="moon" aria-hidden="true"></i>
  </button>
  ```
- Τα dropdowns και τα collapsible μενού πρέπει να έχουν `aria-expanded="false/true"` και `aria-controls="..."`.

---

## 2. Testing Checklist (Διαδικασία Ελέγχου)
- [ ] Πλοήγηση ολόκληρης της σελίδας ΜΟΝΟ με πλήκτρο `Tab` και `Shift+Tab`. Είναι όλα τα clickable στοιχεία προσβάσιμα;
- [ ] Εμφανίζεται καθαρό focus ring σε κάθε στοιχείο;
- [ ] Όλα τα `<img>` έχουν περιγραφικό `alt` ή `alt=""` αν είναι διακοσμητικά.
- [ ] Screen reader (NVDA, VoiceOver) διαβάζει σωστά τους τίτλους, κουμπιά και links.
- [ ] Καμία εξάρτηση αποκλειστικά από χρώμα για μετάδοση πληροφορίας (π.χ. error messages).
