"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const getSectionFromScroll = () => {
      setScrolled(window.scrollY > 10)

      const navOffset = 140
      const sections = navItems
          .map((item) => ({
            id: item.href.replace("#", ""),
            el: document.querySelector(item.href) as HTMLElement | null,
          }))
          .filter((entry) => Boolean(entry.el)) as Array<{ id: string; el: HTMLElement }>

      if (!sections.length) return

      // Use a point within the visible viewport for smoother active-section transitions.
      const viewportProbe = window.scrollY + navOffset + window.innerHeight * 0.2

      // Pick the latest section whose top is above the probe point.
      let currentId = sections[0].id
      for (const section of sections) {
        if (viewportProbe >= section.el.offsetTop) {
          currentId = section.id
        }
      }

      setActiveSection((prev) => (prev === currentId ? prev : currentId))
    }

    getSectionFromScroll()
    // Re-run once layout settles after hydration/content paint.
    window.requestAnimationFrame(getSectionFromScroll)

    window.addEventListener("scroll", getSectionFromScroll)
    window.addEventListener("resize", getSectionFromScroll)

    return () => {
      window.removeEventListener("scroll", getSectionFromScroll)
      window.removeEventListener("resize", getSectionFromScroll)
    }
  }, [])

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event from bubbling up
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    // Only handle internal anchor links
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        setActiveSection(href.replace("#", ""))
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
  }

  return (
      <nav
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
              isMenuOpen
                  ? "border-b border-border/60 bg-background"
                  : scrolled
                      ? "backdrop-blur-xl border-b border-border/60 bg-background/55 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)]"
                      : "bg-transparent"
          }`}
      >
        <div className="apple-container hidden md:grid relative h-16 grid-cols-[1fr_auto_1fr] items-center">
          <div className="font-medium text-xl">
            <a href="#" className="p-0 font-semibold text-xl tracking-tight">
              JBE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 justify-self-center">
            <div className="rounded-full border border-border/60 bg-background/45 p-1 backdrop-blur-xl">
              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                      <a
                          key={item.href}
                          href={item.href}
                          className={`rounded-full px-3 py-1.5 text-sm transition-all ${
                              isActive
                                  ? "bg-primary text-primary-foreground shadow-sm"
                                  : "text-foreground/75 hover:text-foreground hover:bg-secondary/55"
                          }`}
                          onClick={(e) => handleNavLinkClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 justify-self-end">
            <a
                href="/CV/CV-Juan-Bautista-Espino.pdf"
                download="CV-Juan-Bautista-Espino.pdf"
                className="liquid-button"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="apple-container md:hidden h-14 flex items-center justify-between">
          <span className="w-10" aria-hidden="true" />
          <a href="#" className="font-semibold text-lg tracking-tight">
            JBE
          </a>
          <button
              type="button"
              className="rounded-full h-10 w-10 flex items-center justify-center text-foreground border border-border/60 bg-background/85"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
            <div className="fixed inset-0 z-[70] md:hidden bg-background">
              <div className="apple-container h-14 flex items-center justify-between border-b border-border/60">
                <span className="w-10" aria-hidden="true" />
                <a href="#" className="font-semibold text-lg tracking-tight" onClick={() => setIsMenuOpen(false)}>
                  JBE
                </a>
                <button
                    type="button"
                    className="rounded-full h-10 w-10 flex items-center justify-center text-foreground border border-border/60 bg-background"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="apple-container flex h-[calc(100vh-3.5rem)] flex-col pt-4 pb-8 overflow-y-auto">
                <div className="flex flex-col">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.replace("#", "")
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`border-b border-border/45 py-4 text-3xl tracking-tight transition-colors ${
                                isActive ? "text-foreground font-semibold" : "text-foreground/70"
                            }`}
                            onClick={(e) => handleNavLinkClick(e, item.href)}
                        >
                          {item.name}
                        </a>
                    )
                  })}
                </div>

                <div className="mt-auto flex items-center gap-3">
                  <ThemeToggle />
                  <a
                      href="/CV/CV-Juan-Bautista-Espino.pdf"
                      download="CV-Juan-Bautista-Espino.pdf"
                      className="liquid-button w-full justify-center py-3"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
        )}
      </nav>
  )
}
