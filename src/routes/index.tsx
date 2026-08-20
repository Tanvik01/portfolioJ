import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { CursorProvider, Cursor, CursorFollow } from "@/components/ui/cursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { SectionDivider } from "@/components/portfolio/SectionDivider";
import { Hero } from "@/components/portfolio/Hero";
import { Beliefs } from "@/components/portfolio/Beliefs";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { NowPlaying } from "@/components/portfolio/NowPlaying";
import { LampToggle } from "@/components/portfolio/LampToggle";
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
        <LampToggle />
        {/* Custom cursor — hidden on touch/mobile, matches ink aesthetic */}
        <CursorProvider className="hidden md:block absolute inset-0 pointer-events-none z-50">
          <Cursor>
            <svg
              style={{ color: "var(--ink)" }}
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
            >
              <path
                fill="currentColor"
                d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
              />
            </svg>
          </Cursor>
          <CursorFollow>
            <div
              className="px-2 py-1 rounded-lg text-sm shadow-lg font-note"
              style={{ background: "var(--ink)", color: "var(--paper)" }}
            >
              Hiring?
            </div>
          </CursorFollow>
        </CursorProvider>
        <Nav />
        <Hero />
        <NowPlaying />
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
