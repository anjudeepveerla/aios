"use client"

import { motion } from "framer-motion"

export function VisionStatement() {
  return (
    <section id="vision" className="relative py-32 px-8 md:px-12 md:py-40 bg-[#050505] border-b border-white/10 flex flex-col items-center justify-center">
      <div className="cyber-grid absolute inset-0 opacity-5 pointer-events-none" />

      {/* Main Vision Copy Wrapper */}
      <div className="max-w-4xl w-full text-center relative z-10 space-y-8 select-none">
        
        {/* Eyebrow Header */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-white/35 block"
        >
          The Future of Enterprise Intelligence
        </motion.span>

        {/* Core Vision Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.2] text-balance"
        >
          Businesses don&apos;t need more software—they need a single intelligence layer that connects every application, every workflow, every team, and every decision.
        </motion.p>

        {/* Dynamic Underline accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-white/30 mx-auto"
        />

        {/* Conclusion / Signoff */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/70 block pt-4 uppercase"
        >
          nexa AIOS is built to become that foundation.
        </motion.span>

      </div>
    </section>
  )
}
