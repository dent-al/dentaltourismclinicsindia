# Dental Tourism Clinics India Frontend Documentation

## Overview
This document provides a comprehensive guide to the frontend codebase, including project structure, key features, theme design, cloud links, and best practices for contributors and maintainers.

---

## Table of Contents
1. Project Structure
2. Technologies Used
3. Key Features
4. Theme & Design System
5. Cloud Links & Integrations
6. Component Directory
7. Routing & Navigation
8. State Management
9. Internationalization (i18n)
10. Performance Optimization
11. SEO Best Practices
12. How to Contribute
13. Setup & Onboarding
14. Frontend Documentation

---

## 1. Project Structure
- `src/` — Main source code
  - `components/` — Reusable UI components (e.g., OffersStrip, Header, Footer)
  - `pages/` — Page-level components (e.g., Home, ClinicList, AdminDashboard)
  - `contexts/` — React Contexts for global state (e.g., ThemeContext, AuthContext)
  - `hooks/` — Custom React hooks
  - `services/` — API and utility services (e.g., analyticsService)
  - `styles/` — CSS and Tailwind files
  - `data/` — Static data and configuration
- `public/` — Static assets
- `README.md` — Project setup and universal instructions

## 2. Technologies Used
- React 18
- Tailwind CSS
- React Router
- Axios
- Context API
- Cloudinary (image uploads)
- MongoDB (via backend)

## 3. Key Features
- Dental clinic listings & search
- Dentist profiles & specializations
- Appointment booking system
- Virtual & video consultation
- Diagnostic lab integration
- Pharmacy brands
- Dental tourism packages
- Admin dashboards
- SEO & performance optimization

## 4. Theme & Design System
- Theme managed via `ThemeContext` (light/dark mode)
- Colors, fonts, and spacing defined in Tailwind config and context
- Responsive design for mobile & desktop
- OffersStrip and other components use theme-aware styles

## 5. Cloud Links & Integrations
- Cloudinary for image uploads
- MongoDB Atlas for database (via backend)
- AWS S3/EC2 for hosting (see deployment docs)
- API endpoints: `/api/*` for backend services

## 6. Component Directory
- `OffersStrip.jsx` — Latest offers banner
- `Header.js` / `Footer.jsx` — Site navigation
- `DisclaimerBanner.jsx` — Legal disclaimer
- `ConnectionTest.js` — Backend connectivity check
- `Interactive3DTeeth.js` — 3D teeth visualization (placeholder)
- See `src/components/` for full list

## 7. Routing & Navigation
- Uses React Router (`Routes`, `Route`)
- Lazy loading for performance
- Protected routes for admin features

## 8. State Management
- Context API for auth, theme, analytics, admin
- Local state via React hooks

## 9. Internationalization (i18n)
- Uses `i18n` for multi-language support
- See `src/i18n/` for configuration

## 10. Performance Optimization
- Lazy loading components
- Service worker (`sw.js`) for PWA features
- Image optimization via Cloudinary
- Code splitting

## 11. SEO Best Practices
- Meta tags via `SEOMeta` component
- Semantic HTML
- Robots.txt and sitemap

## 12. How to Contribute
- Fork the repo, create a branch, submit a PR
- Follow coding guidelines in `.github/copilot-instructions.md`
- Use semantic commits
- Write clear documentation for new features

## 13. Setup & Onboarding
- Clone repo, run `npm install`, then `npm start`
- See `README.md` for universal setup
- All dependencies in `package.json`
- No OS-specific code; works on Windows, Mac, Linux

## 14. Frontend Documentation

This documentation covers all major pages and components in the Dental Tourism Clinics India frontend (React).

---

### Pages

#### Home.js
- **Purpose:** Main landing page. Highlights dental tourism, featured clinics, search, and promotional offers.
- **Features:** Hero section, search bar, featured clinics, testimonials, call-to-action buttons.
- **Styling:** Responsive, Tailwind CSS, modern layout.

#### ClinicList.js
- **Purpose:** Displays a searchable/filterable list of dental clinics.
- **Features:** Search/filter by city, specialty, rating. Pagination. Clinic cards with summary info.
- **Styling:** Grid/list layout, responsive.

#### ClinicDetails.js
- **Purpose:** Shows detailed info for a selected clinic.
- **Features:** Clinic profile, dentist info, services, reviews, appointment booking link, map/location.
- **Styling:** Card layout, tabs, responsive.

#### BookAppointment.js
- **Purpose:** Book an appointment with a clinic/dentist.
- **Features:** Date/time slot picker, clinic info, tabs (profile, services, Q&A, healthfeed), story modal for patient feedback.
- **Styling:** Two-column layout, modal, Tailwind CSS.

#### OnlineConsultation.js
- **Purpose:** Request a virtual dental consultation.
- **Features:** Form for patient details, symptoms, preferred time, video call integration.
- **Styling:** Form layout, responsive.

#### PatientConsultationForm.js
- **Purpose:** Collects patient info for consultations.
- **Features:** Form fields for name, contact, symptoms, preferred doctor/time.
- **Styling:** Simple form, validation, responsive.

#### VideoConsultation.js
- **Purpose:** Video call interface for online consultations.
- **Features:** Video window, chat, appointment details, doctor info.
- **Styling:** Embedded video, chat UI.

#### AdminDataDashboard.js
- **Purpose:** Admin dashboard for managing clinics, appointments, analytics.
- **Features:** Data tables, charts, user management, export options.
- **Styling:** Dashboard cards, charts, responsive.

#### ThemeShowcase.js
- **Purpose:** Preview and switch between site themes/colors.
- **Features:** Theme selector, color palette preview, live demo.
- **Styling:** Interactive, uses ThemeContext.

---

### Components

#### OffersStrip.jsx
- **Purpose:** Displays promotional offers in a horizontal strip.
- **Features:** Animated, clickable offers, responsive.

#### ConnectionTest.js
- **Purpose:** Tests frontend-backend connectivity.
- **Features:** API call, status display, error handling.

#### Interactive3DTeeth.js
- **Purpose:** 3D visualization of teeth for patient education.
- **Features:** Interactive model, rotate/zoom, highlight teeth.

---

### Contexts

#### ThemeContext.js
- **Purpose:** Provides theme (light/dark, color palette) to the app.
- **Usage:** Wraps App.js, exposes currentColors, isDarkMode, toggleTheme.

---

### Styles

#### mobile.css
- **Purpose:** Mobile-specific styles for responsive design.
- **Usage:** Imported in main CSS files.

---

### Utilities & Services

#### analyticsService.js
- **Purpose:** Handles analytics API calls.
- **Features:** Initialize analytics, track events.

---

## General Notes
- All components use functional React with hooks.
- Tailwind CSS is used for styling and responsive design.
- Routing via React Router.
- API calls via Axios.
- Error handling and validation implemented throughout.
- SEO best practices followed (meta tags, semantic HTML).

---

## Contact & Support
For questions, open an issue on GitHub or contact the maintainers listed in `README.md`.

---

*Last updated: September 1, 2025*
