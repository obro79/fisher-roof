"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Quality Craftsmanship",
    description: "We take pride in every project, using premium materials and proven techniques to deliver lasting results.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our priority. We communicate clearly, arrive on time, and stand behind our work.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Integrity",
    description: "Honest pricing, transparent communication, and ethical business practices guide everything we do.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Safety",
    description: "We follow strict safety protocols to protect our team, your property, and your family.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    )
  }
];

const certifications = [
  "Licensed & Insured",
  "GAF Certified Contractor",
  "BBB Accredited Business",
  "OSHA Safety Certified"
];

export default function AboutPage() {
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
              About <span className="text-[#14B8A6]">Fisher&apos;s Exteriors</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted partner for professional roofing services
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Fisher's Exteriors team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0D9488] text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm opacity-80">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#64748B] text-lg leading-relaxed">
                <p>
                  Fisher&apos;s Exteriors was founded with a simple mission: to provide homeowners with roofing services they can trust. What started as a small family operation has grown into one of the most respected roofing companies in the area.
                </p>
                <p>
                  Over the years, we&apos;ve completed hundreds of projects, from simple repairs to complete roof installations. Our commitment to quality and customer satisfaction has never wavered.
                </p>
                <p>
                  Today, we continue to serve our community with the same dedication and craftsmanship that built our reputation. Every roof we work on is treated as if it were our own.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Our Values
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#0D9488]/10 rounded-xl flex items-center justify-center text-[#0D9488] mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{value.title}</h3>
                <p className="text-[#64748B]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="py-24">
        <Container>
          <div className="bg-[#0F172A] rounded-3xl p-12 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Certified & Trusted
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  We maintain the highest industry standards and certifications to ensure you receive the best possible service.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-[#0D9488] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/project-2.jpg"
                    alt="Certification"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D9488]">
        <Container>
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Contact us today to discuss your roofing needs and experience the Fisher&apos;s Exteriors difference.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-[#0D9488] hover:bg-gray-100">
              Get in Touch
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
