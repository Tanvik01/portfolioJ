import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { CursorDoodle } from "@/components/portfolio/CursorDoodle";
import { Hero } from "@/components/portfolio/Hero";
import { Beliefs } from "@/components/portfolio/Beliefs";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <CursorDoodle />
      <Nav />
      <Hero />
      <Beliefs />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
