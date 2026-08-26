import { describe, it, expect } from "vitest";
import {
  getProjects,
  getProjectBySlug,
  getFeaturedProjects,
} from "@/data/projects";

describe("projects data", () => {
  it("getProjects returns all projects", () => {
    const all = getProjects();
    expect(all.length).toBeGreaterThan(0);
    expect(all[0]).toHaveProperty("slug");
  });

  it("getProjectBySlug returns the correct project", () => {
    const project = getProjectBySlug("lig-4");
    expect(project).toBeDefined();
    expect(project!.title.pt).toBe("Quatro em Linha (Lig-4)");
    expect(project!.title.en).toBe("Connect Four Game (Lig-4)");
  });

  it("getProjectBySlug returns undefined for invalid slug", () => {
    expect(getProjectBySlug("nonexistent")).toBeUndefined();
  });

  it("getFeaturedProjects returns the requested count", () => {
    const featured = getFeaturedProjects(2);
    expect(featured).toHaveLength(2);
  });
});
