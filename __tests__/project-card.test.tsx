import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/project-card";
import type { Project } from "@/data/projects";

const mockProject: Project = {
  id: "1",
  title: "Test Project",
  slug: "test-project",
  description: "A test project description.",
  techStack: ["React", "TypeScript"],
  image: "/images/test.jpg",
  link: "https://example.com",
};

describe("ProjectCard", () => {
  it("renders project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("A test project description.")).toBeInTheDocument();
  });

  it("renders tech stack tags", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("links to the project detail page", () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/projects/test-project");
  });
});
