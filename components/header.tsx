"use client"

import Image from "next/image"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Header() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-24 pb-16">
            <div className="apple-container">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
                            {/* Replace with your actual photo path */}
                            <Image src="/images/juan-bautista-espino.jpg" alt="Profile Photo" fill className="object-cover" priority />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-semibold mb-2">Juan Bautista Espino</h1>
                            <p className="text-xl text-muted-foreground">Backend Developer & Network Security Analyst</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-6 py-6 h-auto flex items-center gap-2"
                        >
                            <a href="/Juan-Bautista-Espino-CV.pdf" download>
                                <Download className="h-5 w-5" />
                                Download CV
                            </a>
                        </Button>
                        <div className="flex items-center gap-4">
        <Button variant="secondary" size="icon" className="rounded-full h-10 w-10" asChild type="button">
            <a href="mailto:bautiespino@icloud.com" aria-label="Email">
                <Mail className="h-5 w-5" />
            </a>
        </Button>
                            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10" asChild>
                                <a
                                    href="https://www.linkedin.com/in/jbespino/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10" asChild>
                                <a href="https://github.com/JBE10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
    )
}
