"use client"

import { motion } from "framer-motion"

const row1 = [
  "NEXA AIOS",
  "ENTERPRISE AI",
  "AI AGENTS",
  "KNOWLEDGE ENGINE",
  "AI ORCHESTRATION",
  "WORKFLOW AUTOMATION",
  "ENTERPRISE MEMORY",
  "SEMANTIC SEARCH",
]

const row2 = [
  "MULTI-TENANT SAAS",
  "HUMAN-IN-THE-LOOP",
  "BACKGROUND AGENTS",
  "EVENT-DRIVEN WORKFLOWS",
  "INTELLIGENT AUTOMATION",
  "DECISION INTELLIGENCE",
  "ENTERPRISE SECURITY",
  "ROLE-BASED ACCESS",
]

const row3 = [
  "AUDIT LOGGING",
  "CONNECTOR FRAMEWORK",
  "API INTEGRATIONS",
  "OMNICHANNEL EXPERIENCE",
  "VOICE AI",
  "REAL-TIME INSIGHTS",
  "SCALABLE ARCHITECTURE",
  "FUTURE OF WORK",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="group font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              color: "transparent",
              transition: "all 0.3s ease",
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              const target = e.currentTarget
              target.style.color = "white"
              target.style.setProperty("-webkit-text-stroke", "none")
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget
              target.style.color = "transparent"
              target.style.setProperty("-webkit-text-stroke", "1px rgba(255,255,255,0.3)")
            }}
          >
            {item}
            <span className="mx-8 text-white/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-24 overflow-hidden md:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-16"
      ></motion.div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
        <MarqueeRow items={row3} direction="left" />
      </div>
    </section>
  )
}
