export default function Certifications() {
  const certifications = [
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      description: "Foundational knowledge in data analysis, visualization, and statistical concepts.",
      id: "CERT-01",
      pdfUrl: "/certs/CERT-01.png",
    },
    {
      title: "Database Foundations",
      issuer: "Oracle Academy",
      description: "Core concepts of relational databases, SQL, and database design principles.",
      id: "CERT-02",
      pdfUrl: "/certs/CERT-02.jpg",
    },
    {
      title: "Java Fundamentals",
      issuer: "Oracle Academy",
      description: "Solid grounding in Java programming, object-oriented concepts, and application logic.",
      id: "CERT-03",
      pdfUrl: "/certs/CERT-03.jpg",
    },
  ]

  return (
    <section
      id="certifications"
      className="section-anchor section-card mt-8 px-6 py-12 rise-in sm:px-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f766e]">Certifications</p>
            <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
              Professional Certifications & Specialized Training
            </h1>
            <p className="subtle-copy mt-4 text-base sm:text-lg">
              I've completed several technical certifications that have helped sharpen my expertise in data science, 
              databases, and core software engineering fundamentals.
            </p>
          </div>
        </div>

        <div className="tile-grid mt-10">
          {certifications.map((cert, index) => (
            <article
              key={cert.title}
              className={`data-tile rise-in flex flex-col p-6 sm:p-7 ${
                index % 2 === 0 ? "stagger-2" : "stagger-3"
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="tile-kicker">Credential {cert.id}</span>
                <div className="h-2 w-2 rounded-full bg-[#0f766e40]" />
              </div>

              <div className="flex-grow">
                <h2 className="text-xl font-bold tracking-tight text-[#173037] sm:text-2xl">{cert.title}</h2>
                <p className="font-semibold text-[#0f766e] text-sm mt-1">{cert.issuer}</p>
                <p className="subtle-copy mt-3 text-sm leading-6 sm:text-base">{cert.description}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1321260a]">
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#132126] transition-colors hover:text-[#0f766e]"
                >
                  <span className="relative">
                    View Certificate
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#0f766e] transition-all group-hover:w-full" />
                  </span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-2xl bg-[#0f766e0a] border border-[#0f766e1a] rise-in stagger-4">
          <p className="text-sm font-medium text-[#173037]">
            <span className="font-bold text-[#0f766e]">Note:</span> All certificates are officially verified by the respective academies. 
            Recruiters can click on "View Certificate" to open the PDF credentials in a new tab.
          </p>
        </div>
      </div>
    </section>
  )
}
