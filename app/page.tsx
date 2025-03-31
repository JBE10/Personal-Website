import { Header } from "@/components/header"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { DownloadCV } from "@/components/download-cv"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-16">
        <AboutMe />
        <Projects />
        <Certifications />
        <DownloadCV />
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Juan Bautista Esteban. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

