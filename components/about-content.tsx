"use client";

import SectionTitle from "./section-title";
import { useLanguage } from "./language-provider";

const skills = [
  "HTML5",
  "CSS3",
  "TypeScript",
  "JavaScript",
  "React",
  "RESTful API",
  "Context API",
  "Redux Toolkit",
  "Next.js",
  "Tailwind CSS",
  "Material-UI",
  "Styled Components",
  "Node.js",
  "Express.js",
  "Figma - UI/UX Design", 
  "Git",
  "Docker",
  "English",
  "TDD/BDD",
  "Vitest",
  "React Testing Library",
  "Jest",
  "Cypress",
  "Flutter",
  "Dart",
  "Python",
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
              className="rounded-lg border border-border bg-card-bg px-4 py-2 text-sm font-medium text-text transition-transform duration-200 hover:scale-110 cursor-default"
            >
              {skill === "English" ? t.projects.english : skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
