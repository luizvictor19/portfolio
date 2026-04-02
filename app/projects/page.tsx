import type { Metadata } from "next";
import ProjectsContent from "@/components/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my portfolio of web development projects.",
  openGraph: {
    title: "Projects | Portfolio",
    description: "Browse my portfolio of web development projects.",
    images: ["/og-default.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
