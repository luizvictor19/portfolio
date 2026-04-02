"use client";

import SectionTitle from "./section-title";
import ProjectCard from "./project-card";
import { getProjects } from "@/data/projects";
import { useLanguage } from "./language-provider";

export default function ProjectsContent() {
  const { t } = useLanguage();
  const projects = getProjects();

  return (
    <div>
      <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
