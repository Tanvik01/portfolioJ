import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { SectionDivider } from "@/components/portfolio/SectionDivider";
import { Hero } from "@/components/portfolio/Hero";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { Projects } from "@/components/portfolio/Projects";
import { DesignSection } from "@/components/portfolio/DesignSection";
import { Contact } from "@/components/portfolio/Contact";
import { useGlobalClickSound } from "@/hooks/use-click-sound";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useGlobalClickSound();

  return (
    <SmoothScroll>
      <main
        className="relative min-h-screen"
        style={{ backgroundColor: "#EEEBDA", color: "#282B4A" }}
      >
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Work */}
        <Projects />

        <DesignSection />
        <SectionDivider />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
