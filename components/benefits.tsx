"use client"

import { useState, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

interface Benefit {
  id: string
  num: string
  title: string
  description: string
  category: "Intelligence" | "Productivity" | "Security" | "Scalability"
}

const benefits: Benefit[] = [
  {
    id: "unified-intelligence",
    num: "01",
    title: "Unified Enterprise Intelligence",
    description: "Break down information silos by connecting documents, emails, applications, conversations, and business data into a single AI-powered knowledge ecosystem that every team can access.",
    category: "Intelligence",
  },
  {
    id: "increased-productivity",
    num: "02",
    title: "Increased Productivity",
    description: "Reduce repetitive work by automating routine tasks, coordinating AI agents, and enabling employees to focus on strategic, high-value initiatives.",
    category: "Productivity",
  },
  {
    id: "smarter-decision",
    num: "03",
    title: "Smarter Decision Making",
    description: "Provide teams with instant access to organizational knowledge, real-time insights, contextual recommendations, and AI-assisted decision support.",
    category: "Intelligence",
  },
  {
    id: "enterprise-automation",
    num: "04",
    title: "Enterprise Automation",
    description: "Automate workflows across departments using intelligent triggers, event-driven processes, autonomous AI agents, and configurable approval systems.",
    category: "Productivity",
  },
  {
    id: "secure-design",
    num: "05",
    title: "Secure by Design",
    description: "Protect organizational data with enterprise-grade authentication, role-based permissions, tenant isolation, audit logs, encryption, and governance controls.",
    category: "Security",
  },
  {
    id: "seamless-connectivity",
    num: "06",
    title: "Seamless Connectivity",
    description: "Integrate with existing business tools, communication platforms, cloud storage providers, CRMs, calendars, and custom APIs without disrupting existing workflows.",
    category: "Scalability",
  },
  {
    id: "scalable-growth",
    num: "07",
    title: "Scalable for Growth",
    description: "Whether you're managing a startup or a global enterprise, the platform scales with your organization through a flexible multi-tenant architecture and modular design.",
    category: "Scalability",
  },
  {
    id: "future-ready",
    num: "08",
    title: "Future-Ready Platform",
    description: "Designed to continuously evolve with new AI models, enterprise integrations, industry-specific modules, and emerging technologies, ensuring your organization remains ready for the future.",
    category: "Intelligence",
  },
]

export function Benefits() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["All", "Intelligence", "Productivity", "Security", "Scalability"]

  const filteredBenefits = selectedCategory && selectedCategory !== "All"
    ? benefits.filter(b => b.category === selectedCategory)
    : benefits

  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-widest text-accent uppercase mb-3"
            >
              VALUE PROPOSITION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-light tracking-tight text-white max-w-2xl"
            >
              Why Organizations Choose the <span className="font-semibold text-accent">AI Operating System</span>
            </motion.h2>
          </div>
          
          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 border ${
                  (selectedCategory === cat || (cat === "All" && !selectedCategory))
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Subheading Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground font-light max-w-3xl mb-16 leading-relaxed"
        >
          The AI Operating System transforms the way organizations work by bringing together intelligence, automation, enterprise knowledge, and connected applications into one unified platform. The result is faster decision-making, improved productivity, and a smarter way to operate at scale.
        </motion.p>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBenefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!cardRef.current) return
    const { left, top } = cardRef.current.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5"
    >
      {/* Glowing backdrop spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 242, 254, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Hover glow borders */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              120px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 242, 254, 0.35),
              transparent 60%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-xs text-accent/60 px-2 py-0.5 rounded border border-accent/20 bg-accent/5">
              {benefit.category.toUpperCase()}
            </span>
            <span className="font-mono text-sm tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300">
              {benefit.num}
            </span>
          </div>
          <h3 className="text-xl font-sans font-medium text-white group-hover:text-accent transition-colors duration-300 mb-3">
            {benefit.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground font-light group-hover:text-white/80 transition-colors duration-300">
            {benefit.description}
          </p>
        </div>

        {/* Small subtle visual anchor decoration */}
        <div className="w-6 h-0.5 bg-border group-hover:w-full group-hover:bg-accent transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  )
}
