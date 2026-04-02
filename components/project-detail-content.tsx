"use client";

import Image from "next/image";
import Button from "@/components/button";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col gap-8">
      <Button href="/projects" variant="outline" size="sm">
        &larr; &nbsp; {t.projects.backToProjects}
      </Button>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-bg-secondary">
        <Image
          src={project.image}
          alt={project.title[language]}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-text sm:text-4xl">
          {project.title[language]}
        </h1>
        <p className="mt-4 leading-relaxed text-text-secondary">
          {project.description[language]}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
          {t.projects.techStack}
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
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          {t.projects.viewProject} &nbsp; &rarr;
        </a>
      </div>
    </div>
  );
}
