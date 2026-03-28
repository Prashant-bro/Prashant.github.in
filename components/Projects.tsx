export default function Projects() {
  const projectItems = [
    {
      id: "P-01",
      period: "2024",
      title: "AlphaPredict",
      subtitle: "Time-series Forecasting Platform",
      description:
        "A stock price prediction pipeline combining data preprocessing, feature engineering, and model training for time-series forecasting.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      link: "https://github.com/Prashant-bro/Stock-Price-Prediction",
    },
    {
      id: "P-02",
      period: "2025",
      title: "Unique-ID Attendance System",
      subtitle: "Digital Attendance Automation",
      description:
        "A digital attendance system where students mark attendance using unique IDs, with a backend database for secure storage and reporting.",
      tags: ["Backend", "Database", "Automation"],
      link: "https://github.com/Prashant-bro/Unique-ID-Attendance-System",
    },
    {
      id: "P-03",
      period: "2025",
      title: "DiaPredict",
      subtitle: "Diabetes Risk Prediction",
      description:
        "An AI-powered diabetes risk prediction system that uses machine learning to assess health risks through an interactive chat interface with personalized insights.",
      tags: ["React", "FastAPI", "ML", "MongoDB"],
      link: "https://github.com/Prashant-bro/DiaPredict",
      liveLink: "https://dia-predict-rust.vercel.app/",
    },
    {
      id: "P-04",
      period: "2025",
      title: "StackIt",
      subtitle: "Q&A Platform",
      description:
        "A full-stack Q&A platform inspired by Stack Overflow, built with Django and PostgreSQL — featuring user authentication, question posting, and a clean responsive UI.",
      tags: ["Django", "PostgreSQL", "Python", "Full-stack"],
      link: "https://github.com/Prashant-bro/Stackit",
    },
  ]

  return (
    <section id="projects" className="section-anchor section-card rise-in px-6 py-12 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f766e]">Projects</p>
        <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
          Focused work in ML and intelligent backend systems.
        </h1>

        <div className="tile-grid mt-10">
          {projectItems.map((project, index) => (
            <article
              key={project.title}
              className={`data-tile rise-in flex h-full flex-col p-6 sm:p-7 ${
                index === 0 ? "stagger-2" : index === 1 ? "stagger-3" : "stagger-4"
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="tile-kicker">{project.id}</span>
                <span className="tile-meta">{project.period}</span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#163038] sm:text-2xl">{project.title}</h2>
              <p className="tile-meta mt-1">{project.subtitle}</p>
              <p className="subtle-copy mt-3 text-sm leading-6 sm:text-base">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[#0f766e30] bg-[#0f766e0d] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f766e]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center self-start rounded-lg bg-[#132126] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0f766e]"
                >
                  View on GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center self-start rounded-lg border border-[#0f766e] px-4 py-2 text-sm font-semibold text-[#0f766e] transition-colors duration-200 hover:bg-[#0f766e] hover:text-white"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
