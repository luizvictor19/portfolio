"use client";

import SectionTitle from "./section-title";
import { useLanguage } from "./language-provider";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "REST APIs",
  "GraphQL",
];

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-12">
      <section>
        <SectionTitle title={t.about.title} />
        <div className="max-w-2xl space-y-4 leading-relaxed text-text-secondary">
          <p>{t.about.bio1}</p>
          <p>{t.about.bio2}</p>
          <p>{t.about.bio3}</p>
        </div>
      </section>

      <section>
        <SectionTitle
          title={t.about.skillsTitle}
          subtitle={t.about.skillsSubtitle}
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border bg-card-bg px-4 py-2 text-sm font-medium text-text"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
