"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  categories: string[]
}

const featuredProjects: Project[] = [
  {
    title: "OSINT Platform",
    description:
        "Python-based OSINT platform for passive web investigations with target management, auditable jobs, and normalized evidence workflows.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    github: "https://github.com/JBE10/osint-platform",
    categories: ["Backend", "Security", "Python"],
  },
  {
    title: "HOPPO Backend",
    description:
        "Backend service for a PC components e-commerce project, focused on product management, business logic, and scalable API design.",
    tags: ["Java", "Spring Boot", "REST API", "E-commerce", "Docker"],
    github: "https://github.com/JBE10/HOPPO_Backend",
    categories: ["Backend", "Java"],
  },
  {
    title: "IPC Tracker",
    description:
        "Daily IPC tracker that collects supermarket price data in Argentina and generates structured datasets for price variation analysis.",
    tags: ["Python", "Data Analysis", "CSV", "Automation", "Scraping"],
    github: "https://github.com/JBE10/IPC",
    categories: ["Data", "Python"],
  },
  {
    title: "LifeOps",
    description:
        "Personal SaaS concept to manage life operations with business-style tracking for training, finance, and productivity metrics.",
    tags: ["Next.js", "TypeScript", "SaaS", "Productivity", "Dashboard"],
    github: "https://github.com/JBE10/lifeops",
    categories: ["Frontend", "Product"],
  },
  {
    title: "Graph Manipulation and Analysis",
    description:
        "Java implementation of graph structures and traversal strategies, including custom priority queue behavior for algorithmic exploration.",
    tags: ["Java", "Graphs", "Algorithms", "Data Structures"],
    github: "https://github.com/JBE10/Graph-Manipulation-and-Analysis",
    categories: ["Java", "Data"],
  },
]

const otherProjects: Project[] = [
  {
    title: "Minimarket Management in Java",
    description:
        "Desktop Java application to manage minimarket inventory with catalog operations, persisted data, and resilient validation flow.",
    tags: ["Java", "Swing", "Serialization", "Exceptions", "JDialog"],
    github: "https://github.com/JBE10/Minimarket-Management",
    categories: ["Java"],
  },
  {
    title: "Personal Website",
    description:
        "Responsive portfolio website focused on clean UX, clear technical storytelling, and recruiter-friendly navigation.",
    tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/JBE10/Personal-Website",
    categories: ["Frontend"],
  },
  {
    title: "Truck Data Management and Analysis",
    description:
        "Python CLI project to manage and analyze truck operational data, including travel times, distances, and load reports.",
    tags: ["Python", "Algorithms", "Data Analysis", "Insertion Sort"],
    github: "https://github.com/JBE10/Truck-Data-Management-and-Analysis",
    categories: ["Data", "Python"],
  },
  {
    title: "Tourism Accommodation Management",
    description:
        "Java management system for tourism accommodations with customer records, input validation, and persistent data handling.",
    tags: ["Java", "OOP", "ArrayList", "Data Management", "Tourism"],
    github: "https://github.com/JBE10/Tourism-Accommodation-Management",
    categories: ["Java"],
  },
]

const filterOptions = ["All", "Backend", "Security", "Data", "Java", "Python", "Frontend"]

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const matchesFilter = (project: Project) =>
      selectedFilter === "All" || project.categories.includes(selectedFilter)

  const filteredFeatured = useMemo(
      () => featuredProjects.filter(matchesFilter),
      [selectedFilter],
  )
  const filteredOther = useMemo(
      () => otherProjects.filter(matchesFilter),
      [selectedFilter],
  )

  return (
      <section id="projects" className="scroll-mt-16 liquid-halo">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          A selected set of projects that best represent my backend, security, and data-focused work.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter
            return (
                <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedFilter(filter)}
                    className={`liquid-badge transition-all ${
                        isActive ? "bg-primary text-primary-foreground border-primary/30" : "hover:bg-secondary/65"
                    }`}
                >
                  {filter}
                </button>
            )
          })}
        </div>

        {filteredFeatured.length > 0 && (
            <>
              <h3 className="text-2xl font-medium mb-6">Featured Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
                {filteredFeatured.map((project, index) => (
              <motion.div
                  key={project.title}
                  className="liquid-glass-premium overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
              >
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full w-full" asChild>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </motion.div>
                ))}
              </div>
            </>
        )}

        {filteredOther.length > 0 && (
            <>
              <h3 className="text-2xl font-medium mb-6">Other Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredOther.map((project, index) => (
              <motion.div
                  key={project.title}
                  className="liquid-glass-premium overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
              >
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full w-full" asChild>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </motion.div>
                ))}
              </div>
            </>
        )}

        {filteredFeatured.length === 0 && filteredOther.length === 0 && (
            <p className="text-center text-muted-foreground">
              No projects match this filter yet.
            </p>
        )}
      </section>
  )
}
