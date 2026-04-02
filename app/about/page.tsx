import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my background, and the technologies I work with.",
  openGraph: {
    title: "About | Portfolio",
    description: "Learn more about me, my background, and the technologies I work with.",
    images: ["/og-default.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
