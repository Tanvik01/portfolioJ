"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  title: string
  description: string
  year: string
  live?: string
  github?: string
  image?: string
  video?: string
}

const allProjects: Project[] = [
  {
    title: "RefactorPlus",
    description: "AI-powered code review assistant — quality scores, categorized issues, and GitHub PR-style diff view with inline annotations.",
    year: "2026",
    live: "https://refactor-plus.vercel.app/",
    github: "https://github.com/Tanvik01/RefactorPlus",
    video: "/assets/refactor.mp4",
  },
  {
    title: "Golden Hour",
    description: "A real-time WebGL ocean built with React Three Fiber — height-field water simulation, underwater caustics, and a full sunset-to-seabed dive with fish schools and seagulls.",
    year: "2026",
    live: "https://ocean-sunset.vercel.app/",
    video: "/assets/ocean.mp4",
  },
  {
    title: "DripCheck",
    description: "Upload photos of your clothes, tell it the vibe you are going for, and it styles an outfit for you.",
    year: "2025",
    live: "https://drip-check-ten.vercel.app/",
    github: "https://github.com/Tanvik01/DripCheck",
    video: "/assets/drip.mp4",
  },
  {
    title: "Talk-to-DB",
    description: "For people who just want to see data and not code for it. Converts voice to SQL queries using NLP.",
    year: "2025",
    live: "https://talk-to-db.netlify.app/",
    github: "https://github.com/Tanvik01/talk-to-db",
    image: "/assets/talktodb.png",
  },
  {
    title: "CampusExchange",
    description: "Second-hand marketplace for campus students — sell your stuff before moving back home.",
    year: "2024",
    live: "https://campusexchange-production-507e.up.railway.app/",
    github: "https://github.com/Tanvik01/campusExchange",
  },
  {
    title: "Movie Recommender",
    description: "Recommends movies using collaborative filtering and the TMDB API to fuel your weekend binge watch.",
    year: "2024",
    live: "https://madsreccoms.netlify.app/",
    github: "https://github.com/Tanvik01/Movie-Reccomender-System",
  },
  {
    title: "Text-Highlighter",
    description: "Chrome extension to save highlights from any webpage and let AI summarize them for you.",
    year: "2024",
    live: "https://www.loom.com/share/753f3d83a6134223a8e15774d4bfa827",
    github: "https://github.com/Tanvik01/texthighlighter",
  },
]

const INITIAL_COUNT = 3

export function ProjectShowcase() {
  const [showMore, setShowMore] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)

  const visibleProjects = showMore ? allProjects : allProjects.slice(0, INITIAL_COUNT)

  // Keep containerRect fresh on scroll/resize
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerRect(containerRef.current.getBoundingClientRect())
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  // Smooth lerp animation for the floating preview
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      setContainerRect(rect)
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(allProjects[index]?.video != null || allProjects[index]?.image != null)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full px-4 sm:px-6 py-16"
    >
      {/* Floating video / image preview */}
      <div
        className="pointer-events-none fixed z-[9000] overflow-hidden rounded-2xl shadow-2xl border border-ink/15 bg-paper"
        style={{
          left: containerRect ? containerRect.left : 0,
          top: containerRect ? containerRect.top : 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? "1" : "0.88",
          transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), scale 0.25s cubic-bezier(0.4,0,0.2,1)",
          width: 320,
          height: 180,
        }}
      >
        <div className="relative w-full h-full bg-paper overflow-hidden rounded-2xl flex items-center justify-center">
          {allProjects
            .filter((p) => p.video || p.image)
            .map((project) => {
              const globalIdx = allProjects.indexOf(project)
              const isCurrent = hoveredIndex === globalIdx

              if (project.video) {
                return (
                  <video
                    key={project.title}
                    src={project.video}
                    poster={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-contain object-center transition-all duration-500 ease-out"
                    style={{
                      opacity: isCurrent ? 1 : 0,
                      transform: isCurrent ? "scale(1)" : "scale(1.04)",
                      filter: isCurrent ? "none" : "blur(8px)",
                    }}
                    ref={(el) => {
                      if (el && isCurrent && el.paused) {
                        el.play().catch(() => {})
                      }
                    }}
                  />
                )
              }

              return (
                <img
                  key={project.title}
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain object-center transition-all duration-500 ease-out"
                  style={{
                    opacity: isCurrent ? 1 : 0,
                    transform: isCurrent ? "scale(1)" : "scale(1.04)",
                    filter: isCurrent ? "none" : "blur(8px)",
                  }}
                />
              )
            })}
        </div>
      </div>

      {/* Project list */}
      <div className="space-y-0">
        {visibleProjects.map((project, index) => (
          <div
            key={project.title}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-5 border-t border-ink/20">
              {/* Hover background highlight */}
              <div
                className="absolute inset-0 -mx-3 px-3 rounded-xl transition-all duration-300 ease-out"
                style={{
                  background: "var(--paper)",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? "scale(1)" : "scale(0.97)",
                }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title — same color as description, underline animates on hover */}
                  <div className="inline-flex items-center gap-2">
                    <h3
                      className="font-display text-lg tracking-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      <span className="relative">
                        {project.title}
                        <span
                          className="absolute left-0 -bottom-0.5 h-px transition-all duration-300 ease-out"
                          style={{
                            background: "var(--ink)",
                            width: hoveredIndex === index ? "100%" : "0%",
                          }}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className="w-4 h-4 transition-all duration-300 ease-out"
                      style={{
                        color: "var(--ink)",
                        opacity: hoveredIndex === index ? 0.7 : 0,
                        transform: hoveredIndex === index
                          ? "translate(0,0)"
                          : "translate(-6px,6px)",
                      }}
                    />
                  </div>

                  {/* Description — always visible, turns ink on hover */}
                  <p
                    className="font-note text-sm mt-1 leading-relaxed"
                    style={{ color: "var(--ink)", opacity: 0.8 }}
                  >
                    {project.description}
                  </p>

                  {/* Links — fade in on hover */}
                  <div
                    className="flex gap-4 mt-2 transition-all duration-300"
                    style={{ opacity: hoveredIndex === index ? 1 : 0, pointerEvents: hoveredIndex === index ? "auto" : "none" }}
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="font-hand text-sm ink hand-underline hover:opacity-70 transition-opacity"
                      >
                        live ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-hand text-sm ink hand-underline hover:opacity-70 transition-opacity"
                      >
                        github ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Year — always visible, turns ink on hover */}
                <span
                  className="font-mono text-xs tabular-nums shrink-0 mt-1 transition-colors duration-300"
                  style={{ color: hoveredIndex === index ? "var(--ink)" : "var(--paper-foreground)" }}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom border */}
        <div className="border-t border-ink/20" />
      </div>

      {/* Load more / show less button */}
      <div className="mt-8 flex justify-center">
        <motion.button
          onClick={() => setShowMore((s) => !s)}
          whileHover={{ scale: 1.04, rotate: showMore ? 0 : -1 }}
          whileTap={{ scale: 0.97 }}
          className="relative font-hand text-xl ink px-8 py-3 transition-all duration-200"
          style={{
            background: "var(--color-paper)",
            border: "2px solid var(--color-ink)",
            borderRadius: "14px 18px 16px 20px / 18px 14px 20px 16px",
            boxShadow: "3px 3px 0 var(--color-ink)",
          }}
        >
          {showMore ? "← show less" : `see ${allProjects.length - INITIAL_COUNT} more projects ↓`}
          <span className="absolute -top-2 -right-2 font-hand text-sm ink opacity-60">✦</span>
        </motion.button>
      </div>
    </section>
  )
}
