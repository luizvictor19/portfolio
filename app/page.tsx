"use client";

import Button from "@/components/button";
import SectionTitle from "@/components/section-title";
import ProjectCard from "@/components/project-card";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t, language } = useLanguage();
  const featured = getFeaturedProjects(3);

  return (
    <div className="flex flex-col gap-20 py-8">
      {/* Hero */}
      <section className="flex flex-col items-start gap-6">
        <p className="text-sm font-medium text-primary">{t.home.greeting}</p>
        <h1 className="text-4xl font-bold leading-tight text-text sm:text-5xl">
          Luiz Oliveira
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
          {t.home.bio}
        </p>
        <div className="flex gap-4">
          <Button href="/projects">{t.home.viewProjects}</Button>
          <Button href="/contact" variant="outline">
            {t.home.getInTouch}
          </Button>
          <Button
            href={language === "pt" ? "/cv/CV-Luiz-Oliveira.pdf" : "/cv/CV-Luiz-Oliveira-English.pdf"}
            variant="outline"
            download
          >
            {t.home.downloadCV}
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <SectionTitle
          title={t.home.featuredProjects}
          subtitle={t.home.featuredSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/projects" variant="outline">
            {t.home.viewAllProjects}
          </Button>
        </div>
      </section>

      {/* About snippet */}
      <section>
        <SectionTitle title={t.home.aboutMe} />
        <p className="max-w-2xl leading-relaxed text-text-secondary">
          {t.home.aboutSnippet}
        </p>
        <div className="mt-4">
          <Button href="/about" variant="outline">
            {t.home.readMore}
          </Button>
        </div>
      </section>
    </div>
  );
}
