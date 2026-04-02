# Codebase Concerns

**Analysis Date:** 2026-04-01

## Placeholder Content & Metadata

**Default Next.js Scaffolding Not Replaced:**
- Issue: Codebase is the default output from `create-next-app` with minimal customization. Page title and descriptions are generic placeholder text that don't reflect actual project purpose.
- Files: `app/layout.tsx`, `app/page.tsx`
- Impact: Conveys incomplete project state; metadata isn't optimized for SEO or user understanding
- Fix approach: Replace placeholder content with actual portfolio title, description, and landing page content

**Unused Demo Assets:**
- Issue: Public directory contains template assets (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) unused in default boilerplate
- Files: `/public/*.svg`
- Impact: Increases deployed bundle size with unused assets; inflates build output
- Fix approach: Remove unused SVG files or replace with actual portfolio assets

## Configuration & Setup Issues

**Minimal Next.js Configuration:**
- Issue: `next.config.ts` is empty (only comments, no actual configuration)
- Files: `next.config.ts`
- Impact: No optimization settings, image handling, or build customizations in place; limits flexibility for future features
- Fix approach: Add necessary configuration for image optimization, rewrites, or redirects as portfolio needs emerge

**Tailwind CSS Version Migration:**
- Issue: Project uses `@tailwindcss/postcss@4` (new PostCSS-first approach) which may have breaking changes from v3
- Files: `postcss.config.mjs`, `package.json`, `app/globals.css`
- Impact: Non-standard setup; documentation and examples online often reference v3; potential compatibility issues with third-party Tailwind plugins
- Fix approach: Document migration decisions or consider pinning to stable v3 if compatibility becomes issue

**Path Alias Misconfiguration:**
- Issue: `tsconfig.json` defines path alias `"@/*"` pointing to root directory (`./*`), which is overly broad
- Files: `tsconfig.json`
- Impact: Makes imports unclear (`@/app/page` vs just `./app/page`); doesn't follow conventional patterns (usually `@/*` → `./src/*`)
- Fix approach: Clarify or restructure path aliases to follow convention once project grows beyond current single-app directory

## Type Safety & Compiler Gaps

**Loose TypeScript Target:**
- Issue: `target: "ES2017"` is now quite outdated (released 2016); modern tooling assumes ES2020+
- Files: `tsconfig.json`
- Impact: May prevent use of modern language features; TypeScript doesn't warn about incompatibilities
- Fix approach: Update to `"ES2020"` or `"ES2021"` to align with current Next.js defaults

**Overly Broad Type Checking Scope:**
- Issue: `tsconfig.json` includes `"**/*.ts"` and `"**/*.mts"` which will process all TypeScript files, including node_modules during incremental builds
- Files: `tsconfig.json`
- Impact: Longer build times; potential processing of vendored type files; `skipLibCheck: true` helps but doesn't eliminate the issue
- Fix approach: Use more specific include paths like `"app/**/*"` and `"components/**/*"` once structure stabilizes

## Dependency & Maintenance Issues

**Extraneous Dependencies:**
- Issue: npm reports 5+ extraneous packages (`@emnapi/core`, `@emnapi/runtime`, `@emnapi/wasi-threads`, `@napi-rs/wasm-runtime`, `@tybys/wasm-util`)
- Files: `package-lock.json`
- Impact: Bloats `node_modules` (471MB total); increases security surface; unclear purpose/origin of these dependencies
- Fix approach: Run `npm prune` to remove extraneous packages; investigate why they were installed (likely from nested dependencies)

**Large node_modules Directory:**
- Issue: 471MB total codebase size with most of it in node_modules; even for a minimal project, this is heavy
- Files: `node_modules/` (entire directory)
- Impact: Slow clones, deploys, and local development; unused dependencies inflating bundle
- Fix approach: Audit dependencies for actual usage; consider using `npm ci --omit=dev` for production deploys

**Locked Dependency Versions:**
- Issue: Package.json uses caret/major version ranges (`next@16.2.2`, `react@19.2.4`, `tailwindcss@^4`) with lock file locked to specific versions
- Files: `package.json`, `package-lock.json`
- Impact: Cannot benefit from patch updates; security fixes require manual version bumps and regeneration of lock file
- Fix approach: Implement automated dependency update process (Dependabot) with testing before merging

## Project Structure & Scalability

**No Folder Organization:**
- Issue: All source code lives directly in `/app` directory with no subdivision by feature or concern
- Files: `app/` directory
- Impact: As portfolio grows, will become difficult to locate and manage related code; no clear separation between layout, pages, components, utilities
- Fix approach: Create subdirectories like `app/components`, `app/lib`, `app/utils` before adding substantial features

**Missing Test Infrastructure:**
- Issue: No test framework, test files, or test scripts configured; `package.json` has no test runner (no jest, vitest, playwright, etc.)
- Files: `package.json`
- Impact: No way to verify functionality; refactoring is risky; no CI coverage reporting
- Fix approach: Add testing framework (Vitest recommended for Next.js 16+); set up at least unit tests for any utilities or hooks

**No Development Tooling Documentation:**
- Issue: README only provides generic Next.js getting started instructions; no project-specific guidance on setup, debugging, or deployment
- Files: `README.md`
- Impact: Onboarding difficulty; unclear deployment target (Vercel vs. other platforms)
- Fix approach: Expand README with project-specific setup steps, environment variables (if any), and deployment instructions

## Code Quality Issues

**Hardcoded Tailwind Class Names:**
- Issue: `app/page.tsx` contains verbose, hardcoded Tailwind classes (`"flex h-12 w-full items-center justify-center..."`) with magic numbers and responsive prefixes scattered throughout
- Files: `app/page.tsx`
- Impact: Difficult to maintain; inconsistent styling; hard to extract reusable component styles
- Fix approach: Extract repeated patterns into component classes or CSS utilities; use Tailwind config to define custom spacing/sizing system

**Marketing Link Hardcoding:**
- Issue: All links in `app/page.tsx` point to Vercel/Next.js docs or deployment; not portfolio-specific
- Files: `app/page.tsx`
- Impact: Default content misleads users about site purpose; poor user experience for actual visitors
- Fix approach: Replace with portfolio project links and navigation appropriate to project goals

**Metadata Not Customized:**
- Issue: `metadata.title` = "Create Next App" and `description` = "Generated by create next app"
- Files: `app/layout.tsx`
- Impact: Search engines, social media, and browsers show generic placeholder text; poor SEO and sharing experience
- Fix approach: Set meaningful title and description reflecting portfolio actual content

## Accessibility & UX Concerns

**Missing Accessible Navigation:**
- Issue: No semantic navigation structure; page uses divs and anchor tags without nav landmark or ARIA labels
- Files: `app/page.tsx`
- Impact: Screen reader users cannot navigate; violates WCAG 2.1 Level A standards
- Fix approach: Add `<nav>` semantic HTML; implement skip links; ensure color contrast meets standards

**Insufficient Responsive Breakpoints:**
- Issue: Some Tailwind breakpoints used (`sm:`) but inconsistent; viewport might not be fully optimized for mobile
- Files: `app/page.tsx`, `app/globals.css`
- Impact: Mobile experience may break on certain device sizes; tablet and desktop variations not fully planned
- Fix approach: Review responsive design across breakpoints; add explicit tests for mobile, tablet, desktop

## Performance & Security Baseline

**No Image Optimization Config:**
- Issue: `next.config.ts` doesn't specify image optimization settings; relies on defaults
- Files: `next.config.ts`
- Impact: Images may not be properly optimized for different devices/formats; slower page loads
- Fix approach: Configure Next.js Image component with appropriate sizes, formats, and cache settings

**No Content Security Policy:**
- Issue: No CSP headers configured; external links (to Vercel, Next.js docs) not validated
- Files: `next.config.ts`
- Impact: Potential for clickjacking or script injection if links are compromised
- Fix approach: Add CSP headers in Next.js middleware or headers configuration

**Missing Environment Variable Validation:**
- Issue: Project doesn't use any env vars currently; no validation layer for when secrets/config are added
- Files: No validation code present
- Impact: When env vars are added, easy to misconfigure or leak secrets
- Fix approach: Add `zod` or similar schema validation for environment variables at startup; use separate `.env` files

## Build & Deployment Readiness

**No Build Output Analysis:**
- Issue: No webpack/bundler analysis tooling configured to identify bundle size bloat or circular dependencies
- Files: `next.config.ts`
- Impact: Difficult to optimize; potential dead code not detected
- Fix approach: Add `next-bundle-analyzer` or similar; set up bundle size budgets in CI

**Incomplete ESLint Configuration:**
- Issue: ESLint uses default Next.js config; no custom rules or overrides for project standards
- Files: `eslint.config.mjs`
- Impact: Only catches obvious errors; no enforcement of naming conventions, import order, or complexity limits
- Fix approach: Add rules for consistent style, complexity checks, and security concerns

**No Pre-commit Hooks:**
- Issue: No husky or similar tooling to run linting/tests before commit
- Files: None configured
- Impact: Bad code or failing tests can be committed; CI failures delayed until push
- Fix approach: Add husky with pre-commit hook to lint and test before allowing commits

---

*Concerns audit: 2026-04-01*
