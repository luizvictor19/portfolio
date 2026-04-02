import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/button";
import { getProjectBySlug, getProjects } from "@/data/projects";

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

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Portfolio`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="flex flex-col gap-8">
      <Button href="/projects" variant="outline" size="sm">
        &larr; Back to Projects
      </Button>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-text sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
          {project.description}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-bg-secondary px-3 py-1 text-sm font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <Button
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project &rarr;
        </Button>
      </div>
    </div>
  );
}
