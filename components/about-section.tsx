"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Heart, Lightbulb, Target } from 'lucide-react'
import ExperienceSection from "./experience-section"

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    description: "Proficient in multiple programming languages for diverse application development",
    technologies: ["Python", "Java", "C++", "JavaScript", "TypeScript", "Dart"]
  },
  {
    icon: Palette,
    title: "Web & Mobile Development",
    description: "Building responsive web applications and cross-platform mobile apps with modern frameworks",
    technologies: ["React.js", "Flask", "Flutter", "HTML", "CSS", "Firebase"]
  },
  {
    icon: Zap,
    title: "AI/ML & Tools",
    description: "Developing intelligent systems with machine learning and managing projects with industry-standard tools",
    technologies: ["TensorFlow", "Git", "Computer Vision", "Deep Learning", "YOLOv8"]
  }
]

const personalTraits = [
  {
    icon: Heart,
    title: "Problem Solver",
    description: "Passionate about turning complex challenges into elegant solutions"
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Always exploring new technologies and pushing creative boundaries"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable impact and achieving production-ready outcomes"
  }
]

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neutral-300/20 dark:bg-neutral-600/20 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${8 + i * 11}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 
                      dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
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
              Get to know me
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text 
                       bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 
                       dark:from-white dark:via-neutral-200 dark:to-white">
            About Me
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science student specializing in AI/ML, Full-Stack Development, and Cybersecurity. 
            Building production-ready solutions with measurable impact—from 94.2% accurate surveillance systems to hackathon-winning healthcare applications.
          </p>
        </motion.div>

        {/* Main Content - Hero Image & Bio */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-neutral-200/30 via-neutral-300/30 to-neutral-200/30 
                            dark:from-neutral-700/30 dark:via-neutral-600/30 dark:to-neutral-700/30 
                            rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
              
              <div className="absolute -inset-4 bg-gradient-to-br from-white/50 to-neutral-100/50 
                            dark:from-neutral-800/50 dark:to-neutral-900/50 rounded-2xl rotate-3 
                            group-hover:rotate-6 transition-transform duration-500" />
              
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[32rem] lg:w-80 lg:h-[26rem] xl:w-96 xl:h-[30rem]">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl 
                              transition-all duration-500 border-4 border-white dark:border-neutral-800
                              group-hover:scale-[1.02] relative">
                  <Image
                    src="/images/profile/vaibhav-about.png"
                    alt="Vaibhav Sharma with guitar - passionate developer and musician"
                    width={384}
                    height={512}
                    className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 
                             transition-all duration-700 group-hover:scale-105"
                    priority
                    loading="eager"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                                dark:from-black/40 dark:via-transparent dark:to-transparent" />
                  
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-neutral-100/30 to-transparent 
                            dark:from-transparent dark:via-neutral-800/20 dark:to-transparent 
                            rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    Code, Create, Inspire
                  </h3>
                  <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Currently pursuing BTech in Computer Science and Engineering from IPEC, Ghaziabad (2023-2027). 
                    With hands-on experience in AI/ML, cybersecurity, and full-stack development, I&apos;ve built production-ready systems 
                    achieving 94.2% accuracy in real-world deployments and won 2nd Runner-Up positions in multiple hackathons.
                  </p>
                </div>

                {/* Personal Traits */}
                <div className="grid gap-4">
                  {personalTraits.map((trait, index) => (
                    <motion.div
                      key={trait.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/60 dark:bg-neutral-800/60 
                               backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50
                               hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-200
                               group cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 
                                    dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <trait.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
                          {trait.title}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {trait.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Skills Section */}
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
                My expertise
              </span>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text 
                         bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 
                         dark:from-white dark:via-neutral-200 dark:to-white">
              What I Do
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
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
                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="mb-4 md:mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 
                                      dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center mb-4 md:mb-6
                                      group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <skill.icon className="w-6 h-6 md:w-8 md:h-8 text-neutral-600 dark:text-neutral-300" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 
                                      dark:from-neutral-600/0 dark:via-neutral-600/30 dark:to-neutral-600/0 
                                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-neutral-900 dark:text-white">
                        {skill.title}
                      </h4>
                      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-4 md:mb-6 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs md:text-sm rounded-full 
                                   bg-gradient-to-r from-neutral-100 to-neutral-200 
                                   dark:from-neutral-700 dark:to-neutral-600
                                   text-neutral-700 dark:text-neutral-300 font-medium
                                   border border-neutral-300/20 dark:border-neutral-600/20
                                   hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
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
