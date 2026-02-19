"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export function AboutMe() {
    return (
        <section id="about" className="scroll-mt-16 liquid-halo">
            <h2 className="section-title">About Me</h2>
            <motion.div
                className="max-w-3xl mx-auto liquid-glass-premium p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="prose prose-slate dark:prose-invert max-w-none text-lg space-y-4">
                    <p>
                        I am a <strong>Computer Engineering student at UADE</strong> focused on{" "}
                        <strong>backend development</strong> and <strong>cybersecurity</strong>. I enjoy building reliable services,
                        clean data flows, and secure-by-default solutions.
                    </p>
                    <p>
                        I work mainly with <strong>Java, Python, SQL, TypeScript, and React</strong>. Across academic and personal
                        projects, I apply <strong>OOP, algorithms, and data structures</strong> to deliver maintainable software with
                        practical problem-solving.
                    </p>
                    <p>
                        I am currently looking for <strong>internship or junior backend opportunities</strong> where I can contribute
                        to product development while continuing to grow in software engineering and cloud security.
                    </p>
                    <div className="mt-6 flex items-center">
                        <a
                            href="mailto:bautiespino@icloud.com"
                            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Mail className="h-5 w-5 mr-2" />
                            <span>bautiespino@icloud.com</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
