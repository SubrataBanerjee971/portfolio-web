"use client"

import { GraduationCap } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { education } from "@/lib/data"

export function EducationSection() {
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
    <section id="education" className="px-6 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={itemVariants} className="mb-12 flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-heading">Education</h2>
          <div className="ml-4 h-px flex-1 bg-border" />
        </motion.div>

        <div className="flex flex-col gap-2">
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="group grid gap-4 rounded-lg p-6 transition-colors hover:bg-card md:grid-cols-4"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-col gap-3 md:col-span-3">
                <h3 className="text-lg font-semibold text-heading transition-colors group-hover:text-primary">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {edu.institution}
                </p>
                <p className="text-sm leading-relaxed text-foreground">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
