import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCV() {
  return (
    <section id="download" className="scroll-mt-16 flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-4">Download CV</h2>
      <p className="text-center text-muted-foreground max-w-2xl mb-6">
        Download my complete resume to learn more about my experience, education, and technical skills.
      </p>
      <Button size="lg" className="flex items-center gap-2" asChild>
        <a href="/resume.pdf" download>
          <Download className="h-4 w-4" />
          Download CV (English)
        </a>
      </Button>
    </section>
  )
}

