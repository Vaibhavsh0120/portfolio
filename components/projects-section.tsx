"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "LifeBeat - Lung Cancer Detection",
    description: "Healthcare app using TensorFlow Lite for chest X-ray analysis and lung cancer detection. Features appointment booking and aims to become a comprehensive health companion.",
    image: "/images/projects/lifebeat-app.png",
    technologies: ["Kotlin", "XML", "TensorFlow Lite", "Firebase", "Google Cloud Healthcare API"],
    liveUrl: "https://github.com/Vaibhavsh0120/LifeBeat",
    githubUrl: "https://github.com/Vaibhavsh0120/LifeBeat",
    featured: true,
    stats: { stars: "2nd Runner-Up", views: "HackStreet 2024" },
    achievement: "🏆 2nd Runner-Up at HackStreet Hackathon"
  },
  {
    title: "CargoGuardian - IoT Train Management",
    description: "Smart IoT-powered system for automated train cargo monitoring with real-time weight detection, GPS tracking, anti-theft protection, and role-based access control.",
    image: "/images/projects/cargoguardian-iot.png",
    technologies: ["Flutter", "Firebase", "Blynk", "IoT Sensors", "Google Maps API"],
    liveUrl: "https://github.com/Vaibhavsh0120/CargoGuardian_IoT-Based-Train-cargo-managment-system",
    githubUrl: "https://github.com/Vaibhavsh0120/CargoGuardian_IoT-Based-Train-cargo-managment-system",
    featured: true,
    stats: { stars: "2nd Runner-Up", views: "HackHiest 2025" },
    achievement: "🏆 2nd Runner-Up at HackHiest Hackathon 2025"
  },
  {
    title: "SignWave - Sign Language Translator",
    description: "Web application bridging communication gaps with AI-powered sign language translation. Features Sign to Text recognition and Text to Sign animation with speech synthesis.",
    image: "/images/projects/signwave-translator.png",
    technologies: ["React", "TypeScript", "Python", "Flask", "TensorFlow", "Computer Vision"],
    liveUrl: "https://sign-wave-gamma.vercel.app/",
    githubUrl: "https://github.com/Vaibhavsh0120/SignWave",
    featured: false,
    stats: { stars: "🤟 Sign Language", views: "Live Demo" }
  },
  {
    title: "Campus Care - Digital Cafeteria",
    description: "Flutter app connecting students with cafeteria services, featuring digital ordering, UPI payments via Razorpay, inventory management, and role-based access for staff and students.",
    image: "/images/projects/campus-care-app.png",
    technologies: ["Flutter", "Supabase", "PostgreSQL", "Razorpay", "RLS"],
    liveUrl: "https://github.com/Vaibhavsh0120/Campus-Care",
    githubUrl: "https://github.com/Vaibhavsh0120/Campus-Care",
    featured: false,
    stats: { stars: "💳 UPI Integration", views: "Live Demo" }
  },
  {
    title: "Space Tools AI Detection",
    description: "YOLOv8-based computer vision model detecting fire extinguishers, tool boxes, and oxygen tanks in space environments with 94.2% mAP accuracy. Includes Flutter mobile app.",
    image: "/images/projects/space-tools-ai.png",
    technologies: ["YOLOv8", "PyTorch", "ONNX", "Flutter", "Computer Vision"],
    liveUrl: "https://github.com/Vaibhavsh0120/HackWithDelhi2.0",
    githubUrl: "https://github.com/Vaibhavsh0120/HackWithDelhi2.0",
    featured: false,
    stats: { stars: "94.2% mAP", views: "BuildWithIndia 2.0" }
  },
  {
    title: "Timetable Management System",
    description: "Web-based system for managing classes, teachers, subjects, and generating conflict-free timetables with automatic conflict detection and modern UI.",
    image: "/images/projects/timetable-management.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "shadcn/ui"],
    liveUrl: "https://timetable-management-project.vercel.app/",
    githubUrl: "https://github.com/Vaibhavsh0120/Timetable-Management-Project",
    featured: false,
    stats: { stars: "⚠️ Conflict Detection", views: "Live System" }
  }
]

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${5 + i * 8}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className={`w-3 h-3 ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}
                         bg-gradient-to-r from-neutral-300/30 to-neutral-400/30 
                         dark:from-neutral-600/30 dark:to-neutral-500/30`} />
        </motion.div>
      ))}
    </div>
  )
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-gradient-to-br from-white via-neutral-50 to-white 
                      dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 overflow-hidden">
      <FloatingShapes />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 
                           text-neutral-600 dark:text-neutral-400 text-sm font-medium backdrop-blur-sm
                           border border-neutral-300/20 dark:border-neutral-700/20">
              My work
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text 
                       bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 
                       dark:from-white dark:via-neutral-200 dark:to-white">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4 md:px-0">
            Here are some of my recent projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 md:space-y-24 mb-16 md:mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-1 lg:order-none`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/40 to-neutral-300/40 
                                dark:from-neutral-700/40 dark:to-neutral-600/40 rounded-3xl blur-2xl 
                                group-hover:blur-3xl transition-all duration-500 opacity-60" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl 
                                transition-shadow duration-500 border border-neutral-200/50 dark:border-neutral-700/50
                                max-w-2xl mx-auto lg:mx-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto max-h-80 md:max-h-96 lg:max-h-none object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} order-2 lg:order-none`}>
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-neutral-100/50 to-transparent 
                                dark:from-neutral-800/30 dark:to-transparent rounded-3xl blur-2xl opacity-50" />
                  <div className="relative">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                          <div className="flex items-center gap-1">
                            <span className="text-orange-500">🏆</span>
                            <span className="font-medium">{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-blue-500">🎯</span>
                            <span className="font-medium">{project.stats.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {project.achievement && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1.5 text-xs md:text-sm rounded-full bg-gradient-to-r from-orange-100 to-orange-200 
                                       dark:from-orange-900/30 dark:to-orange-800/30 text-orange-700 dark:text-orange-300 
                                       font-medium border border-orange-300/30 dark:border-orange-600/30">
                          {project.achievement}
                        </span>
                      </div>
                    )}
                    
                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 md:mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 text-xs md:text-sm rounded-full 
                                   bg-gradient-to-r from-neutral-100 to-neutral-200 
                                   dark:from-neutral-800 dark:to-neutral-700
                                   text-neutral-700 dark:text-neutral-300 font-medium
                                   border border-neutral-300/30 dark:border-neutral-600/30
                                   hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button
                        variant="default"
                        className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700
                                 dark:from-white dark:to-neutral-100 dark:hover:from-neutral-100 dark:hover:to-neutral-200
                                 text-white dark:text-neutral-900 flex-1 sm:flex-none shadow-lg hover:shadow-xl
                                 transition-all duration-300 group"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 sm:flex-none border-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50
                                 transition-all duration-300 group bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 
                             text-neutral-600 dark:text-neutral-400 text-sm font-medium backdrop-blur-sm
                             border border-neutral-300/20 dark:border-neutral-700/20">
                More projects
              </span>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text 
                         bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 
                         dark:from-white dark:via-neutral-200 dark:to-white">
              Other Projects
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 
               bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm
               border border-neutral-200/50 dark:border-neutral-700/50
                               group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-transparent 
                                dark:from-neutral-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500" />
                  
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-white/80">
                      <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <span>🎯</span>
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <span>📊</span>
                        <span>{project.stats.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 md:p-6 relative z-10">
                    <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-neutral-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-3 md:mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 md:py-1 text-xs rounded-full 
                                   bg-gradient-to-r from-neutral-100 to-neutral-200 
                                   dark:from-neutral-700 dark:to-neutral-600
                                   text-neutral-600 dark:text-neutral-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-xs md:text-sm group/btn hover:bg-neutral-50 dark:hover:bg-neutral-700/50 bg-transparent"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform duration-200" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-xs md:text-sm group/btn hover:bg-neutral-50 dark:hover:bg-neutral-700/50 bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform duration-200" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
