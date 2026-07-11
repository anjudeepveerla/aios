"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const layers = [
  {
    index: "01",
    title: "Intelligence Layer",
    shortName: "INTELLIGENCE",
    subheading: "Transform organizational knowledge into actionable intelligence.",
    description: "The Intelligence Layer serves as the brain of the platform, enabling AI to understand your business, retrieve information instantly, remember context, and provide accurate, personalized assistance across every department.",
    includes: [
      "Enterprise AI Assistant",
      "Knowledge & Memory Platform",
      "Semantic Search",
      "Enterprise Search",
      "Context-Aware Conversations",
      "AI Decision Support"
    ]
  },
  {
    index: "02",
    title: "Automation Layer",
    shortName: "AUTOMATION",
    subheading: "Automate work through intelligent agents and adaptive workflows.",
    description: "The Automation Layer enables AI to coordinate specialized agents, execute complex business processes, monitor events, trigger workflows, and perform repetitive tasks while keeping humans in control whenever approvals are required.",
    includes: [
      "AI Manager & Agent Orchestration",
      "Specialized AI Agents",
      "Background Autonomous Agents",
      "Event-Driven Workflow Engine",
      "Human-in-the-Loop Approvals",
      "Intelligent Task Automation"
    ]
  },
  {
    index: "03",
    title: "Platform Layer",
    shortName: "PLATFORM",
    subheading: "Built for enterprise scale, governance, and security.",
    description: "The Platform Layer provides the secure foundation required to support organizations of every size with multi-tenant architecture, administrative controls, user management, and enterprise-grade governance.",
    includes: [
      "Multi-Tenant SaaS Architecture",
      "Organizations, Workspaces & Teams",
      "Role-Based Access Control (RBAC)",
      "Administration Portal",
      "Security & Compliance",
      "Audit Logs & Governance"
    ]
  },
  {
    index: "04",
    title: "Integration Layer",
    shortName: "INTEGRATION",
    subheading: "Connect your entire technology ecosystem.",
    description: "The Integration Layer allows nexa AIOS to communicate with your existing business applications, cloud services, communication platforms, and enterprise software through a flexible connector framework.",
    includes: [
      "Enterprise Connector Framework",
      "Email & Calendar Integrations",
      "Cloud Storage & Document Platforms",
      "CRM & Business Applications",
      "Communication Channels",
      "Custom APIs & Webhooks"
    ]
  },
  {
    index: "05",
    title: "Experience Layer",
    shortName: "EXPERIENCE",
    subheading: "Deliver one intelligent experience across every device and channel.",
    description: "The Experience Layer ensures employees can access enterprise intelligence wherever they work—through web, mobile, messaging platforms, voice interfaces, and future digital experiences.",
    includes: [
      "Web Application",
      "Mobile Experience",
      "Omnichannel Messaging",
      "Voice & Audio Processing",
      "Conversational AI Interface",
      "Personalized User Experience"
    ]
  },
  {
    index: "06",
    title: "Intelligence Operations Layer",
    shortName: "INTEL. OPS",
    subheading: "Monitor, optimize, and scale AI across your enterprise.",
    description: "The Intelligence Operations Layer provides complete visibility into AI usage, operational performance, costs, security, and organizational insights, helping enterprises manage AI responsibly at scale.",
    includes: [
      "AI Usage Analytics",
      "Token & Cost Management",
      "Workflow Monitoring",
      "Performance & Operational Insights",
      "Enterprise Reporting",
      "System Health & Observability"
    ]
  }
]

export function Works() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="works" className="relative py-24 px-8 md:px-12 md:py-32">
      {/* Split Header & Interactive Stack */}
      <div className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading Typography */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-4">
              Architecture Overview
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
              Product Overview
            </h2>
            <p className="font-sans text-xl md:text-2xl font-light italic text-white/80 mb-6 leading-relaxed">
              Powering the Next Generation of Enterprise Intelligence
            </p>
            <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
              nexa AIOS is built on intelligent layers that work together to unify your organization's knowledge, applications, workflows, and AI capabilities into one seamless platform. Each layer is designed to solve a critical part of how modern enterprises operate, enabling businesses to become more intelligent, automated, and connected.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Stack Visualization */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center min-h-[620px] relative overflow-visible">
          {/* Stack Label (Subtle background) */}
          <div className="absolute top-2 font-mono text-[10px] text-white/20 tracking-[0.2em] uppercase select-none">
            nexa AIOS Architecture Stack
          </div>

          {/* Perspective Stack Container */}
          <div className="relative w-72 sm:w-80 md:w-[360px] h-[520px] flex items-center justify-center select-none overflow-visible pt-52 [--stack-tx:36px] sm:[--stack-tx:24px] md:[--stack-tx:12px] lg:[--stack-tx:0px]">
            {layers.map((layer, index) => {
              const isExpanded = expandedIndex === index
              const isHovered = hoveredIndex === index
              
              // Calculate 3D transformation values
              // Index 0 (Intelligence) is at the bottom, Index 5 (Intel Ops) is at the top
              const baseTranslateY = index * -84
              const hoverLift = isExpanded || isHovered ? -32 : 0
              
              return (
                <button
                  key={layer.index}
                  onClick={() => toggleExpand(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="absolute left-1/2 cursor-pointer focus:outline-none overflow-visible w-72 sm:w-80 md:w-[360px] h-16"
                  style={{
                    zIndex: index + 10,
                    transform: `perspective(800px) rotateX(55deg) rotateZ(-30deg) translateY(${baseTranslateY}px) translateX(calc(-50% + var(--stack-tx, 0px)))`,
                  }}
                >
                  <div
                    className={`w-72 sm:w-80 md:w-[360px] h-16 rounded-sm border flex items-center justify-between px-5 font-mono text-xs relative transition-all duration-300 ${
                      isExpanded 
                        ? "bg-white/15 border-white text-white shadow-[0_0_25px_rgba(255,255,255,0.25)]" 
                        : isHovered
                          ? "bg-white/10 border-white/60 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                          : "bg-white/[0.02] border-white/20 text-white/50"
                    }`}
                    style={{
                      transform: `translateY(${hoverLift}px)`,
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
                    }}
                  >
                    <span>{layer.index}</span>
                    <span className="font-bold tracking-wider">{layer.shortName}</span>
                    <span className="text-[10px] opacity-60">{isExpanded ? "▲" : "▼"}</span>

                    {/* Dynamic glow panel under the active/hovered layer */}
                    {(isExpanded || isHovered) && (
                      <div 
                        className="absolute inset-0 -z-10 rounded-sm filter blur-[8px] opacity-30 transition-opacity duration-300"
                        style={{
                          backgroundColor: "white",
                          transform: "scale(1.05) translateZ(-1px)"
                        }}
                      />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Layer Details Preview HUD */}
          <div className="w-full max-w-72 sm:max-w-80 md:max-w-[360px] border border-white/10 bg-white/[0.01] px-4 py-2 mt-8 font-mono text-[10px] text-center text-muted-foreground rounded-xs">
            {expandedIndex !== null ? (
              <div>
                ACTIVE CORE: <span className="text-white font-bold">{layers[expandedIndex].shortName}</span>
              </div>
            ) : hoveredIndex !== null ? (
              <div>
                QUERY LAYER: <span className="text-white/80">{layers[hoveredIndex].shortName}</span>
              </div>
            ) : (
              <div>SELECT A LAYER TO VIEW SCHEMATICS</div>
            )}
          </div>
        </div>
      </div>

      {/* Layers Accordion List */}
      <div className="max-w-7xl mx-auto relative">
        {layers.map((layer, index) => {
          const isExpanded = expandedIndex === index
          const isHovered = hoveredIndex === index

          return (
            <motion.div
              key={layer.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="relative border-t border-white/10 py-6 md:py-8"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => toggleExpand(index)}
                data-cursor-hover
                className="w-full text-left group flex items-center justify-between gap-6 py-2 focus:outline-none"
              >
                {/* Index & Title */}
                <div className="flex items-center gap-6 md:gap-12 flex-1">
                  <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${
                    isExpanded || isHovered ? "text-white font-bold" : "text-muted-foreground"
                  }`}>
                    {layer.index}
                  </span>
                  
                  <motion.h3
                    className={`font-sans text-2xl md:text-4xl lg:text-5xl font-light tracking-tight transition-colors duration-300 flex-1 ${
                      isExpanded || isHovered ? "text-white" : "text-white/60"
                    }`}
                    animate={{
                      x: isHovered && !isExpanded ? 15 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {layer.title}
                  </motion.h3>
                </div>

                {/* Expand Indicator (Plus / Minus) */}
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                  isExpanded || isHovered ? "border-white" : "border-white/10"
                }`}>
                  <motion.span
                    className={`absolute w-3.5 h-px ${isExpanded || isHovered ? "bg-white" : "bg-white/50"}`}
                    animate={{ rotate: isExpanded ? 0 : 90 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className={`w-3.5 h-px ${isExpanded || isHovered ? "bg-white" : "bg-white/50"}`} />
                </div>
              </button>

              {/* Collapsible Layer Info */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-4 pl-8 md:pl-16 max-w-4xl space-y-6">
                      {/* Subheading */}
                      <p className="font-sans text-lg md:text-xl font-light italic text-white/90 leading-relaxed">
                        {layer.subheading}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                        {layer.description}
                      </p>

                      {/* Includes list */}
                      <div className="space-y-3">
                        <span className="font-mono text-xs text-muted-foreground tracking-widest block uppercase">
                          Includes
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {layer.includes.map((item) => (
                            <span
                              key={item}
                              className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground bg-white/[0.02]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
