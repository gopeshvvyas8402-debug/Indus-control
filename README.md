# Indus-control

This repository now contains a complete static calibration management portal created from the original homepage design.

## Included features

- Responsive dashboard and sidebar navigation
- Customer, Plant, Equipment, Calibration, Service, Procurement, Document, Analytics, and User Management pages
- Browser-based SQL data persistence using SQL.js, saved in localStorage
- Add new customers, plants, and equipment directly through form workflows
- Dynamic module pages with data-driven tables and dashboards
- Dynamic notifications and dashboard widgets
- Light/Dark theme switch
- Mobile-friendly navigation and quick action support

## Files

- `index.html` — main portal shell
- `assets/css/style.css` — styling for the app
- `assets/js/app.js` — app logic, data persistence, and page rendering

## Pages

The portal is separated into distinct pages for each major area:
- `index.html` — Dashboard overview
- `customer.html` — Customer Management
- `plant.html` — Plant Management
- `equipment.html` — Equipment Management
- `calibration.html` — Calibration Management
- `service.html` — Service & Maintenance
- `installation.html` — Installation & Commissioning
- `procurement.html` — Procurement & Inventory
- `document.html` — Document Management
- `analytics.html` — Analytics & Reporting
- `user-management.html` — User & Role Management

## Preview

Open `index.html` in your browser, or serve the repository on `http://localhost:8000` using a local server. The app uses the browser database for persistence, so data remains available across refreshes.

## Deploy to Vercel

This repository is a static HTML/CSS/JS site and can be deployed on Vercel.

1. Sign in or create an account at https://vercel.com/
2. Install the Vercel CLI if needed: `npm install -g vercel`
3. In the repository root, run: `vercel`
4. Follow prompts to link or create a project
5. Vercel will publish the site automatically

The included `vercel.json` config ensures all static pages and asset files are served directly.

Alternatively, connect this repository to Vercel through GitHub for automatic deployments.
