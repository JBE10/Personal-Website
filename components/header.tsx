"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
          {/* Replace with your actual photo path */}
          <Image src="/images/profile-photo.jpg" alt="Profile Photo" fill className="object-cover" priority />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Juan Bautista Esteban</h1>
          <p className="text-xl text-muted-foreground">Backend Developer & Cyber Analyst</p>
        </div>
      </div>
      <Button size="lg" className="flex items-center gap-2" asChild>
        <a href="/resume.pdf" download>
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </Button>
    </div>
  )
}

