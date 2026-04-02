# Codebase Structure

**Analysis Date:** 2026-04-01

## Directory Layout

```
portfolio/
├── app/                    # Next.js app directory (main source code)
│   ├── layout.tsx          # Root layout component wrapping all pages
│   ├── page.tsx            # Home page (renders at /)
│   ├── globals.css         # Global styles with Tailwind and CSS variables
│   └── favicon.ico         # Browser tab icon
├── public/                 # Static assets served at root
│   ├── next.svg            # Next.js logo
│   ├── vercel.svg          # Vercel logo
│   ├── file.svg            # File icon
│   ├── globe.svg           # Globe icon
│   └── window.svg          # Window icon
├── .next/                  # Build output (generated, not committed)
├── .planning/              # GSD planning documents (generated)
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript compiler configuration
├── postcss.config.mjs      # PostCSS configuration (Tailwind CSS)
├── eslint.config.mjs       # ESLint configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── next-env.d.ts           # Next.js type definitions (generated)
├── README.md               # Project documentation
├── CLAUDE.md               # Reference to AGENTS.md
├── AGENTS.md               # Agent instructions for working with Next.js 16.2.2
└── .gitignore              # Git ignore patterns
```

## Directory Purposes

**app/**
- Purpose: Main application source code using Next.js App Router
- Contains: Page and layout components, global styles
- Key files: `layout.tsx` (root wrapper), `page.tsx` (home page), `globals.css` (styling)

**public/**
- Purpose: Static assets served directly at the root URL (e.g., `/next.svg`)
- Contains: SVG icons, images, favicon
- Key files: `next.svg`, `vercel.svg`, `favicon.ico`

**.next/**
- Purpose: Build artifacts and cached compilation output
- Generated: Yes (by `next build` and `next dev`)
- Committed: No (ignored by .gitignore)

**.planning/**
- Purpose: GSD (Generative Source Documentation) analysis documents
- Generated: Yes (by `/gsd:map-codebase` command)
- Committed: No (tracked separately from source)

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root HTML structure, global font loading, global styles import
- `app/page.tsx`: Home page component rendering at `/`
- `next.config.ts`: Next.js build configuration entry point

**Configuration:**
- `tsconfig.json`: TypeScript compiler options, path aliases (`@/*`), file includes
- `next.config.ts`: Next.js runtime configuration
- `postcss.config.mjs`: PostCSS plugin configuration for Tailwind CSS
- `eslint.config.mjs`: ESLint rules and configs (Next.js core web vitals + TypeScript)
- `package.json`: Dependencies, dev dependencies, scripts

**Core Logic:**
- `app/layout.tsx`: Global layout composition, metadata setup
- `app/page.tsx`: Welcome page with links to docs and deployment

**Styling:**
- `app/globals.css`: Global CSS variables, Tailwind CSS import, light/dark mode

## Naming Conventions

**Files:**
- `layout.tsx` - Root layout wrapping nested routes
- `page.tsx` - Route page component (renders for path matching directory)
- `.config.ts/.config.mjs` - Configuration files (ESLint, PostCSS, Next.js, TypeScript)
- `.css` - Stylesheet files (globals.css for global styles)
- `.d.ts` - TypeScript declaration files (next-env.d.ts generated)

**Directories:**
- `app/` - Application source code (Next.js App Router convention)
- `public/` - Static assets at HTTP root (Next.js convention)
- `.next/` - Build output (Next.js convention)

**Components:**
- PascalCase for React component functions (e.g., `RootLayout`, `Home`)
- Exported as `export default` function from `layout.tsx` or `page.tsx`

**TypeScript Types:**
- Using `React.ReactNode` for children props
- Using `Readonly<{ children: React.ReactNode }>` for type safety in layout props
- Using `Metadata` type from `next` for page metadata

## Where to Add New Code

**New Feature (Page):**
- Primary code: Create new directory under `app/` (e.g., `app/about/`) and add `page.tsx`
- Tests: Not yet established; tests would follow Next.js testing patterns
- Example: `app/about/page.tsx` renders at `/about` route

**New Component/Module:**
- Implementation: Create file in `app/` directory (e.g., `app/components/Card.tsx`)
- Or use shared component pattern: `app/components/` subdirectory for reusable components
- Import using path alias: `import { Card } from "@/app/components/Card"`

**Nested Routes:**
- Implementation: Create nested directories in `app/` with `page.tsx` (e.g., `app/blog/[slug]/page.tsx`)
- Dynamic routes use bracket notation: `[param]` or `[...slug]` for catch-all routes
- Layout for segment: Add `layout.tsx` in same directory as page

**Utilities/Helpers:**
- Shared helpers: Create `app/utils/` directory with helper functions
- Import via path alias: `import { formatDate } from "@/app/utils/date"`

**Styling:**
- Global styles: Add to or modify `app/globals.css`
- Component styles: Use Tailwind className directly in JSX or create `.module.css` for scoped styles
- Dark mode: Use `dark:` prefix in Tailwind classes (already configured in layout)

## Special Directories

**.next/**
- Purpose: Next.js build output including compiled pages, static assets, server code
- Generated: Yes (created by `next dev` and `next build`)
- Committed: No (listed in .gitignore)

**node_modules/**
- Purpose: Installed npm dependencies
- Generated: Yes (created by `npm install`)
- Committed: No (listed in .gitignore)

## Path Aliases

**Configuration:**
- Defined in `tsconfig.json`: `"@/*": ["./*"]`
- Allows importing from project root using `@/` prefix

**Usage Examples:**
- `import { Home } from "@/app/page"` (importing from root)
- `import styles from "@/app/globals.css"` (importing from root)
- `import { Component } from "@/app/components/Component"` (future usage)

## Environment and Platform

**Node Version:** Not explicitly pinned (see `.nvmrc` if present, otherwise uses system Node)

**Package Manager:** npm (uses `package-lock.json`)

**Scripts:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

---

*Structure analysis: 2026-04-01*
