export default function ResumeViewer() {
  return (
    <section id="resume" className="section-anchor section-card rise-in px-6 py-12 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f766e]">Resume</p>
        <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
          Experience, projects, and core technical skills.
        </h1>

        <div className="rise-in stagger-2 mt-8 overflow-hidden rounded-2xl border border-[#13212624] bg-white/85 shadow-[0_16px_36px_rgba(19,33,38,0.12)]">
          <iframe
            src="/resume.pdf"
            title="Prashant resume"
            className="h-[68vh] min-h-[460px] w-full"
          />
        </div>

        <a
          href="/resume.pdf"
          download
          className="rise-in stagger-3 mt-8 inline-flex items-center rounded-xl bg-[#132126] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f766e]"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}