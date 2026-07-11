"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, Database, Eye, GitMerge, Inbox, Activity, Shield } from "lucide-react"

// Define the architecture nodes and their details
const nodes = {
  aiops: {
    title: "nexaos.AI",
    subtitle: "Central Control Kernel",
    description: "The core platform kernel managing process scheduling, memory allocation, context routing, and security policies across all cognitive layers and workflow runtimes.",
    specs: ["Latency: 4ms", "Throughput: 10k tokens/sec", "Security: Zero-Trust Encrypted"],
    icon: Cpu
  },
  knowledge: {
    title: "Knowledge Layer",
    subtitle: "Semantic Retrieval Engine",
    description: "Parses corporate databases and document portals into semantic schemas, organizing unstructured knowledge into vector embeddings for accurate contextual groundings.",
    specs: ["Indexing: Vector Embeddings", "Relevance Score: >0.92", "Sync: Real-Time Event-Driven"],
    icon: Database
  },
  memory: {
    title: "Memory Store",
    subtitle: "Contextual Cache & Log",
    description: "Maintains long-term persistent memory state and active context window caching, letting agents retain instructions, rules, and user interaction histories over time.",
    specs: ["Storage: Hierarchical Key-Value", "TTL: Configurable / Permanent", "Recall Rate: 100%"],
    icon: Eye
  },
  manager: {
    title: "AI Manager",
    subtitle: "Cognitive Agent Coordinator",
    description: "The agentic manager layer that receives user intent, plans task execution steps, registers subroutines, and dispatches instructions to specialized models.",
    specs: ["Planning: ReAct / Chain-of-Thought", "Dispatch Latency: 12ms", "Models: Multi-LLM Routing"],
    icon: GitMerge
  },
  agents: {
    title: "AI Agents",
    subtitle: "Role-Specific Automators",
    description: "Autonomous, tool-equipped cognitive workers designed for targeted operations (e.g. database compiler, code auditor, customer service routing assistant).",
    specs: ["Tool Integration: Code Sandbox / API", "Max Loop Count: 15 threads", "Autonomy Level: High"],
    icon: Activity
  },
  engine: {
    title: "Workflow Engine",
    subtitle: "State Machine Runtime",
    description: "Executes conditional workflow paths, manages job state transitions, monitors system webhooks, and manages background event loops.",
    specs: ["Type: Low-Latency State Machine", "Max Steps: Unlimited", "Concurrency: 1000 tasks"],
    icon: GitMerge
  },
  automations: {
    title: "Automations",
    subtitle: "Autonomous Job Runners",
    description: "Executes scheduled background processes, vector database synchronizations, and reporting triggers without requiring manual user initiation.",
    specs: ["Scheduler: Cron / Webhook Event", "Runner: Node sandbox", "Failover: Automatic Retry"],
    icon: Cpu
  },
  integrations: {
    title: "Integrations Layer",
    subtitle: "Enterprise Connector Core",
    description: "Provides secure data ingress/egress tunnels between nexaos.AI and external third-party software, databases, and APIs.",
    specs: ["Connectors: Pre-built & Custom", "Format: REST / gRPC / Webhook", "Auth: OAuth2 / API Key"],
    icon: Inbox
  },
  connectors: {
    title: "Gmail / Slack / CRM",
    subtitle: "External Software Gateways",
    description: "Active adapter endpoints syncing messaging channels (Slack, Teams), communications (Gmail, Outlook), and enterprise records (Salesforce, HubSpot).",
    specs: ["Protocols: Webhook Streams", "Rate Limiting: Auto-throttle", "Encryption: TLS 1.3"],
    icon: Inbox
  },
  intelligence: {
    title: "Enterprise Intelligence",
    subtitle: "Unified Outcome Layer",
    description: "The aggregated platform outcome layer where automated workflows, semantic memory cache, and cognitive agents sync to drive decision intelligence.",
    specs: ["Optimization: Continuous Learning", "Efficiency ROI: Measured", "Kernel Integration: Native"],
    icon: Shield
  }
}

type NodeKey = keyof typeof nodes

export function EnterpriseArchitecture() {
  const [activeNode, setActiveNode] = useState<NodeKey>("aiops")
  const [hoveredNode, setHoveredNode] = useState<NodeKey | null>(null)

  const currentNode = nodes[hoveredNode || activeNode]
  const CurrentIcon = currentNode.icon

  // Helper function to check if a specific connection line path should highlight
  const isLineHighlighted = (source: string, target: string) => {
    const focusNode = hoveredNode || activeNode
    
    if (focusNode === "aiops") {
      return source === "root"
    }
    if (focusNode === "intelligence") {
      return target === "base"
    }

    if (focusNode === "knowledge" || focusNode === "memory") {
      return source === "col1" || (focusNode === "memory" && source === "knowledge" && target === "memory")
    }
    if (focusNode === "manager" || focusNode === "agents") {
      return source === "col2" || (focusNode === "agents" && source === "manager" && target === "agents")
    }
    if (focusNode === "engine" || focusNode === "automations") {
      return source === "col3" || (focusNode === "automations" && source === "engine" && target === "automations")
    }
    if (focusNode === "integrations" || focusNode === "connectors") {
      return source === "col4" || (focusNode === "connectors" && source === "integrations" && target === "connectors")
    }
    return false
  }

  return (
    <section id="architecture" className="relative py-24 px-8 md:px-12 md:py-32 bg-[#050505] border-b border-white/10">
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
            System Topology
          </span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            Enterprise Architecture
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
            Visualize the architectural blueprints of AIOpS. Hover over any system module in the flow chart below to audit its data pathways, process specs, and system dependencies.
          </p>
        </motion.div>
      </div>

      {/* Main Grid: Left Flow Chart, Right Detail HUD */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column: Interactive Diagram Grid */}
        <div className="lg:col-span-8 w-full flex flex-col items-center overflow-x-auto py-6">
          <div className="min-w-[640px] w-full flex flex-col items-center">
            
            {/* ROW 1: nexaos.AI (Root) */}
            <div className="w-full flex justify-center">
              <motion.button
                onClick={() => setActiveNode("aiops")}
                onMouseEnter={() => setHoveredNode("aiops")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`px-6 py-3.5 border rounded-sm font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeNode === "aiops" || hoveredNode === "aiops"
                    ? "bg-white/15 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    : "bg-white/[0.02] border-white/20 text-white/60 hover:border-white/50"
                }`}
              >
                nexaos.AI
              </motion.button>
            </div>

            {/* CONNECTOR 1: Root to 4 Columns */}
            <div className="w-full h-12 relative">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Stem */}
                <line 
                  x1="50%" y1="0" x2="50%" y2="50%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("root", "stem") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Horizontal branch */}
                <line 
                  x1="12.5%" y1="50%" x2="87.5%" y2="50%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${
                    isLineHighlighted("root", "stem") || 
                    isLineHighlighted("knowledge", "main") || 
                    isLineHighlighted("manager", "main") || 
                    isLineHighlighted("engine", "main") || 
                    isLineHighlighted("integrations", "main")
                      ? "stroke-white" : "stroke-white/15"
                  }`}
                />
                {/* Col 1 Drop */}
                <line 
                  x1="12.5%" y1="50%" x2="12.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("knowledge", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Col 2 Drop */}
                <line 
                  x1="37.5%" y1="50%" x2="37.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("manager", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Col 3 Drop */}
                <line 
                  x1="62.5%" y1="50%" x2="62.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("engine", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Col 4 Drop */}
                <line 
                  x1="87.5%" y1="50%" x2="87.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("integrations", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
              </svg>
            </div>

            {/* ROW 3: Column Headers */}
            <div className="w-full grid grid-cols-4 gap-4 text-center">
              {[
                { key: "knowledge" as NodeKey, title: "Knowledge" },
                { key: "manager" as NodeKey, title: "AI Manager" },
                { key: "engine" as NodeKey, title: "Workflow Engine" },
                { key: "integrations" as NodeKey, title: "Integrations" }
              ].map((col) => (
                <div key={col.key} className="flex justify-center">
                  <motion.button
                    onClick={() => setActiveNode(col.key)}
                    onMouseEnter={() => setHoveredNode(col.key)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`w-full max-w-[150px] py-3.5 border rounded-sm font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                      activeNode === col.key || hoveredNode === col.key
                        ? "bg-white/15 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        : "bg-white/[0.01] border-white/15 text-white/50 hover:border-white/40"
                    }`}
                  >
                    {col.title}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* CONNECTOR 2: Columns Headers to Children */}
            <div className="w-full h-12 relative">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line 
                  x1="12.5%" y1="0" x2="12.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("knowledge", "memory") ? "stroke-white" : "stroke-white/15"}`}
                />
                <line 
                  x1="37.5%" y1="0" x2="37.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("manager", "agents") ? "stroke-white" : "stroke-white/15"}`}
                />
                <line 
                  x1="62.5%" y1="0" x2="62.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("engine", "automations") ? "stroke-white" : "stroke-white/15"}`}
                />
                <line 
                  x1="87.5%" y1="0" x2="87.5%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("integrations", "connectors") ? "stroke-white" : "stroke-white/15"}`}
                />
              </svg>
            </div>

            {/* ROW 5: Column Children */}
            <div className="w-full grid grid-cols-4 gap-4 text-center">
              {[
                { key: "memory" as NodeKey, title: "Memory" },
                { key: "agents" as NodeKey, title: "AI Agents" },
                { key: "automations" as NodeKey, title: "Automations" },
                { key: "connectors" as NodeKey, title: "Gmail Slack CRM" }
              ].map((col) => (
                <div key={col.key} className="flex justify-center">
                  <motion.button
                    onClick={() => setActiveNode(col.key)}
                    onMouseEnter={() => setHoveredNode(col.key)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`w-full max-w-[150px] py-3.5 border rounded-sm font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                      activeNode === col.key || hoveredNode === col.key
                        ? "bg-white/15 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        : "bg-white/[0.01] border-white/15 text-white/50 hover:border-white/40"
                    }`}
                  >
                    {col.title}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* CONNECTOR 3: Column Children to Unified Footer */}
            <div className="w-full h-12 relative">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Col 1 Rise */}
                <line 
                  x1="12.5%" y1="0" x2="12.5%" y2="50%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("memory", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Col 2 Rise */}
                <line 
                  x1="37.5%" y1="0" x2="37.5%" y2="50%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("agents", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Col 3 Rise */}
                <line 
                  x1="62.5%" y1="0" x2="62.5%" y2="50%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("automations", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Col 4 Rise */}
                <line 
                  x1="87.5%" y1="0" x2="87.5%" y2="50%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("connectors", "drop") ? "stroke-white" : "stroke-white/15"}`}
                />
                {/* Horizontal branch */}
                <line 
                  x1="12.5%" y1="50%" x2="87.5%" y2="50%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${
                    isLineHighlighted("intelligence", "main") || 
                    isLineHighlighted("memory", "drop") || 
                    isLineHighlighted("agents", "drop") || 
                    isLineHighlighted("automations", "drop") || 
                    isLineHighlighted("connectors", "drop")
                      ? "stroke-white" : "stroke-white/15"
                  }`}
                />
                {/* Stem */}
                <line 
                  x1="50%" y1="50%" x2="50%" y2="100%" 
                  className={`stroke-[1.5] transition-colors duration-300 ${isLineHighlighted("intelligence", "stem") ? "stroke-white" : "stroke-white/15"}`}
                />
              </svg>
            </div>

            {/* ROW 7: Enterprise Intelligence (Foundation) */}
            <div className="w-full flex justify-center">
              <motion.button
                onClick={() => setActiveNode("intelligence")}
                onMouseEnter={() => setHoveredNode("intelligence")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`px-8 py-4 border rounded-sm font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeNode === "intelligence" || hoveredNode === "intelligence"
                    ? "bg-white/15 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    : "bg-white/[0.02] border-white/20 text-white/60 hover:border-white/50"
                }`}
              >
                Enterprise Intelligence
              </motion.button>
            </div>

          </div>
        </div>

        {/* Right Column: Detail HUD Panel */}
        <div className="lg:col-span-4 w-full">
          <div className="relative border border-white/15 bg-white/[0.01] backdrop-blur-md rounded-sm p-6 md:p-8 space-y-6">
            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-4 h-px bg-white/40" />
            <div className="absolute top-0 left-0 w-px h-4 bg-white/40" />
            <div className="absolute bottom-0 right-0 w-4 h-px bg-white/40" />
            <div className="absolute bottom-0 right-0 w-px h-4 bg-white/40" />
            
            {/* Header / Active Indicator */}
            <div className="flex items-center justify-between font-mono text-[9px] text-muted-foreground border-b border-white/10 pb-4">
              <span>SYS_AUDIT_INFO_PANEL</span>
              <span className="text-white font-bold animate-pulse">// ACTIVE_READOUT</span>
            </div>

            {/* Node Icon and Titles */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 border border-white/20 bg-white/5 text-white rounded-xs">
                  <CurrentIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-light text-white tracking-tight leading-none">
                    {currentNode.title}
                  </h3>
                  <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest block mt-1">
                    {currentNode.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-muted-foreground/90 font-light leading-relaxed">
              {currentNode.description}
            </p>

            {/* Specifications List (Nested Royal Blue Box) */}
            <div className="bg-[#2563eb] border border-white/20 rounded-xs p-4 space-y-3 text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="font-mono text-[10px] text-blue-100 tracking-widest uppercase block border-b border-white/20 pb-2">
                Operational Metrics
              </span>
              <ul className="space-y-1.5 font-mono text-[10px] text-white">
                {currentNode.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white/70 rounded-full" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
