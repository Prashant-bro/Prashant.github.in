import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import ResumeViewer from "../components/Resume"
import Certifications from "../components/Certifications"

export default function Home() {
  return (
    <main className="pt-4 sm:pt-6">
      <Hero />
      <div className="mt-8 sm:mt-10">
        <About />
      </div>
      <div className="mt-8 sm:mt-10">
        <Projects />
      </div>
      <div className="mt-8 sm:mt-10">
        <ResumeViewer />
      </div>
      <div className="mt-8 sm:mt-10">
        <Certifications />
      </div>
    </main>
  )
}