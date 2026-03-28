import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  return (
    <section id="home" className="section-anchor section-card rise-in relative overflow-hidden px-6 py-14 sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0f766e]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#e57434]/15 blur-2xl" />

      <div className="relative mx-auto flex min-h-[62vh] max-w-3xl flex-col items-center justify-center text-center">
        <div className="float-soft rise-in stagger-1">
          <Image
            src="/profile.png"
            width={168}
            height={168}
            alt="Prashant"
            className="mb-7 rounded-full border-4 border-white/80 object-cover shadow-[0_18px_34px_rgba(19,33,38,0.18)]"
            priority
          />
        </div>

        <p className="rise-in stagger-2 mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">
          Data + Intelligence Builder
        </p>

        <h1 className="rise-in stagger-2 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="accent-text">Prashant</span>
        </h1>

        <p className="subtle-copy rise-in stagger-3 mt-5 max-w-2xl text-base sm:text-lg">
          Machine Learning and Data Science student focused on building practical AI systems,
          reliable backends, and automation tools that are useful in real-world workflows.
        </p>

        <div className="rise-in stagger-4 mt-8 flex gap-4 text-2xl text-[#20363c] sm:gap-5">
          <a
            href="https://github.com/Prashant-bro"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#1321262a] bg-white/70 p-3 transition-all duration-200 hover:-translate-y-1 hover:text-[#0f766e]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prashant-cs-student"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#1321262a] bg-white/70 p-3 transition-all duration-200 hover:-translate-y-1 hover:text-[#0f766e]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:prashant201006@email.com"
            className="rounded-full border border-[#1321262a] bg-white/70 p-3 transition-all duration-200 hover:-translate-y-1 hover:text-[#0f766e]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  )
}