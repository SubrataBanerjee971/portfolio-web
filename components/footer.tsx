"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="py-16 border-t border-border overflow-hidden"
    >
      <div className="mx-auto max-w-5xl flex items-center justify-center gap-6 px-6 mb-8">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="w-full overflow-hidden py-5">
        <motion.p
          animate={{ x: ["100vw", "-100vw"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="text-7xl md:text-9xl font-bold text-muted-foreground/20 whitespace-nowrap"
        >
          {"#Designed & Built with care."}
        </motion.p>
      </div>
    </motion.footer>
  )
}
