import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card-bg transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-bg-secondary px-2.5 py-0.5 text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
