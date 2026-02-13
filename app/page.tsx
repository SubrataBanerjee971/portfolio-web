import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  )
}
