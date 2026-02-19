"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "2024",
    description:
        "Advanced understanding of Python data structures including lists, dictionaries, tuples, and their applications in solving complex programming problems.",
    link: "https://coursera.org/share/b5f0845d7d96835236763f39e70d0eb5",
  },
  {
    title: "Automate Cybersecurity Tasks with Python",
    issuer: "Google",
    date: "2024",
    description:
        "Skills in automating security tasks using Python, including log analysis, threat detection, and security monitoring.",
    link: "https://coursera.org/share/586dcab40aed23180e94e58bd16ce829",
  },
  {
    title: "Assets, Threats, and Vulnerabilities",
    issuer: "Google",
    date: "2024",
    description:
        "Comprehensive knowledge of identifying and managing digital assets, recognizing threats, and addressing vulnerabilities in IT systems.",
    link: "https://coursera.org/share/98c7f51848949f31e2d15f9219e637d2",
  },
  {
    title: "Linux and SQL",
    issuer: "Google",
    date: "2024",
    description:
        "Proficiency in Linux system administration and SQL database management, including command-line operations and database queries.",
    link: "https://coursera.org/share/9cb323ddc385c28be4bd7ce30bc9fd37",
  },
  {
    title: "Networks and Network Security",
    issuer: "Google",
    date: "2024",
    description:
        "Understanding of network architecture, protocols, and security measures to protect network infrastructure from threats.",
    link: "https://coursera.org/share/95f74cc8575b9b7a8cfc0aeda372b4d2",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Coursera",
    date: "2023",
    description:
        "Skills in identifying, assessing, and managing security risks in IT environments, including risk mitigation strategies.",
    link: "https://coursera.org/share/71f45b7b9216b2cc95e555812bffdae9",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "2023",
    description:
        "Core understanding of cybersecurity principles, common threats, defense mechanisms, and security best practices.",
    link: "https://coursera.org/share/9479a2307915509ca33a7a7034da5e03",
  },
  {
    title: "English UK - B2",
    issuer: "British Council",
    date: "2022",
    description:
        "Upper-intermediate English language proficiency certification, demonstrating strong communication skills in professional contexts.",
    link: "#main",
  },

]

export function Certifications() {
  return (
      <section id="certifications" className="scroll-mt-16 liquid-halo">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
              <motion.div
                  key={index}
                  className="liquid-glass-premium overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium">{cert.title}</h3>
                    <span className="text-xs bg-secondary rounded-full px-2 py-0.5">{cert.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm mb-4 line-clamp-3">{cert.description}</p>
                  <Button variant="outline" size="sm" className="rounded-full w-full" asChild>
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </motion.div>
          ))}
        </div>
      </section>
  )
}
