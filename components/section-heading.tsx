"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  number: string
  title: string
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">
        {title}
      </h2>
      <Separator className="flex-1 bg-border/50" />
    </motion.div>
  )
}
