# Technology Stack

**Analysis Date:** 2026-04-01

## Languages

**Primary:**
- TypeScript 5 - All application code (`.ts` and `.tsx` files)

**Secondary:**
- JavaScript - Configuration files (ESLint, PostCSS configs use `.mjs`)
- CSS - Styling through Tailwind (see `app/globals.css`)

## Runtime

**Environment:**
- Node.js (version not specified in project - no `.nvmrc` file)

**Package Manager:**
- npm - Primary package manager
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.2.2 - React meta-framework for SSR, SSG, and routing
- React 19.2.4 - UI library
- React DOM 19.2.4 - React DOM rendering

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS plugin for Tailwind v4

**Build/Dev:**
- TypeScript 5 - Static type checking and compilation
- PostCSS 4 - CSS preprocessing (via `postcss.config.mjs`)

## Key Dependencies

**Critical:**
- next 16.2.2 - Primary framework; provides routing, SSR, image optimization, font optimization
- react 19.2.4 - Component rendering engine
- react-dom 19.2.4 - DOM bindings for React

**Styling/Theming:**
- tailwindcss 4 - CSS utility generation
- @tailwindcss/postcss 4 - Integration layer for Tailwind with PostCSS
- next/font - Google Fonts integration (Geist, Geist_Mono) - built into Next.js

**Development:**
- eslint 9 - Code linting and quality
- eslint-config-next 16.2.2 - Next.js-specific ESLint rules
- @types/node ^20 - Node.js type definitions
- @types/react ^19 - React type definitions
- @types/react-dom ^19 - React DOM type definitions

## Configuration

**Environment:**
- No `.env` files present - configuration is static or via Next.js config
- Configuration files are checked into version control

**Build:**
- `next.config.ts` - Next.js configuration (currently empty/default)
- `tsconfig.json` - TypeScript configuration with:
  - Target: ES2017
  - Module resolution: bundler (Next.js/Webpack)
  - Path aliases: `@/*` maps to root directory
  - JSX: react-jsx (for React 19+)
  - Strict mode enabled
- `postcss.config.mjs` - PostCSS configuration with Tailwind plugin
- `eslint.config.mjs` - ESLint configuration using flat config format (ESLint 9)
  - Extends next/core-web-vitals and next/typescript
  - Custom global ignores for build artifacts

**Entry Points:**
- `app/layout.tsx` - Root layout component (Next.js App Router)
- `app/page.tsx` - Home page component

## Platform Requirements

**Development:**
- Node.js runtime
- npm package manager
- Terminal/bash environment
- Text editor with TypeScript support recommended

**Production:**
- Deployment target: Vercel (recommended in README)
- Node.js server (if self-hosted)
- Can run via `npm run build && npm run start`

## Dev Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

---

*Stack analysis: 2026-04-01*
