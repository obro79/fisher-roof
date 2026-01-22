"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

// -- Data --
const services = [
  {
    title: "Elite Roof Repairs",
    description: "Precision diagnostics and rapid restoration for leaks, storm damage, and wear. We don't just patch; we perfect.",
    imageIcon: "/images/icons/recovery.png",
    href: "/services#repairs"
  },
  {
    title: "Premium Installations",
    description: "Architectural-grade roofing systems. We use only top-tier materials to ensure your home looks stunning and stays protected for decades.",
    imageIcon: "/images/icons/installation.png",
    href: "/services#installation"
  },
  {
    title: "Preventative Care",
    description: "Advanced inspections and maintenance programs designed to extend the lifespan of your roof and prevent costly emergencies.",
    imageIcon: "/images/icons/diagnostic.png",
    href: "/services#maintenance"
  }
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

const testimonials = [
  {
    quote: "Absolutely world-class service. The team was professional, clean, and the final result exceeded our wildest expectations.",
    author: "Sarah Mitchell",
    role: "Estate Owner"
  },
  {
    quote: "Fisher's Exteriors transformed our home. The attention to detail is unlike anything I've seen in this industry.",
    author: "James Reynolds",
    role: "Architect"
  },
  {
    quote: "Prompt, honest, and incredibly skilled. I wouldn't trust my roof to anyone else.",
    author: "Elena Rodriguez",
    role: "Homeowner"
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/project-1.jpg"
            alt="Luxury Roofing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </motion.div>

        {/* Content */}
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-slate-200 font-semibold text-sm tracking-wider uppercase backdrop-blur-sm">
              Premier Roofing Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Elevate Your <br />
              <span className="text-slate-200">
                Standards
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Experience the perfect blend of aesthetic mastery and structural integrity.
              We protect what matters most with uncompromising quality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-full transition-all hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-white/20 hover:border-white text-white font-semibold rounded-full transition-all hover:bg-white/5"
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-slate-400 to-transparent mx-auto" />
          <span className="text-xs tracking-widest uppercase mt-2 block">Scroll</span>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 relative">
        {/* Subtle blur blob instead of neon */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <AnimatedSection className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our Expertise
            </h2>
            <div className="w-20 h-1 bg-slate-700 rounded-full mb-6" />
            <p className="text-slate-400 text-lg max-w-2xl">
              From minor repairs to major installations, our approach is defined by precision,
              quality materials, and an obsession with detail.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 border-y border-white/5 bg-slate-900/50">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* --- PORTFOLIO PREVIEW --- */}
      <section id="work" className="py-32">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Recent Works
              </h2>
              <p className="text-slate-400 text-lg">A showcase of our finest craftsmanship.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link href="/portfolio" className="text-white hover:text-slate-300 transition-colors flex items-center group">
                View All Projects
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="/images/project-1.jpg"
                alt="Modern Residential"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full inline-block mb-3 backdrop-blur-sm border border-white/20">
                  RESIDENTIAL
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Modern Slate Renovation</h3>
                <p className="text-slate-300 text-sm">Santa Monica, CA</p>
              </div>
            </AnimatedSection>

            <div className="grid gap-8">
              <AnimatedSection delay={0.1} className="group relative overflow-hidden rounded-3xl aspect-[16/9]">
                <Image
                  src="/images/project-2.jpg"
                  alt="Commercial Project"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full inline-block mb-3 backdrop-blur-sm border border-white/20">
                    COMMERCIAL
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tech Hub HQ Roof</h3>
                  <p className="text-slate-300 text-sm">Silicon Valley, CA</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="group relative overflow-hidden rounded-3xl aspect-[16/9] bg-slate-800 flex items-center justify-center border border-white/5 hover:border-white/20 transition-colors">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">View 20+ More</h3>
                  <p className="text-slate-400 text-sm">Explore our full portfolio</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-32 relative bg-slate-900/30">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Client Stories</h2>
            <p className="text-slate-400">Voices of those we've had the privilege to serve.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-white/5 p-8 rounded-2xl h-full hover:border-white/20 transition-colors">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-slate-200" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50" />

        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Ready to upgrade?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Secure your home with the protection it deserves.
              Contact us today for a complimentary detailed assessment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-slate-200 text-slate-900 text-lg font-bold rounded-full transition-all hover:scale-105"
            >
              Get Your Free Estimate
            </Link>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
