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
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A full-stack e-commerce application with product management, shopping cart, and Stripe payment integration. Built with a focus on performance and accessibility.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    image: "/images/ecommerce.jpg",
    link: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces. Inspired by Trello and Linear.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    image: "/images/taskmanager.jpg",
    link: "https://github.com/example/taskmanager",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description:
      "A weather dashboard that displays current conditions, forecasts, and interactive maps. Uses geolocation and multiple weather APIs.",
    techStack: ["Next.js", "TypeScript", "Chart.js", "OpenWeather API"],
    image: "/images/weather.jpg",
    link: "https://github.com/example/weather",
  },
  {
    id: "4",
    title: "Blog Engine",
    slug: "blog-engine",
    description:
      "A markdown-powered blog engine with syntax highlighting, RSS feed, and full-text search. Statically generated for fast load times.",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    image: "/images/blog.jpg",
    link: "https://github.com/example/blog",
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count: number): Project[] {
  return projects.slice(0, count);
}
