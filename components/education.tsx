"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const education = [
    {
        institution: "Universidad Argentina de la Empresa (UADE)",
        degree: "Computer Engineering",
        period: "2023 - Present",
        description:
            "Focusing on software development, cybersecurity, and system optimization. Participating in academic projects using agile methodologies.",
        skills: ["Java", "Python", "Algorithms", "Data Structures", "Cybersecurity", "Software Engineering"],
    },
    // You can add more education entries here
]

export function Education() {
    return (
        <section id="education" className="scroll-mt-16 liquid-halo">
            <h2 className="section-title">Education</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="liquid-glass-premium p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-medium">{edu.degree}</h3>
                                <p className="text-muted-foreground">{edu.institution}</p>
                            </div>
                            <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
                                {edu.period}
                            </Badge>
                        </div>
                        <p className="mb-6 text-lg">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary" className="rounded-full">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
