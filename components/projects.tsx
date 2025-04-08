"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Minimarket Management in Java",
    description:
        "Java application for managing a minimarket product catalog. Features a graphical user interface, data persistence, and custom exception handling.",
    tags: ["Java", "Swing", "Serialization", "Exceptions", "JDialog"],
    github: "https://github.com/JBE10/Minimarket-Management",
  },
  {
    title: "Personal Website",
    description:
        "A portfolio website built with React, TypeScript, and JavaScript, featuring sections for introduction, skills, projects, and contact.",
    tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/JBE10/Personal-Website",
  },
  {
    title: "Truck Data Management and Analysis",
    description:
        "Python program for managing and analyzing truck data, including travel times, distances, and loads. Features average calculations, sorting, and report generation.",
    tags: ["Python", "Algorithms", "Data Analysis", "Insertion Sort"],
    github: "https://github.com/JBE10/Truck-Data-Management-and-Analysis",
  },
  {
    title: "Graph Manipulation and Analysis",
    description:
        "Java implementation and analysis of graph data structures. Includes advanced operations, custom priority queues, and resource optimization.",
    tags: ["Java", "Graphs", "Algorithms", "Data Structures"],
    github: "https://github.com/JBE10/Graph-Manipulation-and-Analysis",
  },
  {
    title: "Tourism Accommodation Management",
    description:
        "Java application for managing locations, accommodations, and customers in the tourism sector. Features list management, validations, and data persistence.",
    tags: ["Java", "OOP", "ArrayList", "Data Management", "Tourism"],
    github: "https://github.com/JBE10/Tourism-Accommodation-Management",
  },
]

export function Projects() {
  return (
      <section id="projects" className="scroll-mt-16">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
              <motion.div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-border/80"
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
      </section>
  )
}
