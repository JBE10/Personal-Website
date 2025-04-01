"use client"

import Image from "next/image"
import {Download, Github, Linkedin, Mail} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                    {/* Reemplaza con tu ruta real de la imagen */}
                    <Image src="/images/juan-bautista-espino.jpg" alt="Profile Photo" fill className="object-cover" priority />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Juan Bautista Espino</h1>
                    <p className="text-xl text-muted-foreground">Backend Developer & Cyber Analyst</p>
                </div>
            </div>

            {/* Contenedor de botones */}
            <div className="flex items-center gap-4">
                {/* Botón de descarga de CV */}
                <Button size="lg" className="flex items-center gap-2" asChild>
                    <a href="/Juan-Bautista-Espino-CV.pdf" download>
                        <Download className="h-4 w-4" />
                        Download CV
                    </a>
                </Button>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <a href="mailto:bautiespino@icloud.com" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <a
                            href="https://linkedin.com/in/your-linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <a href="https://github.com/JBE10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}