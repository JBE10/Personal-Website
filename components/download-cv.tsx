import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DownloadCV() {
    return (
        <Button
            asChild
            size="lg"
            className="rounded-full px-6 py-6 h-auto gap-2"
        >
            <a
                href="/CV/CV-Juan-Bautista-Espino.pdf"
                download="CV-Juan-Bautista-Espino.pdf"
                aria-label="Solicitar CV"
            >
                <Download className="h-5 w-5" />
                Download CV
            </a>
        </Button>
    )
}