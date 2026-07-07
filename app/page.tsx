import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Works } from "@/components/works"
import { EnterpriseArchitecture } from "@/components/enterprise-architecture"
import { IntegrationsAnimation } from "@/components/integrations-animation"
import { EnterpriseSecurity } from "@/components/enterprise-security"
import { VisionStatement } from "@/components/vision-statement"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <About />
        <Works />
        <EnterpriseArchitecture />
        <IntegrationsAnimation />
        <EnterpriseSecurity />
        <VisionStatement />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
