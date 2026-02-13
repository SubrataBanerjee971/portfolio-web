"use client"

import { Award, Building2, Calendar, FileCheck } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const certifications = [
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "Dec 2025",
        credentialId: "CXAU9GOS7QZ4",
        skills: [],
        url: "#", // Placeholder as no URL was provided
    },
    {
        title: "Graphics & Web Designing",
        issuer: "HiTech Animation (Official Page)",
        date: "Jul 2020",
        credentialId: "",
        skills: [
            "Bootstrap (Framework)",
            "Web Design",
            "Responsive Web Design",
            "HTML",
            "HTML5",
            "Cascading Style Sheets (CSS)",
        ],
        url: "#",
    },
    {
        title: "Web Development using PHP & MySQL",
        issuer: "Euphoria GenX",
        date: "Nov 2023",
        credentialId: "",
        skills: ["MySQL", "PHP", "Laravel"],
        url: "#",
    },
]

export function CertificationsSection() {
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
        <section id="certifications" className="px-6 py-24">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="mx-auto max-w-5xl"
            >
                <motion.div variants={itemVariants} className="mb-12 flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold text-heading">Licenses & certifications</h2>
                    <div className="ml-4 h-px flex-1 bg-border" />
                </motion.div>

                <div className="flex flex-col gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/50"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                                        <Building2 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="font-medium text-foreground">{cert.issuer}</p>
                                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>Issued {cert.date}</span>
                                        </div>
                                        {cert.credentialId && (
                                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                                                <FileCheck className="h-3.5 w-3.5" />
                                                <span>Credential ID {cert.credentialId}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* 
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Show credential
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a> 
                Permissions/URL needed for button, commenting out for now as specific URLs weren't provided 
                */}
                            </div>

                            {cert.skills.length > 0 && (
                                <div className="mt-4 pl-16">
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="font-normal">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
