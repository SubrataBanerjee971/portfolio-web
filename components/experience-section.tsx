"use client"

import { Briefcase, ExternalLink } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { experience } from "@/lib/data"

export function ExperienceSection() {
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
    <section id="experience" className="py-24 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-heading">Experience</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </motion.div>

        <div className="flex flex-col gap-2">
          {experience.map((exp) => (
            <motion.div
              key={exp.title + exp.company}
              variants={itemVariants}
              className="group grid md:grid-cols-4 gap-4 p-6 rounded-lg hover:bg-card transition-colors"
            >
              <div className="md:col-span-1">
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-3 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors">
                  {exp.title}
                  {" · "}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    {exp.company}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </h3>
                <p className="text-foreground leading-relaxed text-sm">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
