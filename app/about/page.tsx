import type { Metadata } from "next";
import { cookies } from "next/headers";
import AboutContent from "@/components/about-content";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("language")?.value ?? "pt";
  const title = lang === "en" ? "About" : "Sobre";
  const siteName = lang === "en" ? "Portfolio" : "Portfólio";
  const description = "Learn more about me, my background, and the technologies I work with.";

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      images: ["/og-default.png"],
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
