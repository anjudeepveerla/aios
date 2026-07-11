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
    question: "What is nexaos.AI?",
    answer: "nexaos.AI is a unified enterprise platform that combines artificial intelligence, organizational knowledge, workflow automation, business applications, and intelligent AI agents into a single ecosystem. Rather than replacing your existing software, it connects and enhances it through one intelligent layer.",
  },
  {
    num: "02",
    question: "How is nexaos.AI different from a chatbot?",
    answer: "Traditional chatbots answer questions. nexaos.AI goes far beyond conversation by orchestrating AI agents, retrieving enterprise knowledge, automating workflows, executing business tasks, integrating with existing systems, and supporting organization-wide collaboration.",
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
    question: "Which industries can use nexaos.AI?",
    answer: "The platform is designed to be industry-agnostic and can be adapted for healthcare, finance, legal, education, manufacturing, retail, real estate, human resources, government, insurance, and many other sectors through configurable AI modules and workflows.",
  },
  {
    num: "08",
    question: "Is nexaos.AI available today?",
    answer: "The platform is currently being developed as a next-generation enterprise intelligence platform. Organizations can request early access, schedule demonstrations, and partner with us to explore how nexaos.AI can transform their operations as new capabilities become available.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#050505] border-b border-white/10 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest text-white/40 uppercase mb-4"
          >
            FAQ // INQUIRIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-xl mx-auto"
          >
            Answers to key aspects of the nexaos.AI capability, integration, and security.
          </motion.p>
        </div>

        {/* Minimalist Focus List */}
        <div 
          className="border-t border-white/10 divide-y divide-white/10"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const isHovered = hoveredIndex === index
            
            // Focus blur effect state calculation
            const isAnyHovered = hoveredIndex !== null
            const shouldDim = isAnyHovered && !isHovered && !isOpen

            return (
              <motion.div
                key={faq.num}
                animate={{ 
                  opacity: shouldDim ? 0.25 : 1,
                  filter: shouldDim ? "blur(1px)" : "blur(0px)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="py-6 transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start gap-8 text-left group cursor-default"
                >
                  {/* Number identifier */}
                  <span className={`font-mono text-xs pt-1.5 transition-colors duration-300 ${
                    isOpen || isHovered ? "text-white font-semibold" : "text-white/30"
                  }`}>
                    {faq.num}
                  </span>

                  {/* Question text */}
                  <div className="flex-grow">
                    <h3 className={`font-sans text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${
                      isOpen || isHovered ? "text-white" : "text-white/70"
                    }`}>
                      {faq.question}
                    </h3>

                    {/* Answer collapsible content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground font-light max-w-3xl pr-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Minimal indicator cross or dot line */}
                  <div className="pt-2">
                    <motion.div 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-4 h-4 relative flex items-center justify-center text-white/30 group-hover:text-white"
                    >
                      <span className="absolute w-3 h-px bg-current" />
                      <span className="absolute w-px h-3 bg-current" />
                    </motion.div>
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
