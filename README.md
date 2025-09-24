# Product Catalog Web App

Small but functional product catalog built with Next.js (App Router), React, TailwindCSS, and Zustand.

## Tech
- Next.js 15 (App Router)
- React 19
- TailwindCSS 4
- Zustand (cart state with persistence)

## Features
- Homepage with hero and subtle animations (Framer Motion)
- Products page fetching Fake Store API, responsive grid
- Cart page with add/remove and total; badge count in header
- Product details page with back link
- Error fallbacks for products and product details
- Black & white theme (black: `#161616`)

## Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

Node 18.18+ recommended (Next 15 requires it). If you are on Node 16, upgrade via nvm.

## Project Structure
- `src/app` — App Router pages and layout
- `src/pages` — Page components used by App Router routes
- `src/components` — Reusable UI (Header, ProductItem, ErrorFallback, etc.)
- `src/store` — Zustand store (`cart.ts`)
- `types.ts` — Shared types

## Approach
- Data fetching is done in server components for fast first paint (no-store to always refresh).
- Cart state uses Zustand with `persist`, exposing helpers `addItem`, `removeItem`, `count`, `total`.
- UI keeps a strict black/white palette; Mulish is the default font via `next/font`.
- Responsive layout: centered desktop nav with a mobile sidebar via a lightweight portal.

## API
- Fake Store API: `https://fakestoreapi.com/products`

