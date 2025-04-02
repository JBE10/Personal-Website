import { Header } from "@/components/header"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Education } from "@/components/education"
import {Github, Linkedin, Mail} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8 space-y-16">
                <AboutMe />
                <Projects />
                <Certifications />
                <Education />
            </main>

            <footer className="border-t py-6">
                <div className="container mx-auto px-4 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="rounded-full" asChild>
                            <a href="mailto:bautiespino@icloud.com" aria-label="Email">
                                <Mail className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://github.com/JBE10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://www.linkedin.com/in/jbespino/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>

                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Juan Bautista Espino. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

