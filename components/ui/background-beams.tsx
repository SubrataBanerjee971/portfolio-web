"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div
            className={cn(
                "absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-background",
                className
            )}
        >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-40 blur-3xl animate-pulse" />

            {/* Animated Beams */}
            <div className="absolute h-full w-full">
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
                />
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
    )
}
