"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SentientSphere } from "./sentient-sphere"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center"
    >
      {/* 3D Sphere Background - positioned below the fixed header height */}
      <div className="absolute left-0 right-0 bottom-0 top-[72px] md:top-[80px] z-0">
        <SentientSphere />
      </div>

      {/* Typography Overlay */}
      <motion.div 
        style={{ opacity, scale }} 
        className="relative z-10 h-full max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col justify-center pt-20 pointer-events-none"
      >
        <div className="max-w-3xl space-y-6 md:space-y-8 text-left pointer-events-auto">
          {/* Eyebrow System Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              AIOpS CORE // v1.0.4
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] text-balance">
              Unify your enterprise with <br />
              <span className="font-serif italic font-light text-white/95">AI Operating System</span>
            </h1>
          </motion.div>

          {/* Description Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-base md:text-lg lg:text-xl font-light tracking-normal text-white/70 max-w-2xl leading-relaxed text-balance">
              The AI Operating System (AIOpS) unifies AI, knowledge, applications, and automation into a single intelligent ecosystem.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => {
                const element = document.querySelector("#works")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="px-6 py-3.5 border border-white bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-transparent hover:text-white transition-colors duration-300 rounded-sm cursor-pointer"
            >
              Explore Architecture
            </button>
            <button
              onClick={() => {
                const element = document.querySelector("footer")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="px-6 py-3.5 border border-white/20 hover:border-white text-white font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 rounded-sm cursor-pointer"
            >
              Initialize Session
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
