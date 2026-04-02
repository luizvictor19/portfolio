# Portfolio Specification

## Stack

| Layer       | Choice                                      |
|-------------|---------------------------------------------|
| Framework   | Next.js 16 (App Router)                     |
| Language    | TypeScript (strict)                         |
| Styling     | Tailwind CSS v4, CSS variables              |
| Fonts       | Geist Sans + Geist Mono (already configured)|
| Linting     | ESLint 9 + eslint-config-next               |
| Testing     | Vitest + React Testing Library              |
| Deployment  | Vercel (or any Node host)                   |

---

## Pages

### Home (`app/page.tsx`)

- Hero section: name, title/tagline, short bio, CTA buttons (Projects, Contact)
- Featured projects grid (3 most recent from data)
- Brief about snippet with "Read more" link to About page
- Metadata: site title, description, OG image

### Projects (`app/projects/page.tsx`)

- Grid of all projects using `ProjectCard`
- Metadata: "Projects | Portfolio", OG image

### Project Detail (`app/projects/[slug]/page.tsx`)

- Dynamic route, loads project by slug from data
- Full project info: title, description, tech stack badges, image, external link
- Back link to Projects list
- `generateStaticParams` for static generation
- `generateMetadata` for per-project title + OG image
- 404 via `notFound()` for invalid slugs

### About (`app/about/page.tsx`)

- Bio, skills/tech list, background info
- Metadata: "About | Portfolio", OG image

### Contact (`app/contact/page.tsx`)

- Contact form (name, email, message)
- Client component for form state + validation
- Submits to `/api/contact`
- Success/error feedback inline
- Metadata: "Contact | Portfolio", OG image

---

## API Routes

### `app/api/contact/route.ts`

- `POST` handler
- Server-side validation: name (non-empty), email (valid format), message (non-empty)
- Returns `200` with success message or `400` with field errors
- Placeholder for email integration (console.log for now)

---

## Components

All in `components/` at the project root.

### Header (`components/header.tsx`)

- Fixed/sticky top navigation
- Logo/site name (links to `/`)
- Nav links: Home, Projects, About, Contact
- Dark mode toggle button (sun/moon icon)
- Mobile: hamburger menu with slide-out or dropdown nav
- Highlights active route

### Footer (`components/footer.tsx`)

- Copyright, social links (GitHub, LinkedIn, etc.)
- Sits at bottom of page (flex layout in root)

### ProjectCard (`components/project-card.tsx`)

- Props: `Project` type (from data)
- Image, title, short description, tech stack tags
- Links to `/projects/[slug]`
- Hover effect

### Button (`components/button.tsx`)

- Props: `variant` ("primary" | "outline"), `size` ("sm" | "md" | "lg"), standard button/anchor props
- Renders `<button>` or `<a>` depending on `href` prop

### SectionTitle (`components/section-title.tsx`)

- Props: `title`, optional `subtitle`
- Consistent heading style across pages

### ContactForm (`components/contact-form.tsx`)

- Client component (`"use client"`)
- Fields: name, email, message (textarea)
- Validation: all required, email format check
- Inline error messages per field
- Loading state during submit
- Success/error banner after submit

---

## Data

### `data/projects.ts`

```ts
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  // Sample entries populated during implementation
];
```

Helper functions in same file:

- `getProjects(): Project[]` — returns all projects
- `getProjectBySlug(slug: string): Project | undefined` — find by slug
- `getFeaturedProjects(count: number): Project[]` — first N projects

---

## Theming

### Strategy

- `data-theme` attribute on `<html>` element ("light" | "dark")
- CSS variables in `globals.css` scoped to `[data-theme="light"]` and `[data-theme="dark"]`
- Theme toggle persists to `localStorage`, reads on mount
- Default: system preference via `prefers-color-scheme`, overridden by stored choice
- No flash of wrong theme: inline `<script>` in `<head>` sets `data-theme` before paint

### CSS Variables

```css
[data-theme="light"] {
  --color-bg: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-text: #111827;
  --color-text-secondary: #6b7280;
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-border: #e5e7eb;
  --color-card-bg: #ffffff;
}

[data-theme="dark"] {
  --color-bg: #0a0a0a;
  --color-bg-secondary: #171717;
  --color-text: #f9fafb;
  --color-text-secondary: #9ca3af;
  --color-primary: #3b82f6;
  --color-primary-hover: #60a5fa;
  --color-border: #27272a;
  --color-card-bg: #18181b;
}
```

Mapped into Tailwind via `@theme inline` block.

---

## Layout

### Root Layout (`app/layout.tsx`)

- `<html>` with `data-theme`, font variables, `antialiased`
- Theme init script (inline, blocking)
- `<Header />`
- `<main>` wrapper with max-width + padding
- `<Footer />`

### Responsive Breakpoints

Mobile-first using Tailwind defaults:
- Base: single column, full-width
- `sm` (640px): minor adjustments
- `md` (768px): two-column grids
- `lg` (1024px): three-column project grid, wider content

---

## Metadata & SEO

- Root metadata in `app/layout.tsx`: site title template `"%s | Portfolio"`, base description
- Per-page `generateMetadata` or exported `metadata` objects
- OG images: static default in `public/og-default.png`; project pages use project image
- `robots.txt` and `sitemap.xml` via Next.js file conventions (`app/robots.ts`, `app/sitemap.ts`)

---

## Code Quality

### TypeScript

- `strict: true` (already configured)
- Explicit types for component props, API request/response, project data

### ESLint

- Already configured with `eslint-config-next` (core-web-vitals + typescript)
- No additional plugins needed for v1

### Testing (Vitest + React Testing Library)

Files in `__tests__/` at project root.

| Test                        | What it covers                                   |
|-----------------------------|--------------------------------------------------|
| `project-card.test.tsx`     | Renders title, description, tech tags, link      |
| `button.test.tsx`           | Renders variants, renders as `<a>` when href set |
| `contact-form.test.tsx`     | Validation errors shown, successful submit       |
| `contact-route.test.ts`    | API returns 400 on invalid input, 200 on valid   |
| `projects-data.test.ts`    | `getProjectBySlug` returns correct project / undefined |

---

## File Structure

```
portfolio/
  app/
    layout.tsx              # Root layout (Header, Footer, theme)
    page.tsx                # Home page
    globals.css             # CSS variables, Tailwind import, theme
    robots.ts               # robots.txt generation
    sitemap.ts              # sitemap.xml generation
    about/
      page.tsx
    contact/
      page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    api/
      contact/
        route.ts
  components/
    header.tsx
    footer.tsx
    project-card.tsx
    button.tsx
    section-title.tsx
    contact-form.tsx
    theme-provider.tsx      # Theme context + toggle logic
  data/
    projects.ts
  public/
    og-default.png
    images/                 # Project screenshots
  __tests__/
    project-card.test.tsx
    button.test.tsx
    contact-form.test.tsx
    contact-route.test.ts
    projects-data.test.ts
```

---

## Implementation Milestones

### M1: Foundation

1. Update `globals.css` with theme CSS variables and Tailwind `@theme` mapping
2. Create `data/projects.ts` with type + sample data + helpers
3. Create `components/theme-provider.tsx` (context, localStorage, system preference)
4. Update `app/layout.tsx` with theme init script, Header, Footer, main wrapper
5. Create `components/header.tsx` (nav, mobile menu, dark mode toggle, active link)
6. Create `components/footer.tsx`

### M2: Shared Components

7. Create `components/button.tsx`
8. Create `components/section-title.tsx`
9. Create `components/project-card.tsx`

### M3: Pages

10. Build Home page (hero, featured projects, about snippet)
11. Build Projects page (full grid)
12. Build Project Detail page (dynamic route, `generateStaticParams`, `generateMetadata`)
13. Build About page
14. Build Contact page + `components/contact-form.tsx`
15. Create `app/api/contact/route.ts`

### M4: SEO & Polish

16. Add root metadata template to `app/layout.tsx`
17. Add per-page metadata / `generateMetadata`
18. Create `app/robots.ts` and `app/sitemap.ts`
19. Add `public/og-default.png` placeholder
20. Responsive QA pass (verify mobile, tablet, desktop)

### M5: Testing & Quality

21. Install Vitest + React Testing Library + jsdom
22. Write tests (5 test files listed above)
23. Run `eslint` and fix any issues
24. Run `next build` to verify clean production build
