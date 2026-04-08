import { Metadata } from "next"
import ResumeViewer from "../../components/Resume"

export const metadata: Metadata = {
  title: "Resume | Prashant Singh",
  description: "B.Tech CSE student specializing in Machine Learning and Full-Stack Development.",
}

export default function ResumePage() {
  return (
    <main className="pt-4 sm:pt-6">
      <ResumeViewer />
    </main>
  )
}