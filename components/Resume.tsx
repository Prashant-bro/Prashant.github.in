import { sitePath } from "./sitePath"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload, FaPrint } from "react-icons/fa"

export default function ResumeViewer() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "ITM (SLS) Baroda University, Vadodara",
      period: "2024 — 2028",
      details: "Current CPI: 9.03",
    },
  ]

  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "Java", "SQL", "JavaScript"],
    },
    {
      category: "Machine Learning",
      skills: ["Scikit-learn", "Random Forest", "LightGBM", "Feature Engineering"],
    },
    {
      category: "Tools & Frameworks",
      skills: ["Git", "GitHub", "MySQL", "MongoDB", "Power BI", "React", "Next.js"],
    },
  ]

  const resumeProjects = [
    {
      title: "Diabetes Risk Prediction System",
      tech: "ML, Scikit-learn, MERN",
      description: "Developed an ML model to classify high-risk diabetes patients using the BRFSS dataset, integrated with a full-stack interface.",
    },
    {
      title: "AlphaPredict - Stock Price Forecasting",
      tech: "Python, Random Forest",
      description: "Built a robust prediction pipeline using Random Forest algorithms optimized through statistical feature selection.",
    },
    {
      title: "Climatrix Disaster Alert System",
      tech: "Python, Public APIs",
      description: "Real-time alert system for natural disasters with automated user notification workflows.",
    },
  ]

  return (
    <section id="resume" className="section-anchor section-card rise-in px-6 py-12 sm:px-10 sm:py-14 print:p-0 print:shadow-none print:border-none">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 print:hidden">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f766e]">Resume</p>
            <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
              Professional Experience & Education
            </h1>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-[#0f766e] px-5 py-2.5 text-sm font-bold text-[#0f766e] transition-all hover:bg-[#0f766e] hover:text-white"
            >
              <FaPrint /> Print
            </button>
            <a
              href={sitePath("/resume.pdf")}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0ea5a4] to-[#0f766e] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(15,118,110,0.24)] transition-all hover:-translate-y-0.5"
            >
              <FaFileDownload /> PDF
            </a>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="resume-sheet rise-in stagger-2 overflow-hidden rounded-2xl border border-[#13212615] bg-white shadow-[0_24px_48px_rgba(19,33,38,0.08)] print:shadow-none print:border-none">
          {/* Header */}
          <header className="bg-[#173037] p-8 text-white sm:p-12 print:bg-white print:text-black print:p-0 print:border-b-2 print:border-[#173037]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl print:text-5xl">PRASHANT SINGH</h2>
                <p className="text-[#0ea5a4] font-semibold mt-1 text-lg print:text-[#0f766e]">Computer Science Undergraduate & ML Developer</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 print:text-gray-700">
                <a href="mailto:prashantsingh20102006@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaEnvelope className="text-[#0ea5a4]" /> prashantsingh20102006@gmail.com
                </a>
                <a href="https://linkedin.com/in/prashant-cs-student" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaLinkedin className="text-[#0ea5a4]" /> linkedin.com/in/prashant-cs-student
                </a>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-[#0ea5a4]" /> +91 8735018504
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#0ea5a4]" /> Vadodara, Gujarat, India
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-x divide-[#13212610] print:block">
            {/* Sidebar (Skills & Education) */}
            <aside className="p-8 bg-[#f8fafb] lg:col-span-1 print:bg-white print:p-0 print:mt-8">
              <section className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 print:text-sm print:text-black print:border-b">Education</h3>
                {education.map((edu) => (
                  <div key={edu.institution} className="mb-4">
                    <h4 className="font-bold text-[#173037] leading-tight">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
                    <p className="text-xs font-semibold text-[#0f766e] mt-1">{edu.period}</p>
                    <p className="text-xs text-gray-500 italic mt-1">{edu.details}</p>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 print:text-sm print:text-black print:border-b">Technical Skills</h3>
                <div className="space-y-6">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <h4 className="text-sm font-bold text-[#173037] mb-2">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-white border border-[#13212610] rounded text-xs font-medium text-gray-700 print:border-gray-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </aside>

            {/* Main Content (Summary & Projects) */}
            <div className="p-8 lg:col-span-2 print:p-0 print:mt-8 print:pl-0">
              <section className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 print:text-sm print:text-black print:border-b">Professional Summary</h3>
                <p className="text-[#173037] leading-relaxed text-sm sm:text-base">
                  A Computer Science undergraduate specializing in Machine Learning and Full-Stack Development. 
                  Experienced in building predictive models using Scikit-learn and LightGBM, alongside scalable 
                  web applications using the MERN stack. Passionate about data-driven problem solving and 
                  integrating AI into user-centric interfaces.
                </p>
              </section>

              <section>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 print:text-sm print:text-black print:border-b">Key Projects</h3>
                <div className="space-y-8">
                  {resumeProjects.map((project) => (
                    <article key={project.title}>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-[#173037] text-lg">{project.title}</h4>
                      </div>
                      <p className="text-xs font-bold text-[#0f766e] uppercase tracking-wide mb-2">{project.tech}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-12 p-6 rounded-xl bg-[#0f766e0a] border border-[#0f766e10] text-center print:hidden">
                <p className="text-sm text-gray-600">
                  Looking for the full project list and live demos? Check out the <a href="/#projects" className="font-bold text-[#0f766e] underline">Projects section</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}