"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "repairs",
    title: "Elite Roof Repairs",
    description: "Precision diagnostics and rapid restoration for leaks, storm damage, and wear. We don't just patch; we restore your peace of mind with surgical accuracy.",
    imageIcon: "/images/icons/recovery.png",
    href: "#repairs",
    features: [
      "Emergency response teams",
      "Advanced leak detection",
      "Storm & hail restoration",
      "Precision shingle matching",
      "Structural flashing repair",
      "Integrated drainage solutions"
    ],
    image: "/images/project-1.jpg"
  },
  {
    id: "installation",
    title: "Premium Installations",
    description: "Architectural-grade roofing systems engineered for longevity. We utilize top-tier materials and master-level craftsmanship to build roofs that are as beautiful as they are resilient.",
    imageIcon: "/images/icons/installation.png",
    href: "#installation",
    features: [
      "Designer architectural shingles",
      "Standing seam metal systems",
      "Performance flat-roofing",
      "Impact-resistant options",
      "Certified lifetime warranties",
      "Master-Elite installation"
    ],
    image: "/images/project-2.jpg"
  },
  {
    id: "inspection",
    title: "Diagnostic Inspections",
    description: "Comprehensive 50-point structural evaluations. We provide detailed digital documentation and expert analysis to catch vulnerabilities before they become liabilities.",
    imageIcon: "/images/icons/diagnostic.png",
    href: "#inspection",
    features: [
      "Pre-acquisition assessments",
      "Post-storm forensic analysis",
      "Insurance claim support",
      "Thermal imaging available",
      "Detailed condition reporting",
      "Strategic lifespan planning"
    ],
    image: "/images/project-1.jpg"
  },
  {
    id: "maintenance",
    title: "Preservation Programs",
    description: "Proactive care designed to maximize the lifespan of your investment. Our recurring maintenance ensures your roof remains in peak condition through every season.",
    imageIcon: "/images/icons/preservation.png",
    href: "#maintenance",
    features: [
      "Bi-annual deep cleaning",
      "Critical point sealing",
      "Gutter system optimization",
      "Surface debris extraction",
      "Moss & lichen remediation",
      "Proactive integrity testing"
    ],
    image: "/images/project-2.jpg"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 font-semibold text-sm tracking-wider uppercase backdrop-blur-sm">
              Our Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              Master-Class <span className="text-slate-400">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              We provide a comprehensive suite of roofing services tailored for those who
              demand uncompromising quality and architectural excellence.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-24 relative">
        <Container>
          <div className="space-y-40">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  {/* Image Container */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/5">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content Container */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div className="w-20 h-20 mb-8 rounded-3xl overflow-hidden relative border border-white/5">
                      <Image
                        src={service.imageIcon}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                      {service.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-slate-300">
                          <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href="/contact"
                      className="bg-white hover:bg-slate-200 text-slate-950 rounded-full px-8"
                    >
                      Consult an Expert
                    </Button>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modern CTA Section */}
      <section className="py-32 relative overflow-hidden bg-slate-900/30 border-t border-white/5">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Unsure which path forward is best?
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-light">
              Every home and structure has unique requirements. Join us for a
              complimentary technical consultation where we analyze your roof's
              current state and define a strategic plan for its future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-full w-full sm:w-auto px-10"
              >
                Schedule Consultation
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="lg"
                className="border-white/10 hover:border-white text-white rounded-full w-full sm:w-auto px-10"
              >
                View Past Work
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
