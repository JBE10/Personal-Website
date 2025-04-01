import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
          ))}
        </div>
      </section>
  )
}

