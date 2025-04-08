"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Define skill categories and their items
const skillCategories = [
    {
        name: "Programming Languages",
        skills: ["C++","Python", "Java", "TypeScript","JavaScript", "HTML", "CSS"],
    },
    {
        name: "Databases",
        skills: ["MongoDB", "MySQL", "Microsoft SQL Server"],
    },
    {
        name: "Frontend & Tools",
        skills: ["React", "Tailwind CSS"],
    },
    {
        name: "Operating Systems",
        skills: ["Linux (Kali)", "Windows", "macOS"],
    },
]

export function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

    return (
        <section id="skills" className="scroll-mt-16">
            <h2 className="section-title">Technical Skills</h2>

            <div className="space-y-20">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h3 className="text-2xl font-medium text-center">{category.name}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    className="relative"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * skillIndex,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    onHoverStart={() => setHoveredSkill(skill)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                >
                                    <div
                                        className={`
                      h-20 flex items-center justify-center rounded-2xl px-6 py-4
                      ${hoveredSkill === skill ? "bg-primary/10 text-primary" : "bg-secondary/80 text-foreground/80"}
                      transition-all duration-300 ease-out
                      backdrop-blur-sm
                    `}
                                    >
                                        <span className="text-base font-medium">{skill}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
