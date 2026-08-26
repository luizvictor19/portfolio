import type { Metadata } from "next";
import { cookies } from "next/headers";
import ProjectsContent from "@/components/projects-content";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("language")?.value ?? "pt";
  const title = lang === "en" ? "Projects" : "Projetos";
  const siteName = lang === "en" ? "Portfolio" : "Portfólio";
  const description = "Selected projects in full stack development and applied AI, including an open source system for reading prediction market rules.";

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      images: ["/og-default.png"],
    },
  };
}

export default function ProjectsPage() {
  return <ProjectsContent />;
}
