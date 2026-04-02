# Coding Conventions

**Analysis Date:** 2026-04-01

## Naming Patterns

**Files:**
- React components use PascalCase with `.tsx` extension (though currently using lowercase for route handlers: `page.tsx`, `layout.tsx`)
- Configuration files use camelCase with descriptive names: `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`
- CSS files use lowercase with `.css` extension: `globals.css`

**Functions:**
- Component functions use PascalCase: `RootLayout`, `Home`
- Exported functions and variables use camelCase: `geistSans`, `geistMono`, `metadata`
- Default exports for React components: `export default function RootLayout(...)`

**Variables:**
- Constants use camelCase: `geistSans`, `geistMono`, `config`
- React props in destructuring: camelCase pattern observed
- CSS class names use lowercase with hyphens (Tailwind convention): `flex-col`, `items-center`, `bg-zinc-50`

**Types:**
- TypeScript type annotations use PascalCase with `type` keyword: `Metadata`
- Props types use descriptive inline syntax or explicit type definitions
- `Readonly` utility type used for immutable props in `RootLayout`

## Code Style

**Formatting:**
- No explicit Prettier configuration file present
- ESLint uses Next.js preset configuration
- Indentation: 2 spaces (observed in source files)
- Line length: Not explicitly constrained but reasonably kept under 100 characters in most cases
- Semicolons: Present at end of statements (e.g., `const nextConfig: NextConfig = {...};`)

**Linting:**
- ESLint configuration: `eslint.config.mjs` with flat config format (ESLint 9+)
- Uses `eslint-config-next/core-web-vitals` preset
- Uses `eslint-config-next/typescript` preset for TypeScript support
- Custom global ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`
- Configured in `/home/thinker/Projects/portfolio/eslint.config.mjs`

## Import Organization

**Order:**
1. Next.js framework imports (`import type { Metadata }`, `import { Geist }`)
2. React imports (implicit via JSX)
3. Local/relative imports (CSS, components, utilities)

**Path Aliases:**
- Base path alias configured: `@/*` maps to `./*` (defined in `tsconfig.json`)
- Currently not heavily used in codebase, but available for future imports

**Examples from codebase:**
```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Image from "next/image";
```

## Error Handling

**Patterns:**
- No explicit error handling patterns visible in current codebase
- Standard React boundary approach implied through Next.js framework
- Components return JSX directly without try-catch blocks

## Logging

**Framework:** Not configured
- No logging library dependencies in `package.json`
- Console methods would be used if needed

**Patterns:**
- Not yet established; follow standard `console.log`, `console.error` if needed

## Comments

**When to Comment:**
- Minimal comments in current codebase
- Self-documenting code preferred (descriptive variable/function names)

**JSDoc/TSDoc:**
- Not currently used in the application code
- TypeScript type annotations serve as primary documentation

## Function Design

**Size:**
- Functions are kept concise (layout under 33 lines, page under 65 lines)
- Single responsibility focus observed

**Parameters:**
- React component props use destructuring: `{ children }` in `RootLayout`
- Props wrapped in `Readonly` type annotation for immutability

**Return Values:**
- Components return JSX directly
- Implicit undefined return for void operations

## Module Design

**Exports:**
- Default exports for page components: `export default function RootLayout(...)`
- Named exports for metadata: `export const metadata: Metadata`
- Mix of default and named exports in same file acceptable (layout.tsx pattern)

**Barrel Files:**
- Not currently used; no `index.ts` files observed

## TypeScript Configuration

**Settings:**
- Strict mode enabled: `"strict": true` in `tsconfig.json`
- Target: ES2017
- Module: esnext
- JSX handling: `"jsx": "react-jsx"`
- Module resolution: bundler (Next.js compatible)
- Incremental compilation: enabled

---

*Convention analysis: 2026-04-01*
