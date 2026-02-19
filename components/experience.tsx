"use client"

import { motion } from "framer-motion"

const impactItems = [
    {
        title: "Backend and Security Engineering",
        bullets: [
            "Built API-first services with authentication, target management, and auditable workflows in security-focused projects.",
            "Applied secure-by-default patterns, including controlled execution flows and immutable evidence handling.",
            "Worked with asynchronous processing and service orchestration for scalable backend execution.",
        ],
    },
    {
        title: "Data and Automation",
        bullets: [
            "Designed automation scripts to collect and normalize large sets of operational and pricing data.",
            "Generated structured outputs for trend and variation analysis to support decision-making.",
            "Improved reliability with validation-focused processing and reproducible data pipelines.",
        ],
    },
    {
        title: "Product and Delivery Mindset",
        bullets: [
            "Translated technical ideas into practical products with clear user flows and maintainable architecture.",
            "Prioritized readability, modular design, and incremental improvements in personal and academic projects.",
            "Collaborated with agile principles to keep delivery iterative and outcome-driven.",
        ],
    },
]

export function Experience() {
    return (
        <section id="experience" className="scroll-mt-16 liquid-halo">
            <h2 className="section-title">Experience & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {impactItems.map((item, index) => (
                    <motion.article
                        key={item.title}
                        className="liquid-glass-premium p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                            {item.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
