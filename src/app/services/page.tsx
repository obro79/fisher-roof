"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "repairs",
    title: "Roof Repairs",
    description: "Whether it's a small leak or significant storm damage, our expert team provides fast, reliable repairs to restore your roof's integrity. We diagnose the issue accurately and fix it right the first time.",
    features: [
      "Emergency repair services",
      "Leak detection and repair",
      "Storm damage restoration",
      "Shingle replacement",
      "Flashing repairs",
      "Gutter repairs"
    ],
    image: "/images/project-1.jpg"
  },
  {
    id: "installation",
    title: "New Roof Installation",
    description: "Building a new home or need a complete roof replacement? We install premium roofing systems using top-quality materials that protect your investment for decades to come.",
    features: [
      "Asphalt shingle roofing",
      "Metal roofing systems",
      "Flat roof solutions",
      "Energy-efficient options",
      "Extended warranties",
      "Professional installation"
    ],
    image: "/images/project-2.jpg"
  },
  {
    id: "inspection",
    title: "Roof Inspections",
    description: "Regular inspections help catch problems early before they become expensive repairs. Our comprehensive inspections give you peace of mind and extend your roof's lifespan.",
    features: [
      "Pre-purchase inspections",
      "Annual maintenance inspections",
      "Insurance claim documentation",
      "Detailed written reports",
      "Digital photo documentation",
      "Preventive recommendations"
    ],
    image: "/images/project-1.jpg"
  },
  {
    id: "maintenance",
    title: "Roof Maintenance",
    description: "Proactive maintenance keeps your roof in excellent condition year-round. Our maintenance programs are designed to maximize your roof's lifespan and prevent costly repairs.",
    features: [
      "Regular cleaning",
      "Debris removal",
      "Minor repairs included",
      "Seasonal inspections",
      "Gutter cleaning",
      "Moss and algae treatment"
    ],
    image: "/images/project-2.jpg"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#14B8A6]">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive roofing solutions to protect your home and enhance its value
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-24">
        <Container>
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[#64748B] text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#0D9488] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#64748B]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact">
                      Get a Quote
                    </Button>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D9488]">
        <Container>
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Not sure which service is right for you? Contact us for a free consultation and we&apos;ll help you find the best solution.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-[#0D9488] hover:bg-gray-100">
              Schedule a Consultation
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
