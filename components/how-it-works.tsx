"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, Terminal, Cpu, Search, Database, GitBranch, ShieldCheck, UserCheck } from "lucide-react"

interface Step {
  title: string
  subtitle: string
  description: string
  icon: any
}

const steps: Step[] = [
  {
    title: "User Request",
    subtitle: "Payload Ingress",
    description: "The pipeline begins when a user submits a natural language request, API payload, or database trigger to the platform kernel.",
    icon: Terminal
  },
  {
    title: "AI Manager",
    subtitle: "Cognitive Routing",
    description: "The central scheduler analyzes the request, parses user intent, extracts variables, and dispatches tasks to specialized agents.",
    icon: Cpu
  },
  {
    title: "Research Agent",
    subtitle: "Context Retrieval",
    description: "Autonomous workers execute specific subroutines, retrieving files, querying servers, and compiling relevant raw data.",
    icon: Search
  },
  {
    title: "Knowledge Engine",
    subtitle: "Semantic Synthesis",
    description: "Synthesizes raw data with long-term memory logs and vector databases to ensure the request is grounded in corporate context.",
    icon: Database
  },
  {
    title: "Workflow Engine",
    subtitle: "Logic Loop Runtime",
    description: "Executes state machine conditional pathways, managing event loops, data transformations, and api dispatch webhooks.",
    icon: GitBranch
  },
  {
    title: "Approval Node",
    subtitle: "Human-in-the-Loop",
    description: "Routes sensitive actions to designated supervisors for manual validation before executing high-risk commands.",
    icon: UserCheck
  },
  {
    title: "Completed",
    subtitle: "Egress Sync",
    description: "Saves transaction records, synchronizes database flags (CRM, ERP), sends confirmations, and logs success states.",
    icon: ShieldCheck
  }
]

interface LogEntry {
  step: number
  time: string
  text: string
  type: "system" | "success" | "warn" | "info"
}

const logFeed: LogEntry[] = [
  { step: 0, time: "0.10s", text: "[INGRESS] User payload received: 'Sync Q2 compliance records and file sync flags.'", type: "info" },
  { step: 0, time: "0.45s", text: "[INGRESS] Security checks passed. Decrypting context window...", type: "system" },
  { step: 1, time: "1.10s", text: "[MANAGER] Thread #042 initialized. Model routing path: GPT-4o.", type: "system" },
  { step: 1, time: "1.45s", text: "[MANAGER] Decomposing goals: [Vector Search, Database Sync, Slack Notice].", type: "info" },
  { step: 2, time: "2.10s", text: "[RESEARCH] Worker dispatches: scraping Google Drive sheets & database tables.", type: "info" },
  { step: 2, time: "2.55s", text: "[RESEARCH] Data compiled: 14 compliance records parsed successfully.", type: "success" },
  { step: 3, time: "3.20s", text: "[KNOWLEDGE] Grounding table data against organizational memory index.", type: "system" },
  { step: 3, time: "3.65s", text: "[KNOWLEDGE] Context vector matches memory address 0x9F41. Score: 0.96.", type: "success" },
  { step: 4, time: "4.30s", text: "[WORKFLOW] Instantiating conditional state loop. Webhook trigger armed.", type: "system" },
  { step: 4, time: "4.75s", text: "[WORKFLOW] Action requires authorization token. Dispatching notification.", type: "warn" },
  { step: 5, time: "5.40s", text: "[APPROVAL] Human-in-the-loop: manual validation pending on Admin client.", type: "warn" },
  { step: 5, time: "5.95s", text: "[APPROVAL] Supervisor validation token validated. Status marked: APPROVED.", type: "success" },
  { step: 6, time: "6.60s", text: "[SUCCESS] Executing database write loops to Salesforce production CRM.", type: "system" },
  { step: 6, time: "7.15s", text: "[SUCCESS] Pipeline run finished. Transaction logs archived. Standby.", type: "success" }
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [terminalLogs, setTerminalLogs] = useState<LogEntry[]>([])
  
  const terminalBodyRef = useRef<HTMLDivElement>(null)
  const timers = useRef<NodeJS.Timeout[]>([])

  // Automatically scroll the inner terminal scrollbar (without scrolling the browser page)
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [terminalLogs])

  const clearAllTimers = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
  }

  const resetSimulation = () => {
    clearAllTimers()
    setIsPlaying(false)
    setActiveStep(null)
    setTerminalLogs([])
  }

  const runSimulation = () => {
    resetSimulation()
    setIsPlaying(true)

    const stepDuration = 1200

    steps.forEach((_, index) => {
      const stepTimer = setTimeout(() => {
        setActiveStep(index)
        const stepLogs = logFeed.filter((log) => log.step === index)
        setTerminalLogs((prev) => [...prev, ...stepLogs])
      }, index * stepDuration)
      
      timers.current.push(stepTimer)
    })

    const endTimer = setTimeout(() => {
      setIsPlaying(false)
    }, steps.length * stepDuration)
    
    timers.current.push(endTimer)
  }

  useEffect(() => {
    return () => clearAllTimers()
  }, [])

  const currentStep = activeStep !== null ? steps[activeStep] : null
  const CurrentIcon = currentStep?.icon || Cpu

  return (
    <section id="how-it-works" className="relative py-24 px-8 md:px-12 md:py-32 bg-[#050505] border-b border-white/10">
      <div className="cyber-grid absolute inset-0 opacity-5 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12 relative z-10">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-4">
          System Mechanics
        </span>
        <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
          How It Works
        </h2>
      </div>

      {/* Widescreen Command Center Container */}
      <div className="max-w-6xl mx-auto border border-white/10 bg-[#070707] rounded-sm p-6 md:p-8 space-y-8 relative z-10 select-none shadow-2xl">
        
        {/* Top Control Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div className="font-mono text-[10px] text-muted-foreground">
            SYSTEM_CONCENTRIC_CYBER_DIAL // v1.0.4
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isPlaying}
              className={`px-4 py-2 border rounded-sm font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all duration-300 ${
                isPlaying
                  ? "border-white/10 text-white/40 cursor-not-allowed bg-transparent"
                  : "border-white bg-white text-black hover:bg-transparent hover:text-white cursor-pointer"
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              Run Simulation
            </button>
            <button
              onClick={resetSimulation}
              className="p-2 border border-white/20 text-white/60 hover:text-white hover:border-white rounded-sm transition-all duration-300 cursor-pointer"
              title="Reset Console"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Concentric Cyber-Dial (Visualizing flows) */}
          <div className="lg:col-span-6 flex items-center justify-center py-6">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] aspect-square flex items-center justify-center">
              
              {/* SVG Connecting Track Ring */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="36" 
                  className="fill-none stroke-white/10 stroke-[0.5]" 
                />
                
                {/* Glowing Laser Progress Path - permanently mounted with smooth spring-like transition */}
                <motion.circle
                  cx="50" cy="50" r="36"
                  className="fill-none stroke-white stroke-[0.75]"
                  style={{ 
                    vectorEffect: "non-scaling-stroke",
                    filter: "drop-shadow(0px 0px 4px rgba(255,255,255,0.6))"
                  }}
                  strokeDasharray="226.19" // 2 * PI * 36
                  animate={{ 
                    strokeDashoffset: 226.19 - (activeStep !== null ? (activeStep / (steps.length - 1)) * 226.19 : 0) 
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  transform="rotate(-90 50 50)"
                />
              </svg>

              {/* Central Sci-Fi Reactor Core */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center p-2">
                {/* Outer spinning dash ring - spins faster during simulation */}
                <div 
                  className={`absolute inset-1 rounded-full border border-dashed border-white/20 transition-all duration-1000 ${
                    isPlaying 
                      ? "animate-[spin_6s_linear_infinite]" 
                      : "animate-[spin_30s_linear_infinite]"
                  }`} 
                />
                {/* Inner pulsing glow backdrop */}
                <div className={`absolute inset-3 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-1000 ${
                  activeStep !== null ? "shadow-[inset_0_0_20px_rgba(255,255,255,0.08)] border-white/15" : ""
                }`}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep ?? "idle"}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      <CurrentIcon className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Step Nodes Arranged Radially around the track */}
              {steps.map((step, index) => {
                const angle = -Math.PI / 2 + (index * 2 * Math.PI) / 7
                const xPercent = 50 + 36 * Math.cos(angle)
                const yPercent = 50 + 36 * Math.sin(angle)
                
                const isActive = activeStep === index
                const isCompleted = activeStep !== null && activeStep > index
                
                return (
                  <motion.button
                    key={step.title}
                    onClick={() => {
                      if (!isPlaying) {
                        setActiveStep(index)
                        setTerminalLogs(logFeed.filter((l) => l.step === index))
                      }
                    }}
                    disabled={isPlaying}
                    className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex flex-col items-center justify-center font-mono text-[9px] transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.45)] scale-110"
                        : isCompleted
                          ? "bg-white/10 border-white/40 text-white"
                          : "bg-[#070707] border-white/20 text-white/45 hover:border-white/50 hover:text-white/80"
                    }`}
                    style={{
                      left: `${xPercent}%`,
                      top: `${yPercent}%`,
                      transform: "translate(-50%, -50%)"
                    }}
                    whileHover={!isPlaying ? { scale: 1.15 } : {}}
                    whileTap={!isPlaying ? { scale: 0.95 } : {}}
                  >
                    <span>0{index + 1}</span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-35" />
                    )}
                  </motion.button>
                )
              })}

            </div>
          </div>

          {/* Right Column: Console Details & Logs HUD */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between min-h-[380px]">
            
            {/* Step Meta Box */}
            <div className="border border-white/10 bg-[#0a0a0a]/50 p-5 rounded-xs min-h-[140px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {currentStep ? (
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div>
                      <span className="font-mono text-[8px] text-white/40 uppercase tracking-[0.2em] block">
                        NODE_INDEX_0{activeStep + 1} // {currentStep.subtitle}
                      </span>
                      <h3 className="font-sans text-xl font-light text-white tracking-tight mt-1">
                        {currentStep.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {currentStep.description}
                    </p>
                  </motion.div>
                ) : (
                  <div className="text-center font-mono text-[9px] text-white/30 italic">
                    // INITIALIZE RUN OR SELECT CYBER-DIAL NODE
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Console Stdout Logs Terminal Screen */}
            <div className="flex-1 flex flex-col bg-[#050505] border border-white/5 rounded-xs overflow-hidden h-[220px]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#0a0a0a] font-mono text-[9px] text-muted-foreground select-none">
                <span>CONSOLE_STDOUT_PIPE</span>
                <span>RUN: {isPlaying ? "ACTIVE" : terminalLogs.length > 0 ? "DONE" : "STANDBY"}</span>
              </div>

              {/* Logs Stream */}
              <div 
                ref={terminalBodyRef}
                className="p-4 flex-1 overflow-y-auto font-mono text-[9px] space-y-2.5 leading-normal scrollbar-none"
              >
                <AnimatePresence>
                  {terminalLogs.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.35 }}
                      className="text-white text-center py-12 italic font-mono"
                    >
                      // READY FOR SYSTEM RUN INGRESS...<br />
                      // CLICK [RUN SIMULATION] TO START PIPELINE
                    </motion.div>
                  ) : (
                    terminalLogs.map((log, index) => {
                      let textClass = "text-white/80"
                      if (log.type === "success") textClass = "text-green-400 font-bold"
                      if (log.type === "warn") textClass = "text-amber-400 font-bold"
                      if (log.type === "system") textClass = "text-white/60"

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-3 border-l border-white/5 pl-2 py-0.5"
                        >
                          <span className="text-white/40 text-[9px] font-bold">{log.time}</span>
                          <p className={`flex-1 ${textClass}`}>{log.text}</p>
                        </motion.div>
                      )
                    })
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-white/5 bg-[#090909] font-mono text-[8px] text-white/40 flex items-center justify-between select-none">
                <span>SYS_STATUS: {isPlaying ? "STREAMING" : terminalLogs.length > 0 ? "SUCCESS" : "STANDBY"}</span>
                <span>LOGS: {terminalLogs.length}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
