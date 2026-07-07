"use client"

import { motion } from "framer-motion"
import { Check, Activity, Calendar, ArrowRight } from "lucide-react"

interface Milestone {
  phase: string
  year: string
  title: string
  status: "completed" | "in-progress" | "coming-soon" | "future"
  description: string
}

const milestones: Milestone[] = [
  {
    phase: "Phase 01",
    year: "2026",
    title: "Foundation",
    status: "completed",
    description: "Launch of core scheduler kernel, secure multi-tenant sandbox runtimes, and baseline developer APIs."
  },
  {
    phase: "Phase 02",
    year: "2026",
    title: "Knowledge Engine",
    status: "completed",
    description: "Integration of vector memory caches, corporate document grounding layers, and semantic indexing pipelines."
  },
  {
    phase: "Phase 03",
    year: "2026",
    title: "AI Workforce",
    status: "in-progress",
    description: "Deployment of autonomous specialized role-agents, inter-agent communication, and scheduling networks."
  },
  {
    phase: "Phase 04",
    year: "2026",
    title: "Marketplace",
    status: "coming-soon",
    description: "Opening of the app portal, allowing developers to publish custom tool adaptors and agent profiles."
  },
  {
    phase: "Phase 05",
    year: "2027",
    title: "Enterprise Voice",
    status: "future",
    description: "Deployment of low-latency voice endpoints, streaming audio adapters, and real-time meeting managers."
  }
]

export function ProductRoadmap() {
  return (
    <section id="roadmap" className="relative py-24 px-8 md:px-12 md:py-32 bg-[#050505] border-b border-white/10">
      <div className="cyber-grid absolute inset-0 opacity-5 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-4">
            Deliverables & Milestones
          </span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            Product Roadmap
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
            Our strategic engineering timeline mapped across core capability releases. Track our deployment progress from base foundation layers to full-scale cognitive operations.
          </p>
        </motion.div>
      </div>

      {/* Timeline Grid (5 Column Horizontal on Desktop) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        {milestones.map((milestone, index) => {
          return (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative border border-white/10 bg-white/[0.01] rounded-sm p-6 space-y-6 flex flex-col justify-between select-none group hover:border-white/20 transition-all duration-300"
            >
              {/* Header: Phase & Year */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-[9px] text-white/40 tracking-wider">
                  {milestone.phase} // {milestone.year}
                </span>
                
                {/* Status Badges */}
                {milestone.status === "completed" && (
                  <span className="px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 font-mono text-[8px] tracking-wider uppercase flex items-center gap-1">
                    <Check className="w-2 h-2" /> Done
                  </span>
                )}
                {milestone.status === "in-progress" && (
                  <span className="px-2 py-0.5 rounded-full border border-white/20 bg-white/5 text-white font-mono text-[8px] tracking-wider uppercase flex items-center gap-1 animate-pulse">
                    <Activity className="w-2 h-2" /> Active
                  </span>
                )}
                {milestone.status === "coming-soon" && (
                  <span className="px-2 py-0.5 rounded-full border border-white/10 bg-transparent text-white/50 font-mono text-[8px] tracking-wider uppercase flex items-center gap-1">
                    <Calendar className="w-2 h-2" /> Q3 2026
                  </span>
                )}
                {milestone.status === "future" && (
                  <span className="px-2 py-0.5 rounded-full border border-white/5 bg-transparent text-white/30 font-mono text-[8px] tracking-wider uppercase flex items-center gap-1">
                    Future
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-2 pt-2">
                <h3 className="font-sans text-lg font-light text-white tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Sequential Indicator Line Arrow (Desktop Only, except for last item) */}
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 text-white/15">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
