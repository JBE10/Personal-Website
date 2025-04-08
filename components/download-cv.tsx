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
                href="/Juan-Bautista-Espino-CV.pdf"
                download
                aria-label="Descargar CV"
            >
                <Download className="h-5 w-5" />
                Download CV
            </a>
        </Button>
    )
}