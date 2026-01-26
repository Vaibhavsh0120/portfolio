"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Send, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import { useMemo, useState } from 'react'

function ContactBackground() {
  const positions = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      left: `${15 + (i * 7.5) % 85}%`,
      top: `${10 + (i * 6.3) % 80}%`,
    })), []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neutral-300/30 dark:bg-neutral-600/30 rounded-full"
          style={position}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Sending message...'
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        })
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    }
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 
                      dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden">
      <ContactBackground />
      
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
              Get in touch
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text 
                       bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 
                       dark:from-white dark:via-neutral-200 dark:to-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4 md:px-0">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can 
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 to-neutral-300/50 
                            dark:from-neutral-700/50 dark:to-neutral-600/50 rounded-3xl blur-2xl opacity-60" />
              <Card className="relative shadow-2xl bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm
                             border border-neutral-200/50 dark:border-neutral-700/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 
                                  dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 dark:text-neutral-300" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">
                      Send me a message
                    </h3>
                  </div>

                  {/* Status Message */}
                  {status.type !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                        status.type === 'success' 
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
                          : status.type === 'error'
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                          : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      {status.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                      {status.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                      {status.type === 'loading' && (
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
                      )}
                      <span className="text-sm font-medium">{status.message}</span>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 
                                   bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white text-sm md:text-base
                                   focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent
                                   transition-all duration-300 backdrop-blur-sm
                                   hover:bg-white dark:hover:bg-neutral-800"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 
                                   bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white text-sm md:text-base
                                   focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent
                                   transition-all duration-300 backdrop-blur-sm
                                   hover:bg-white dark:hover:bg-neutral-800"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 
                                 bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white text-sm md:text-base
                                 focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent
                                 transition-all duration-300 backdrop-blur-sm
                                 hover:bg-white dark:hover:bg-neutral-800"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 
                                 bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white text-sm md:text-base
                                 focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent
                                 transition-all duration-300 backdrop-blur-sm
                                 hover:bg-white dark:hover:bg-neutral-800"
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 
                                 bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white text-sm md:text-base
                                 focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent
                                 transition-all duration-300 resize-none backdrop-blur-sm
                                 hover:bg-white dark:hover:bg-neutral-800"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={status.type === 'loading'}
                      className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700
                               dark:from-white dark:to-neutral-100 dark:hover:from-neutral-100 dark:hover:to-neutral-200
                               text-white dark:text-neutral-900 py-2.5 md:py-3 text-sm md:text-base
                               shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status.type === 'loading' ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neutral-100/50 to-transparent 
                            dark:from-neutral-800/30 dark:to-transparent rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 
                            border border-neutral-200/50 dark:border-neutral-700/50 shadow-xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-neutral-900 dark:text-white">
                  Get in touch
                </h3>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-6 md:mb-8 leading-relaxed">
                  I&apos;m always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and development.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "vaibhavsh0120@gmail.com",
                  href: "mailto:vaibhavsh0120@gmail.com",
                  description: "Drop me a line anytime"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Delhi, India",
                  href: "#",
                  description: "Available for remote work"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-neutral-200/30 to-neutral-300/30 
                                  dark:from-neutral-700/30 dark:to-neutral-600/30 rounded-2xl blur-xl 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl 
                                  bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm
                                  hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300
                                  border border-neutral-200/50 dark:border-neutral-700/50
                                  shadow-lg hover:shadow-xl group-hover:-translate-y-1">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 
                                    dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center flex-shrink-0
                                    group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 dark:text-neutral-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-medium mb-1">
                          {contact.content}
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-400 text-xs md:text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-neutral-100/50 to-transparent 
                            dark:from-neutral-800/30 dark:to-transparent rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 
                            border border-neutral-200/50 dark:border-neutral-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 
                                dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base">
                    Response Time
                  </h4>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                  I typically respond to emails within 24 hours. For project discussions, 
                  feel free to reach out anytime.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
