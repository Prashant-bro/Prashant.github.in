"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { sitePath } from "./sitePath"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const navLinks = [
  { sectionId: "home", label: "Home" },
  { sectionId: "about", label: "About" },
  { sectionId: "projects", label: "Projects" },
  { sectionId: "resume", label: "Resume" },
  { sectionId: "certifications", label: "Certs" },
]

/** Map pathname → active nav key for dedicated pages */
const routeToSection: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/projects": "projects",
  "/resume": "resume",
  ...(basePath
    ? {
        [basePath]: "home",
        [`${basePath}/`]: "home",
        [`${basePath}/resume`]: "resume",
      }
    : {}),
}

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/" || pathname === basePath || pathname === `${basePath}/`
  const [activeSection, setActiveSection] = useState("home")
  const visibleMap = useRef<Map<string, IntersectionObserverEntry>>(new Map())

  /**
   * Pick the best section to highlight.
   * Strategy: among all currently-intersecting sections, choose the one whose
   * top edge is closest to (and above) the top of the viewport. This avoids
   * the "tall Projects section stays active even after Resume scrolls in" bug.
   */
  const pickActive = useCallback(() => {
    let best: IntersectionObserverEntry | null = null
    visibleMap.current.forEach((entry) => {
      if (!entry.isIntersecting) return
      if (!best) {
        best = entry
        return
      }
      // Prefer the entry whose top edge is nearest to (but ideally at or above)
      // the top of the viewport — i.e. smallest positive boundingClientRect.top,
      // or the one that's already scrolled past the top (negative top but closest to 0).
      const bestTop = Math.abs(best.boundingClientRect.top)
      const curTop = Math.abs(entry.boundingClientRect.top)
      if (curTop < bestTop) {
        best = entry
      }
    })
    if (best && (best as IntersectionObserverEntry).target?.id) {
      setActiveSection((best as IntersectionObserverEntry).target.id)
    }
  }, [])

  useEffect(() => {
    if (!isHomePage) return

    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "")
      if (hashId) setActiveSection(hashId)
    }
    syncFromHash()

    const sections = navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleMap.current.set(entry.target.id, entry)
        })
        pickActive()
      },
      {
        // Detection band: from 15% below the top to 15% above the bottom.
        // This means roughly a 70%-tall band in the centre of the viewport,
        // biased towards the top so that sections highlight as they scroll in.
        rootMargin: "-15% 0px -15% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener("hashchange", syncFromHash)

    return () => {
      observer.disconnect()
      visibleMap.current.clear()
      window.removeEventListener("hashchange", syncFromHash)
    }
  }, [isHomePage, pickActive])

  const routeActiveSection = routeToSection[pathname] ?? "home"

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
                ? sitePath("/")
                : link.sectionId === "resume"
                  ? sitePath("/resume")
                : isHomePage
                  ? `#${link.sectionId}`
                  : sitePath(`/#${link.sectionId}`)

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
                    ? "bg-[#14b8a6] text-white shadow"
                    : "hover:bg-white hover:text-[#76110f]"
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