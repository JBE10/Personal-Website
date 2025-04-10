"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export function AboutMe() {
    return (
        <section id="about" className="scroll-mt-16">
            <h2 className="section-title">About Me</h2>
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="prose prose-slate dark:prose-invert max-w-none text-lg space-y-4">
                    <p>
                        I am an <strong>Advanced Computer Engineering student</strong> at UADE with a strong focus on{" "}
                        <strong>backend development</strong> and <strong>cybersecurity</strong>. My expertise lies in designing{" "}
                        <strong>secure and scalable systems</strong>, optimizing software performance through algorithmic solutions,
                        and ensuring robust <strong>data integrity</strong>.
                    </p>


                    <p>
                        I hold certifications in{" "}
                        <strong>Google Cybersecurity, Linux/SQL, and Microsoft Azure Security (AZ-500)</strong>, which have
                        strengthened my ability to implement security best practices, manage cloud infrastructures, and safeguard
                        systems against cyber threats.
                    </p>
                    <p>
                        Proficient in <strong>Java, Python, and SQL</strong>, I have developed multiple academic projects applying{" "}
                        <strong>object-oriented programming</strong>, data structures, and database management. I am experienced in{" "}
                        <strong>agile methodologies</strong>, particularly <strong>Scrum</strong>, to efficiently develop and deploy
                        scalable applications.
                    </p>
                    <p>
                        Passionate about problem-solving and system optimization, I continuously seek to improve my technical skills
                        and apply innovative solutions to complex challenges in <strong>backend development</strong> and{" "}
                        <strong>cybersecurity</strong>.
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
