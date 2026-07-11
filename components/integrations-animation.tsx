"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntegrationItem {
  key: string
  name: string
  x: number // X percentage coordinate for SVG path anchor
}

const integrations: IntegrationItem[] = [
  { key: "slack", name: "SLACK", x: 8.33 },
  { key: "gmail", name: "GMAIL", x: 25.0 },
  { key: "drive", name: "GOOGLE DRIVE", x: 41.66 },
  { key: "salesforce", name: "SALESFORCE", x: 58.33 },
  { key: "teams", name: "TEAMS", x: 75.0 },
  { key: "calendar", name: "CALENDAR", x: 91.66 }
]

export function IntegrationsAnimation() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <section id="integrations" className="relative py-24 px-8 md:px-12 md:py-32 bg-[#050505] border-b border-white/10 flex flex-col items-center justify-center">
      <div className="cyber-grid absolute inset-0 opacity-[0.02] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-20 space-y-3 relative z-10 select-none">
        <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.25em]">
          Platform Connector Pipeline
        </span>
        <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight text-white">
          Active Integrations
        </h2>
      </div>

      {/* Waterfall Flow Container (Desktop Viewport) */}
      <div className="w-full max-w-5xl relative min-h-[360px] hidden lg:block z-10 select-none">
        
        {/* SVG Waterfall Paths Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {integrations.map((item, index) => {
            const isHovered = hoveredNode === item.key
            // Control points to draw an elegant cubic Bezier S-curve merging at (50, 75)
            const pathData = `M ${item.x},12 C ${item.x},45 50,45 50,75`
            
            return (
              <g key={item.key}>
                {/* Base curve line */}
                <path
                  d={pathData}
                  fill="none"
                  className={`stroke-[0.75] transition-colors duration-300 ${
                    isHovered ? "stroke-white" : "stroke-white/10"
                  }`}
                />
                
                {/* Glowing flow packet moving along the curve path */}
                <circle r="0.5" fill="white" style={{ filter: "drop-shadow(0px 0px 3px white)" }}>
                  <animateMotion
                    dur={`${2.2 + index * 0.15}s`}
                    repeatCount="indefinite"
                    path={pathData}
                  />
                </circle>
              </g>
            )
          })}
        </svg>

        {/* Top Row: Spaced Integrations */}
        <div className="absolute top-0 left-0 right-0 grid grid-cols-6 gap-4 text-center">
          {integrations.map((item) => {
            const isHovered = hoveredNode === item.key
            return (
              <div 
                key={item.key} 
                className="flex justify-center"
                onMouseEnter={() => setHoveredNode(item.key)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div 
                  className={`font-mono text-xs tracking-widest transition-all duration-300 py-1.5 px-4 cursor-pointer rounded-xs ${
                    isHovered 
                      ? "text-white scale-105 font-bold" 
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {item.name}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Hub: nexa AIOS Core */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
          <motion.div 
            className={`border rounded-xs px-8 py-4 bg-[#070707] transition-all duration-500 max-w-sm mx-auto select-none ${
              hoveredNode 
                ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] bg-white/5" 
                : "border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            }`}
            animate={{ scale: hoveredNode ? 1.05 : 1 }}
          >
            <span className="font-mono text-[8px] text-white/40 tracking-[0.2em] uppercase block mb-1">
              DESTINATION_KERNEL
            </span>
            <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase">
              NEXA AIOS
            </h3>
          </motion.div>
        </div>

      </div>

      {/* Simplified Stack Flow (Mobile Viewport) */}
      <div className="w-full max-w-xs flex flex-col items-center lg:hidden z-10 select-none">
        
        {/* SVG connection path */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Vertical progress line */}
          <div className="absolute top-4 bottom-4 left-1/2 w-px bg-white/15 -translate-x-1/2 z-0" />

          {integrations.map((item, index) => (
            <div key={item.key} className="flex flex-col items-center relative z-10 w-full mb-8 last:mb-0">
              <div className="font-mono text-[10px] text-white/50 bg-[#050505] px-4 py-1.5 border border-white/10 rounded-xs">
                {item.name}
              </div>
            </div>
          ))}

          <div className="w-full flex justify-center pt-8 relative z-10">
            <div className="border border-white/20 rounded-xs px-6 py-3 bg-[#070707] text-center">
              <span className="font-mono text-[8px] text-white/40 block mb-0.5">KERNEL</span>
              <h3 className="font-mono text-[10px] font-bold text-white tracking-wider">NEXA AIOS</h3>
            </div>
          </div>

        </div>

      </div>

      {/* System Status Annotation Caption */}
      <div className="mt-20 font-mono text-[9px] text-white/20 text-center max-w-md leading-relaxed tracking-wider relative z-10 select-none">
        [ Phase v1.0.4 // Integrations framework under active expansion ] <br />
        Additional proprietary APIs and database adapters pending compilation.
      </div>
    </section>
  )
}
