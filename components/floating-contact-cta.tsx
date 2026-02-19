"use client"

import { Mail } from "lucide-react"

export function FloatingContactCta() {
    return (
        <a
            href="mailto:bautiespino@icloud.com?subject=Contact%20from%20Portfolio"
            className="fixed bottom-5 right-5 z-40 liquid-button px-4 py-3 shadow-xl"
            aria-label="Contact me by email"
        >
            <Mail className="h-4 w-4 mr-2" />
            Contact Me
        </a>
    )
}
