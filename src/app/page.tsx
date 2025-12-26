"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Roof Repairs",
    description: "Fast, reliable repairs to fix leaks, storm damage, and wear. We restore your roof to peak condition.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    href: "/services#repairs"
  },
  {
    title: "New Installations",
    description: "Premium roofing installations using top-quality materials. Built to protect your home for decades.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: "/services#installation"
  },
  {
    title: "Inspections",
    description: "Comprehensive roof inspections to catch problems early and extend your roof&apos;s lifespan.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    href: "/services#inspection"
  },
  {
    title: "Maintenance",
    description: "Regular maintenance programs to keep your roof in excellent condition year-round.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "/services#maintenance"
  }
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Emergency Service" }
];

const testimonials = [
  {
    quote: "Fisher's Exteriors did an amazing job on our roof. Professional, punctual, and the quality of work exceeded our expectations.",
    author: "Sarah M.",
    role: "Homeowner"
  },
  {
    quote: "After the storm damaged our roof, they responded within hours. Their team was incredibly efficient and thorough.",
    author: "Michael R.",
    role: "Homeowner"
  },
  {
    quote: "Best roofing company in the area. Fair pricing, excellent communication, and beautiful results.",
    author: "Jennifer L.",
    role: "Homeowner"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project-1.jpg"
            alt="Roofing project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-[#0D9488]/40" />
        </div>

        {/* Content */}
        <Container className="relative z-10 pt-24 lg:pt-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
            >
              Protect Your Home with
              <span className="text-[#14B8A6]"> Expert Roofing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Professional roofing services you can trust. From repairs to complete installations, we deliver quality craftsmanship that stands the test of time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0F172A]">
                View Our Work
              </Button>
            </motion.div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-28 lg:py-32 bg-[#F8FAFC]">
        <Container>
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">
              Our Services
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto text-lg lg:text-xl">
              Comprehensive roofing solutions tailored to protect and enhance your property
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-[#0F172A]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D9488] mb-3">
                  {stat.value}
                </div>
                <div className="text-[#94A3B8] text-sm lg:text-base tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-28 lg:py-32">
        <Container>
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">
              Our Recent Work
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto text-lg lg:text-xl">
              See the quality and craftsmanship we bring to every project
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[1, 2, 1].map((num, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={`/images/project-${num}.jpg`}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">Residential Roofing</h3>
                  <p className="text-gray-300 text-sm">Complete roof installation</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Button href="/portfolio" variant="secondary">
              View All Projects
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 lg:py-32 bg-[#F8FAFC]">
        <Container>
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">
              What Our Clients Say
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto text-lg lg:text-xl">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-lg"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#64748B] mb-8 leading-relaxed text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-[#0F172A]">{testimonial.author}</div>
                  <div className="text-sm text-[#94A3B8]">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#0D9488]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg lg:text-xl mb-10">
              Contact us today for a free, no-obligation quote. We&apos;ll assess your needs and provide a detailed estimate.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-[#0D9488] hover:bg-gray-100">
              Get Your Free Quote
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
