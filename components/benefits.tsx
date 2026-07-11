"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Brain, Cpu, Zap, Radio, Network, Scale, Eye } from "lucide-react"

interface Benefit {
  num: string
  title: string
  description: string
  category: string
  codeSnippet: string
  stat: string
  icon: any
}

const benefits: Benefit[] = [
  {
    num: "01",
    title: "Unified Enterprise Intelligence",
    description: "Break down information silos by connecting documents, emails, applications, conversations, and business data into a single AI-powered knowledge ecosystem that every team can access.",
    category: "INTELLIGENCE",
    stat: "100% Data Connected",
    codeSnippet: `// initialize intelligence graph
const nexaos = new Nexaos();
await nexaos.connect({
  sources: ["docs", "emails", "conversations"],
  privacy: "strict-tenant-isolation"
});`,
    icon: Brain,
  },
  {
    num: "02",
    title: "Increased Productivity",
    description: "Reduce repetitive work by automating routine tasks, coordinating AI agents, and enabling employees to focus on strategic, high-value initiatives.",
    category: "PRODUCTIVITY",
    stat: "40%+ Hours Saved",
    codeSnippet: `// deploy workflow agents
const scheduler = new Agent("Scheduler");
const executor = new Agent("Executor");
await scheduler.coordinate(executor, {
  task: "process-billing-reconciliation"
});`,
    icon: Zap,
  },
  {
    num: "03",
    title: "Smarter Decision Making",
    description: "Provide teams with instant access to organizational knowledge, real-time insights, contextual recommendations, and AI-assisted decision support.",
    category: "INTELLIGENCE",
    stat: "Real-time Context",
    codeSnippet: `// query contextual recommendations
const query = "Q3 financial forecast comparison";
const insights = await nexaos.retrieveContext(query, {
  depth: "deep-semantic-search"
});`,
    icon: Eye,
  },
  {
    num: "04",
    title: "Enterprise Automation",
    description: "Automate workflows across departments using intelligent triggers, event-driven processes, autonomous AI agents, and configurable approval systems.",
    category: "AUTOMATION",
    stat: "Event-driven workflows",
    codeSnippet: `// event trigger workflow hook
nexaos.on("opportunity-closed", async (deal) => {
  await nexaos.trigger("provision-service", {
    clientId: deal.clientId
  });
});`,
    icon: Cpu,
  },
  {
    num: "05",
    title: "Secure by Design",
    description: "Protect organizational data with enterprise-grade authentication, role-based permissions, tenant isolation, audit logs, encryption, and governance controls.",
    category: "SECURITY",
    stat: "Zero-Trust Protocol",
    codeSnippet: `// enforce governance controls
const guard = new SecurityGatekeeper();
await guard.enforce({
  auth: "multi-tenant-isolation",
  encryption: "AES-GCM-256"
});`,
    icon: Shield,
  },
  {
    num: "06",
    title: "Seamless Connectivity",
    description: "Integrate with existing business tools, communication platforms, cloud storage providers, CRMs, calendars, and custom APIs without disrupting existing workflows.",
    category: "CONNECTIVITY",
    stat: "Extensible Connectors",
    codeSnippet: `// connect APIs and services
await nexaos.registerConnector("custom-crm", {
  auth: "OAuth2",
  endpoints: ["/users", "/deals"]
});`,
    icon: Radio,
  },
  {
    num: "07",
    title: "Scalable for Growth",
    description: "Whether you're managing a startup or a global enterprise, the platform scales with your organization through a flexible multi-tenant architecture and modular design.",
    category: "SCALABILITY",
    stat: "Multi-tenant Clusters",
    codeSnippet: `// cluster configuration scaling
const cluster = new ScalableCluster();
await cluster.replicate({
  nodes: 5,
  region: "iad-east-1"
});`,
    icon: Network,
  },
  {
    num: "08",
    title: "Future-Ready Platform",
    description: "Designed to continuously evolve with new AI models, enterprise integrations, industry-specific modules, and emerging technologies, ensuring your organization remains ready for the future.",
    category: "FUTURE",
    stat: "Model Agnostic",
    codeSnippet: `// upgrade core AI models dynamically
await nexaos.models.upgrade({
  primary: "gpt-5-preview",
  fallback: "claude-4"
});`,
    icon: Scale,
  },
]

export function Benefits() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-[#050505] border-b border-white/10 overflow-hidden">
      {/* Subtle tech crosshairs / grids */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-4">
              Value Proposition // Capability Grid
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
              Why Organizations Choose nexaos.AI
            </h2>
            <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              nexaos.AI transforms the way organizations work by bringing intelligence, automation, and enterprise knowledge into one unified platform.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Split Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Navigation Items (Cols: 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2">
            {benefits.map((benefit, index) => {
              const isActive = activeIndex === index
              const BenefitIcon = benefit.icon

              return (
                <button
                  key={benefit.num}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-center justify-between text-left p-4 border transition-all duration-300 relative group cursor-default ${
                    isActive
                      ? "bg-white/[0.03] border-white/20"
                      : "bg-transparent border-transparent hover:bg-white/[0.01]"
                  }`}
                >
                  {/* Left edge border accent */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBenefitBorder"
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs transition-colors duration-300 ${
                      isActive ? "text-white font-bold" : "text-white/30"
                    }`}>
                      [{benefit.num}]
                    </span>
                    <h3 className={`font-sans text-base transition-colors duration-300 ${
                      isActive ? "text-white font-light" : "text-white/60 group-hover:text-white/90"
                    }`}>
                      {benefit.title}
                    </h3>
                  </div>

                  <div className={`p-1.5 border rounded-xs transition-all duration-300 ${
                    isActive
                      ? "border-white/30 bg-white/5 text-white"
                      : "border-transparent text-white/30 group-hover:text-white/60"
                  }`}>
                    <BenefitIcon className="w-3.5 h-3.5" />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: High-tech System Console Preview Screen (Cols: 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-white/10 bg-white/[0.01] p-6 md:p-8 relative">
            {/* Corners decors */}
            <div className="absolute top-0 left-0 w-2.5 h-px bg-white/30" />
            <div className="absolute top-0 left-0 w-px h-2.5 bg-white/30" />
            <div className="absolute bottom-0 right-0 w-2.5 h-px bg-white/30" />
            <div className="absolute bottom-0 right-0 w-px h-2.5 bg-white/30" />
            
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-mono text-[9px] tracking-wider text-white/50 uppercase">
                  SYSTEM MONITOR: ACTIVE // NODE_ID: {benefits[activeIndex].num}
                </span>
              </div>
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                CLASS: {benefits[activeIndex].category}
              </span>
            </div>

            {/* Console Content Area */}
            <div className="flex-grow flex flex-col justify-between gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <span className="font-mono text-xs text-white/40 block">
                    [ DIAGNOSTICS_REPORT ]
                  </span>
                  <p className="font-sans text-lg font-light leading-relaxed text-white/90">
                    {benefits[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* High-tech Code Terminal Visualizer */}
              <div className="border border-white/5 bg-[#030303] p-4 font-mono text-[11px] leading-relaxed text-white/70 overflow-x-auto select-none">
                <div className="flex items-center justify-between text-white/30 border-b border-white/5 pb-2 mb-3">
                  <span>NEXAOS_CONSOLE_INIT</span>
                  <span>UTF-8</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/80"
                  >
                    {benefits[activeIndex].codeSnippet}
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>

            {/* Console Footer */}
            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-6">
              <div className="font-mono text-[9px] text-white/30">
                PROCEED_KEY: OK_LOADED
              </div>
              <div className="font-mono text-[10px] text-white tracking-widest uppercase">
                // {benefits[activeIndex].stat}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
