"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card-bg transition-shadow hover:shadow-lg min-h-[450px]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-bg-secondary">
        <Image
          src={project.image}
          alt={project.title[language]}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-text">{project.title[language]}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description[language]}
        </p>
        <div className="mt-4 flex h-[82px] flex-wrap content-start gap-2 overflow-hidden">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
