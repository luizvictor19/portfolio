# Architecture

**Analysis Date:** 2026-04-01

## Pattern Overview

**Overall:** Next.js App Router (Vercel's latest approach)

**Key Characteristics:**
- File-based routing using the `app/` directory
- Server components by default
- Automatic code splitting and optimized bundle loading
- Built-in image optimization via Next.js Image component
- TypeScript-first development with strict mode enabled

## Layers

**Presentation Layer:**
- Purpose: Render UI components and handle client-side interactions
- Location: `app/page.tsx`, `app/layout.tsx`
- Contains: React Server Components (RSCs) and page routes
- Depends on: Next.js framework (routing, Image optimization, Metadata API)
- Used by: Web browsers accessing HTTP routes

**Configuration Layer:**
- Purpose: Configure build, TypeScript compilation, and styling pipeline
- Location: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`
- Contains: Build settings, compiler options, linting rules
- Depends on: Next.js CLI, TypeScript compiler, ESLint, PostCSS
- Used by: Build system during development and production builds

**Static Assets Layer:**
- Purpose: Serve static images and favicon
- Location: `public/` directory
- Contains: SVG files, images, favicon.ico
- Depends on: Next.js static file serving
- Used by: Client-side components via Image component or HTML references

## Data Flow

**Page Request Flow:**

1. Browser requests `/` (root path)
2. Next.js routes request to `app/page.tsx` (Home component)
3. Home component imports Next.js Image component for image optimization
4. RootLayout wraps Home component with global HTML structure from `app/layout.tsx`
5. Global stylesheet (`app/globals.css`) applies Tailwind CSS and custom CSS variables
6. Server renders page to HTML and sends to client
7. Client receives rendered HTML and hydrates with minimal JavaScript

**Styling Data Flow:**

1. `app/globals.css` is imported in `app/layout.tsx` (global scope)
2. PostCSS processes Tailwind `@import "tailwindcss"` directive via `postcss.config.mjs`
3. Tailwind v4 generates utility classes based on scanned files (configured via `tsconfig.json` include)
4. CSS custom properties (--background, --foreground, etc.) defined in `:root` and `@media (prefers-color-scheme: dark)`
5. Individual components use Tailwind class names and CSS variables for styling
6. Light/dark mode automatically switches based on system preference

**State Management:**

- No explicit state management present (Redux, Zustand, etc.)
- Current architecture is stateless presentation layer
- State (if added) would be managed via React hooks or server-side rendering

## Key Abstractions

**Page Route:**
- Purpose: Represents a routable page in the application
- Examples: `app/page.tsx` (renders at `/`)
- Pattern: Export default React component from file; Next.js automatically creates route

**Layout Route:**
- Purpose: Shared wrapper component for nested pages
- Examples: `app/layout.tsx` (RootLayout wraps all pages)
- Pattern: Export default React component that receives `children` prop; applied to entire subtree

**Image Optimization:**
- Purpose: Serve optimized images (formats, sizes, lazy loading)
- Examples: Used in `app/page.tsx` with `import Image from "next/image"`
- Pattern: Use next/image Image component instead of HTML img tag

**Font System:**
- Purpose: Load web fonts with optimized CSS
- Examples: `Geist` and `Geist_Mono` fonts in `app/layout.tsx`
- Pattern: Import from `next/font/google`, configure subsets, apply via CSS variables

**Metadata API:**
- Purpose: Dynamically set page title, description, etc.
- Examples: `export const metadata: Metadata` in `app/layout.tsx`
- Pattern: Export metadata object from layout or page files

## Entry Points

**Web Application:**
- Location: `app/layout.tsx` (RootLayout)
- Triggers: Server startup; all HTTP requests
- Responsibilities: Render root HTML structure, import global styles, configure fonts

**Home Page:**
- Location: `app/page.tsx` (Home component)
- Triggers: HTTP GET request to `/`
- Responsibilities: Display welcome content, link to docs and deploy templates

**Build Process:**
- Location: `next.config.ts`
- Triggers: `npm run build` or production deployment
- Responsibilities: Configure Next.js build behavior (empty config currently)

## Error Handling

**Strategy:** Default Next.js behavior with no custom error pages defined

**Patterns:**
- 404 errors: Not defined; Next.js serves default 404
- 500 errors: Not defined; Next.js serves default error page
- Build errors: TypeScript strict mode catches type issues at build time
- Runtime errors: Next.js error overlay in development, default error page in production

## Cross-Cutting Concerns

**Logging:** No explicit logging framework present. Any logging would use console methods (console.log, console.error).

**Validation:** No client-side form validation or schema validation (e.g., Zod) currently in place.

**Authentication:** No authentication implemented. Application is public with no auth layer.

**Type Safety:** TypeScript strict mode enabled globally via `tsconfig.json` compiler options (strict: true), ensuring compile-time type checking across the codebase.

---

*Architecture analysis: 2026-04-01*
