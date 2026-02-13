"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code2, Wrench } from "lucide-react"

const skillsData = {
    "Industry Knowledge": [
        "Front-End Development",
        "Computer Science",
        "Data Structures",
        "Responsive Web Design",
        "Web Design",
        "Graphics & Web Designing",
        "Web Development using PHP & MySQL",
    ],
    "Tools & Technologies": [
        "GitHub",
        "Git",
        "React Native",
        "Data Science",
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "Node.js",
        "React.js",
        "Java",
        "Python",
        "C",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "PhpMyAdmin",
        "PHP",
        "MySQL",
        "Laravel",
        "HTML5",
        "CSS",
    ],
}

export function SkillsSection() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mb-12 flex items-center gap-3"
                >
                    <Code2 className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold text-heading">Skills</h2>
                    <div className="ml-4 h-px flex-1 bg-border" />
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className="mb-6 flex items-center gap-2">
                                {index === 0 ? (
                                    <Wrench className="h-5 w-5 text-primary" />
                                ) : (
                                    <Code2 className="h-5 w-5 text-primary" />
                                )}
                                <h3 className="text-xl font-semibold text-heading">{category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.05) }}
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        <Badge variant="secondary" className="text-sm py-1 px-3">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
