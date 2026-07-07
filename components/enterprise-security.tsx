"use client"

import { motion } from "framer-motion"
import { Shield, Lock, FileSpreadsheet, Layers, CheckSquare, Users } from "lucide-react"

interface SecurityCard {
  tag: string
  title: string
  description: string
  spec: string
  icon: any
}

const cards: SecurityCard[] = [
  {
    tag: "[ SEC_RBAC ]",
    title: "Role-Based Access Control",
    description: "Granular authorization schemas mapping agent tool access rights directly to organizational roles. Prevents unauthorized execution loops.",
    spec: "Directory Sync Sync // SAML SSO",
    icon: Shield
  },
  {
    tag: "[ SEC_CRYPT ]",
    title: "End-to-End Encryption",
    description: "All parameters, memory stores, and vector embeddings are cryptographically sealed using TLS 1.3 in transit and AES-256 at rest.",
    spec: "AES-256 // TLS 1.3 // KMS Integrations",
    icon: Lock
  },
  {
    tag: "[ SEC_AUDIT ]",
    title: "Comprehensive Audit Logs",
    description: "Immutable transaction logs capturing every cognitive decision step, model output, and system action. Exports instantly to SIEM providers.",
    spec: "SIEM Integrations // Crypto Hashing",
    icon: FileSpreadsheet
  },
  {
    tag: "[ SEC_ISOLATE ]",
    title: "Multi-Tenant Isolation",
    description: "Each workspace compiles in a sandboxed runtime environment. Strict database virtualization prevents memory or model cross-leakage.",
    spec: "Docker Sandbox // Virtual DB VPC",
    icon: Layers
  },
  {
    tag: "[ SEC_COMPLY ]",
    title: "Compliance Alignment",
    description: "Engineered to satisfy rigorous regulatory standards. Pre-configured structures map directly to SOC 2 Type II, GDPR, and HIPAA rules.",
    spec: "SOC 2 Ready // HIPAA Compatible",
    icon: CheckSquare
  },
  {
    tag: "[ SEC_HITL ]",
    title: "Human-in-the-Loop Gates",
    description: "Enforces mandatory human validation checkouts on high-risk operations (e.g. database writes, email dispatches) before execution.",
    spec: "Supervisor MFA // Slack Approve App",
    icon: Users
  }
]

export function EnterpriseSecurity() {
  return (
    <section id="security" className="relative py-24 px-8 md:px-12 md:py-32 bg-[#050505] border-b border-white/10">
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
            Security & Compliance
          </span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            Enterprise Security
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
            Enterprise buyers look for rigorous safeguards. We deploy cryptographic keys, sandboxed containers, and human validation gates to protect mission-critical business data.
          </p>
        </motion.div>
      </div>

      {/* 3x2 Grid of Security Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {cards.map((card, index) => {
          const CardIcon = card.icon
          
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative border border-white/10 bg-white/[0.01] rounded-sm p-6 md:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:bg-white/[0.02] group select-none"
            >
              {/* HUD corner decorations for premium tech vault style */}
              <div className="absolute top-0 left-0 w-2 h-px bg-white/20 transition-colors duration-300 group-hover:bg-white/50" />
              <div className="absolute top-0 left-0 w-px h-2 bg-white/20 transition-colors duration-300 group-hover:bg-white/50" />
              <div className="absolute bottom-0 right-0 w-2 h-px bg-white/20 transition-colors duration-300 group-hover:bg-white/50" />
              <div className="absolute bottom-0 right-0 w-px h-2 bg-white/20 transition-colors duration-300 group-hover:bg-white/50" />

              {/* Card Header: Tag & Icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-white/40 tracking-wider">
                  {card.tag}
                </span>
                <div className="p-2 border border-white/10 bg-white/[0.02] text-white/50 rounded-xs transition-colors duration-300 group-hover:border-white/30 group-hover:text-white">
                  <CardIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body: Title & Description */}
              <div className="space-y-3 pt-4">
                <h3 className="font-sans text-lg font-light text-white tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Footer: Monospace specifications */}
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest block">
                  TECHNICAL_STANDARD
                </span>
                <span className="font-mono text-[9px] text-white/70 block mt-1">
                  {card.spec}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
