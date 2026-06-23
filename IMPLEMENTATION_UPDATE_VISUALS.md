# Implementation Plan: Branded Pavel Vítek Page

Create a new, 3rd page under a new slug in the React application. This page will be the branded version of the home page for Pavel Vítek, using the **ELVEUL** identity and slate/sky-blue design system, but retaining the rich structure and sections of the original template.

---

## User Review Required

> [!IMPORTANT]
> Please confirm which of the following interpretations represents your desired goal for the 3rd page:
>
> 1. **Interpretation A (Rich Template Rebranded - Recommended)**: Create a new page (e.g., slug `/pavel-vitek` or `/brand`) that uses the rich, multi-section structure of `OldHomePage`/`HomePage` (Hero with Request Form, Services overview, Service packages, Why Choose Us, Special Offer banner, Testimonials, Blog posts, Footer), but fully translated to Czech and branded with the **ELVEUL** styling (slate backgrounds, sky-blue accents, Pavel Vítek's actual business information and billing details).
> 2. **Interpretation B (Main Page Duplicate/Refinement)**: Replicate the current `ElveulPage` (at `/`) onto a new slug (e.g., `/pavel-vitek`) and apply specific branding adjustments.

Please review the proposed checklist and let the AI dev agent know if you have a preferred route slug (e.g., `/pavel-vitek` or `/brand`).

---

## Open Questions

- **What should the new URL slug be?** (Suggested: `/pavel-vitek` or `/brand`)
- **For Interpretation A (Rebranded Rich Template)**:
  - Do you want to translate the pricing packages ($150 - $250) or hide them?
  - Do you want to keep the blog post insights section, and if so, should we translate the articles?
  - What email address and social links should be used in the footer?

---

## Proposed Changes

We will create a new screen component, duplicate and adapt the required sub-sections, adjust styling classes to match the ELVEUL brand colors, and add a route mapping in `src/index.tsx`.

### 1. Routing Component
#### [MODIFY] [index.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/Pavel%20V%C3%ADtek/Pavel-Vitek/src/index.tsx)
- Import the new page component `BrandedVitekPage`.
- Define a new Route under `/pavel-vitek` (or another chosen slug).

### 2. Page Screens
#### [NEW] [BrandedVitekPage.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/Pavel%20V%C3%ADtek/Pavel-Vitek/src/screens/BrandedVitekPage/BrandedVitekPage.tsx)
- Assemble the rebranded sections in order.
- Manage state for scrolled navigation and form submissions.

#### [NEW] `src/screens/BrandedVitekPage/sections/`
- Duplicate the sections from `src/screens/HomePage/sections/` or `src/screens/OldHomePage/sections/` and customize them:
  - `SiteNavigationSection`: Adapt branding (ELVEUL | Pavel Vítek), translate links, use real Czech phone/address.
  - `HeroCTASection`: Translate header copy, change theme colors from green/yellow to dark-slate/sky-blue, update form labels to Czech.
  - `CompanyIntroSection`: Translate content and use Czech headings.
  - `ValuePropositionSection`: Update text and benefit items to Czech.
  - `ServicesOverviewSection`: Localize service descriptions.
  - `LimitedOfferPromoSection`: Localize text and call to action.
  - `ClientTestimonialsSection`: Localize review content.
  - `PlumbingInsightsSection` (Optional/Confirmed): Localize blog article mock descriptions.
  - `SiteFooterSection`: Update with real Czech billing information (IČO: 44515693, Na Spálence 523/40, Ústí nad Labem), and update links.

---

## Progress Checklist

- [ ] **Phase 1: Clarification & Setup**
  - [ ] Receive user confirmation on the preferred interpretation and slug path.
  - [ ] Create the new page folder `src/screens/BrandedVitekPage` and `sections/` subfolder.
- [ ] **Phase 2: Component Creation & Styling Adaptation**
  - [ ] Copy original sections from `src/screens/OldHomePage/sections/` to `src/screens/BrandedVitekPage/sections/`.
  - [ ] Replace brand colors (green/yellow) with ELVEUL brand colors (slate-900, sky-600, sky-500).
  - [ ] Localize all section text to Czech (matching details from `ElveulPage` such as address, phone, IČO, and services).
- [ ] **Phase 3: Routing Setup**
  - [ ] Create `src/screens/BrandedVitekPage/index.ts` to export the new page.
  - [ ] Update `src/index.tsx` to include the route path for `/pavel-vitek` (or the chosen slug).
- [ ] **Phase 4: Manual Verification & Visual Polish**
  - [ ] Start/Verify the local dev server is running.
  - [ ] Navigate to the new slug using the browser subagent.
  - [ ] Perform a visual check of all components, buttons, and responsive layouts to ensure high-quality aesthetics.
  - [ ] Submit a walkthrough with visual proof of completion.

---

## Verification Plan

### Automated Tests
- Since there is no test framework configured in `package.json`, we will rely on TypeScript type-checking and Vite bundling checks:
  ```bash
  npm run build
  ```

### Manual Verification
- We will use the browser subagent to navigate to the new slug (e.g. `http://localhost:5173/pavel-vitek`), capture screenshots above/below the fold, and verify that the layout displays with the correct styling and language.
