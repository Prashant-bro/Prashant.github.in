"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

const navLinks = [
  { sectionId: "home", label: "Home" },
  { sectionId: "about", label: "About" },
  { sectionId: "projects", label: "Projects" },
  { sectionId: "resume", label: "Resume" },
  { sectionId: "certifications", label: "Certs" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (!isHomePage) {
      return
    }

    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "")
      if (hashId) {
        setActiveSection(hashId)
      }
    }

    syncFromHash()

    const sections = navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener("hashchange", syncFromHash)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", syncFromHash)
    }
  }, [isHomePage])

  const routeToSection = useMemo(
    () => ({
      "/": "home",
      "/about": "about",
      "/projects": "projects",
      "/resume": "resume",
    }),
    []
  )

  const routeActiveSection = routeToSection[pathname as keyof typeof routeToSection] ?? "home"

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-[0_14px_44px_rgba(19,33,38,0.12)] backdrop-blur-md sm:px-6">
        <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">
          <span className="accent-text">Prashant</span>
        </h1>

        <div className="flex items-center gap-1 rounded-xl border border-[#1321261f] bg-white/70 p-1 text-sm font-semibold text-[#2f4a50] sm:gap-2">
          {navLinks.map((link) => {
            const href =
              link.sectionId === "home"
                ? "/"
                : isHomePage
                  ? `#${link.sectionId}`
                  : `/#${link.sectionId}`

            const isActive = isHomePage
              ? activeSection === link.sectionId
              : routeActiveSection === link.sectionId

            return (
              <Link
                key={link.sectionId}
                href={href}
                onClick={() => {
                  if (isHomePage) {
                    setActiveSection(link.sectionId)
                  }
                }}
                className={`rounded-lg px-3 py-2 transition-all duration-200 ${
                  isActive
                    ? "bg-[#132126] text-white shadow"
                    : "hover:bg-white hover:text-[#0f766e]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}