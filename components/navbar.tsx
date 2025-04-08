"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuRendered, setMenuRendered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
      }, 300) // Match this with the CSS transition duration
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
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
  }

  return (
      <nav
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
              scrolled || isMenuOpen ? "bg-background shadow-sm border-b" : "bg-transparent"
          }`}
      >
        <div className="apple-container flex h-16 items-center justify-between">
          <div className="font-medium text-xl">
            <a href="#" className="p-0 font-medium text-xl">
              JBE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
                href="#about"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                onClick={(e) => handleNavLinkClick(e, "#about")}
            >
              About Me
            </a>
            <a
                href="#projects"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                onClick={(e) => handleNavLinkClick(e, "#projects")}
            >
              Projects
            </a>
            <a
                href="#skills"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                onClick={(e) => handleNavLinkClick(e, "#skills")}
            >
              Skills
            </a>
            <a
                href="#certifications"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                onClick={(e) => handleNavLinkClick(e, "#certifications")}
            >
              Certifications
            </a>
            <a
                href="#education"
                className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                onClick={(e) => handleNavLinkClick(e, "#education")}
            >
              Education
            </a>

            <a
                href="/Juan-Bautista-Espino-CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
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
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            >
              <Menu className="h-5 w-5" />
            </span>
              <span
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
              >
              <X className="h-5 w-5" />
            </span>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu with solid background matching theme */}
        {menuRendered && (
            <div
                className={`fixed inset-0 z-[55] md:hidden transition-all duration-300 ease-in-out bg-background border-b ${
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
              <div className="pt-20 pb-8 px-6 flex flex-col space-y-6">
                {[
                  { name: "About Me", href: "#about" },
                  { name: "Projects", href: "#projects" },
                  { name: "Skills", href: "#skills" },
                  { name: "Certifications", href: "#certifications" },
                  { name: "Education", href: "#education" },
                ].map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`text-2xl font-medium text-foreground transition-all duration-300 ease-in-out transform ${
                            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                ))}
                <a
                    href="/Juan-Bautista-Espino-CV.pdf"
                    download
                    className={`inline-flex items-center justify-center rounded-full px-4 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform w-full ${
                        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                    style={{ transitionDelay: "250ms" }}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </div>
            </div>
        )}
      </nav>
  )
}
