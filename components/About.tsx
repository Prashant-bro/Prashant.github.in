export default function About() {
  const skills = [
    {
      id: "01",
      domain: "Engineering",
      title: "Backend Systems",
      description:
        "Building reliable APIs, database-backed services, and automation-friendly backend workflows.",
    },
    {
      id: "02",
      domain: "Modeling",
      title: "Machine Learning",
      description:
        "Training and evaluating predictive models with practical feature engineering and robust validation.",
    },
    {
      id: "03",
      domain: "Automation",
      title: "AI Applications",
      description:
        "Developing applied AI tools including chatbot and intelligent assistant workflows for daily tasks.",
    },
    {
      id: "04",
      domain: "Analytics",
      title: "Data Science",
      description:
        "Working with data exploration, visualization, and end-to-end analytics pipelines in Python.",
    },
  ]

  return (
    <section id="about" className="section-anchor section-card rise-in px-6 py-12 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f766e]">About</p>
        <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
          Building intelligent products from data to deployment.
        </h1>
        <p className="subtle-copy mt-4 max-w-3xl text-base sm:text-lg">
          I focus on practical machine learning and AI systems that combine strong data workflows,
          thoughtful model choices, and backend engineering that can scale into production.
        </p>

        <div className="tile-grid mt-10">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className={`data-tile rise-in p-6 sm:p-7 ${
                index % 2 === 0 ? "stagger-2" : "stagger-3"
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="tile-kicker">Skill {skill.id}</span>
                <span className="tile-meta">{skill.domain}</span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#173037] sm:text-2xl">{skill.title}</h2>
              <p className="subtle-copy mt-3 text-sm leading-6 sm:text-base">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}