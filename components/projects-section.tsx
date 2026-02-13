"use client"

import { useState } from "react"
import { Layers, ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/lib/data"
import { ProjectModal } from "./project-modal"
import { motion, Variants } from "framer-motion"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="projects" className="py-24 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
          <Layers className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-heading">Projects</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              variants={itemVariants}
              onClick={() => handleProjectClick(project)}
              className="group text-left p-6 rounded-lg bg-card/50 border border-transparent hover:border-primary/30 hover:bg-card transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded-full bg-secondary text-primary"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
