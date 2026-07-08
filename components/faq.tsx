"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  num: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    num: "01",
    question: "What is an AI Operating System?",
    answer: "The AI Operating System is a unified enterprise platform that combines artificial intelligence, organizational knowledge, workflow automation, business applications, and intelligent AI agents into a single ecosystem. Rather than replacing your existing software, it connects and enhances it through one intelligent layer.",
  },
  {
    num: "02",
    question: "How is the AI Operating System different from a chatbot?",
    answer: "Traditional chatbots answer questions. The AI Operating System goes far beyond conversation by orchestrating AI agents, retrieving enterprise knowledge, automating workflows, executing business tasks, integrating with existing systems, and supporting organization-wide collaboration.",
  },
  {
    num: "03",
    question: "Can the platform integrate with our existing business applications?",
    answer: "Yes. The platform is designed with an extensible connector framework that supports email providers, cloud storage, communication tools, CRM platforms, calendars, productivity suites, and custom APIs, allowing organizations to connect their existing technology stack.",
  },
  {
    num: "04",
    question: "Is the platform secure for enterprise use?",
    answer: "Security is a core part of the platform. It includes enterprise authentication, role-based access control, tenant isolation, encrypted communication, audit logging, administrative controls, and governance features to help organizations manage AI responsibly.",
  },
  {
    num: "05",
    question: "Can AI perform actions automatically without human intervention?",
    answer: "Yes. Organizations can configure autonomous AI workflows for routine operations. For sensitive or high-impact actions, the platform supports Human-in-the-Loop approval workflows, ensuring that users remain in control of critical decisions.",
  },
  {
    num: "06",
    question: "Does the platform support multiple organizations and teams?",
    answer: "Absolutely. The platform is built using a multi-tenant SaaS architecture that supports organizations, business units, departments, teams, workspaces, and individual users while maintaining complete data isolation and configurable permissions.",
  },
  {
    num: "07",
    question: "Which industries can use the AI Operating System?",
    answer: "The platform is designed to be industry-agnostic and can be adapted for healthcare, finance, legal, education, manufacturing, retail, real estate, human resources, government, insurance, and many other sectors through configurable AI modules and workflows.",
  },
  {
    num: "08",
    question: "Is the AI Operating System available today?",
    answer: "The platform is currently being developed as a next-generation enterprise intelligence platform. Organizations can request early access, schedule demonstrations, and partner with us to explore how the AI Operating System can transform their operations as new capabilities become available.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-zinc-950 border-t border-border overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-widest text-accent uppercase mb-3"
            >
              COMMON INQUIRIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-light tracking-tight text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-light leading-relaxed mb-8"
            >
              Everything you need to know about the AI Operating System, its capabilities, deployment, security, and enterprise adoption.
            </motion.p>
            
            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <h4 className="text-sm font-semibold text-white mb-2">Still have questions?</h4>
              <p className="text-xs text-muted-foreground mb-4">Contact our team for technical consultations or specific enterprise configurations.</p>
              <a 
                href="#contact"
                className="inline-flex items-center text-xs font-mono text-accent hover:text-white transition-colors duration-300"
              >
                GET IN TOUCH <span className="ml-1">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-white/5 border-b border-white/5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={index} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between text-left py-4 group"
                    >
                      <div className="flex gap-4 items-center">
                        <span className="font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300">
                          {faq.num}
                        </span>
                        <h3 className="text-lg md:text-xl font-sans font-light tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                      
                      {/* Plus / Minus indicator icon */}
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <span className="absolute w-3.5 h-px bg-muted-foreground group-hover:bg-accent transition-colors duration-300" />
                        <motion.span
                          animate={{ rotate: isOpen ? 0 : 90 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute w-px h-3.5 bg-muted-foreground group-hover:bg-accent transition-colors duration-300"
                        />
                      </div>
                    </button>

                    {/* Accordion Content with smooth height transition */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light pl-8 pb-4 pr-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
