"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {

  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Vaibhav Sharma
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Software Developer & BTech Student
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/Vaibhavsh0120", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhavsh0120", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vaibhavsh0120@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 
                         hover:text-neutral-900 dark:hover:text-neutral-100
                         hover:bg-neutral-100 dark:hover:bg-neutral-800
                         transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
