"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ExternalLink, Github, CheckCircle2, Clock, User } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl text-heading">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 mt-2">
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <User className="h-4 w-4 text-primary" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Full description */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-2 uppercase tracking-wider">
              Overview
            </h4>
            <p className="text-foreground leading-relaxed text-sm">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-3 uppercase tracking-wider">
              Key Highlights
            </h4>
            <ul className="flex flex-col gap-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-3 uppercase tracking-wider">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
