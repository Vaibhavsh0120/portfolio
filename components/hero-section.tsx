"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

function FloatingPaths({ position }: { position: number }) {
  // Reduced from 24 to 8 paths for better performance
  const paths = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 15 * position} -${189 + i * 20}C-${
      380 - i * 15 * position
    } -${189 + i * 20} -${312 - i * 15 * position} ${216 - i * 20} ${
      152 - i * 15 * position
    } ${343 - i * 20}C${616 - i * 15 * position} ${470 - i * 20} ${
      684 - i * 15 * position
    } ${875 - i * 20} ${684 - i * 15 * position} ${875 - i * 20}`,
    width: 0.5 + i * 0.05,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none will-change-transform">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.3 }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 30 + path.id * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ willChange: "pathLength, opacity" }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function HeroSection() {
  const name = "Vaibhav Sharma"
  const title = "Software Developer"

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 md:mb-6"
          >
            <span className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400 tracking-wider uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 tracking-tighter leading-tight">
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.8 + index * 0.05,
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
                className="inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                      dark:from-white dark:to-white/80"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-8 text-neutral-600 dark:text-neutral-300"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
          >
            BTech Computer Science student specializing in AI/ML, Full-Stack Development, and Cybersecurity. 
            Building production-ready solutions with 2 hackathon wins and industry experience at Deecogs Technologies and Cisco.
          </motion.p>

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4 md:px-0"
          >
            <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                      dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                      overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto">
              <Button
                onClick={scrollToProjects}
                variant="ghost"
                className="rounded-[1.15rem] px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold backdrop-blur-md 
                      bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                      text-black dark:text-white transition-all duration-300 
                      group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                      hover:shadow-md dark:hover:shadow-neutral-800/50 w-full sm:w-auto"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">View My Work</span>
                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                            transition-all duration-300">
                  →
                </span>
              </Button>
            </div>

            <Button
              variant="outline"
              className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium rounded-2xl border-2 border-neutral-200 
                    dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700
                    bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/50
                    transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="/cv/Vaibhav_Sharma_Resume.pdf" download="Vaibhav_Sharma_Resume.pdf">
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center justify-center gap-4 md:gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/Vaibhavsh0120", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhavsh0120", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vaibhavsh0120@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 md:p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 
                      hover:bg-neutral-200 dark:hover:bg-neutral-700
                      text-neutral-600 dark:text-neutral-400 
                      hover:text-neutral-900 dark:hover:text-neutral-100
                      transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label={social.label}
              >
                <social.icon size={18} className="md:w-5 md:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
