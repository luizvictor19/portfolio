import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/data/projects";
import ProjectDetailContent from "@/components/project-detail-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const cookieStore = await cookies();
  const lang = cookieStore.get("language")?.value ?? "pt";
  const siteName = lang === "en" ? "Portfolio" : "Portfólio";
  const title = lang === "en" ? project.title.en : project.title.pt;
  const description = lang === "en" ? project.description.en : project.description.pt;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}
