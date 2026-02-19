"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { AboutMe } from "@/components/about-me"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { FloatingContactCta } from "@/components/floating-contact-cta"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <motion.main
                className="apple-container py-16 space-y-32"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div variants={sectionVariants}>
                    <AboutMe />
                </motion.div>

                <motion.div variants={sectionVariants}>
                    <Projects />
                </motion.div>

                <motion.div variants={sectionVariants}>
                    <Experience />
                </motion.div>

                <motion.div variants={sectionVariants}>
                    <Skills />
                </motion.div>

                <motion.div variants={sectionVariants}>
                    <Certifications />
                </motion.div>

                <motion.div variants={sectionVariants}>
                    <Education />
                </motion.div>
            </motion.main>

            <footer id="contact" className="border-t py-12 scroll-mt-16">
                <div className="apple-container flex flex-col items-center gap-6">
                    <div className="flex items-center gap-6">
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10" asChild>
                            <a href="https://github.com/JBE10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10" asChild>
                            <a
                                href="https://www.linkedin.com/in/jbespino/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10" asChild>
                            <a href="mailto:bautiespino@icloud.com" aria-label="Email">
                                <Mail className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Juan Bautista Espino. All rights reserved.
                    </div>
                </div>
            </footer>

            <FloatingContactCta />
        </div>
    )
}
