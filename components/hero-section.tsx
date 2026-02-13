"use client"

import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
// @ts-ignore
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three"

export function HeroSection() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: { ...THREE, VertexColors: true },
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0b2a23,
          backgroundColor: 0x0f141a,
          points: 10.00,
          maxDistance: 20.00,
          spacing: 15.00,
          showDots: true,
          backgroundAlpha: 1.00
        })
      )
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      ref={vantaRef}
    >


      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-5"
      >
        {/* Left column */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <motion.span
            variants={itemVariants}
            className="font-mono text-sm tracking-wider text-primary"
          >
            {"Hello, I'm"}
          </motion.span>
          <motion.div variants={itemVariants} className="text-balance">
            <h1 className="text-4xl font-bold leading-tight text-heading md:text-5xl font-roxaine">
              {personalInfo.name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.1,
                    ease: "easeIn",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-xl font-medium text-primary md:text-2xl"
          >
            {personalInfo.role}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="leading-relaxed text-muted-foreground"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-4 flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button asChild variant="outline" size="sm" className="ml-2">
              <a href="/SUBRATA BANERJEE_RESUME.pdf" download aria-label="Download Resume">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 md:col-span-3">
          <motion.p
            variants={itemVariants}
            className="leading-relaxed text-foreground"
          >
            {personalInfo.about}
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#education"
            className="group mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            See my background
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
