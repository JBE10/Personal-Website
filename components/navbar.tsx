"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuRendered, setMenuRendered] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const getSectionFromScroll = () => {
      const navOffset = 140
      const sections = navItems
          .map((item) => ({
            id: item.href.replace("#", ""),
            el: document.querySelector(item.href) as HTMLElement | null,
          }))
          .filter((entry) => Boolean(entry.el)) as Array<{ id: string; el: HTMLElement }>

      if (!sections.length) return

      const scrollPosition = window.scrollY + navOffset

      // Pick the latest section whose top is above the nav offset.
      let currentId = sections[0].id
      for (const section of sections) {
        if (scrollPosition >= section.el.offsetTop) {
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

  // Handle menu open/close with animation timing
  useEffect(() => {
    if (isMenuOpen) {
      setMenuRendered(true)
      document.body.style.overflow = "hidden"
    } else {
      // Delay removing the menu from DOM to allow for exit animation
      const timer = setTimeout(() => {
        setMenuRendered(false)
      }, 500) // Increased from 300ms to 500ms for smoother exit
      document.body.style.overflow = ""
      return () => clearTimeout(timer)
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
              scrolled || isMenuOpen
                  ? "backdrop-blur-xl border-b border-border/60 bg-background/55 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)]"
                  : "bg-transparent"
          }`}
      >
        <div className="apple-container flex h-16 items-center justify-between">
          <div className="font-medium text-xl">
            <a href="#" className="p-0 font-semibold text-xl tracking-tight">
              JBE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
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
            <a
                href="mailto:bautiespino@icloud.com?subject=CV%20Request%20-%20Juan%20Bautista%20Espino"
                className="liquid-button"
            >
              <Download className="h-4 w-4 mr-2" />
              Request CV
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
                type="button"
                className="rounded-full relative z-[60] p-2 text-foreground"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
            <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            >
              <Menu className="h-5 w-5" />
            </span>
              <span
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
              >
              <X className="h-5 w-5" />
            </span>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu with gentler animations */}
        {menuRendered && (
            <div
                className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-in-out bg-background/90 backdrop-blur-xl border-b ${
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
                }`}
            >
              <div className="pt-20 pb-8 px-6 flex flex-col space-y-6">
                {navItems.map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`text-2xl font-medium transition-all duration-400 ease-out transform rounded-xl px-3 py-2 ${
                            activeSection === item.href.replace("#", "")
                                ? "text-primary bg-primary/10 border border-primary/25"
                                : "text-foreground"
                        } ${
                            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-5px]"
                        }`}
                        style={{ transitionDelay: `${index * 30}ms` }}
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                ))}
                <a
                    href="mailto:bautiespino@icloud.com?subject=CV%20Request%20-%20Juan%20Bautista%20Espino"
                    className={`liquid-button py-3 text-base w-full transition-all duration-400 ease-out transform ${
                        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-5px]"
                    }`}
                    style={{ transitionDelay: "150ms" }}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Request CV
                </a>
              </div>
            </div>
        )}
      </nav>
  )
}
