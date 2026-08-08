import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { CursorDoodle } from "@/components/portfolio/CursorDoodle";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { SectionDivider } from "@/components/portfolio/SectionDivider";
import { Hero } from "@/components/portfolio/Hero";
import { Beliefs } from "@/components/portfolio/Beliefs";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { useGlobalClickSound } from "@/hooks/use-click-sound";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useGlobalClickSound();

  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-x-hidden bg-background">
        <ScrollProgress />
        <CursorDoodle />
        <Nav />
        <Hero />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider flip />
        <Projects />
        <SectionDivider />
        <Beliefs />
        <SectionDivider flip />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
