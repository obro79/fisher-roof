"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Master Craftsmanship",
    description: "We don't just build roofs; we engineer architectural protection. Every shingle and seam is a testament to our dedication to perfection.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Unwavering Integrity",
    description: "Transparency is our foundation. From initial diagnostics to final walkthroughs, we provide honest assessments and fair, high-value pricing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "The Client Standard",
    description: "We serve those who expect more. Our white-glove service ensures clear communication, meticulous site cleanliness, and absolute satisfaction.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Structural Safety",
    description: "Our protocols protect what matters most—our team, your home, and your family. We exceed safety standards on every installation and repair.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    )
  }
];

const certifications = [
  "Licensed & Fully Bonded",
  "GAF Master Elite Contractor",
  "BBB Platinum Accredited",
  "OSHA Safety Certified"
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 font-semibold text-sm tracking-wider uppercase backdrop-blur-sm">
              Our Legacy
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]">
              The Pursuit of <br />
              <span className="text-slate-400">Total Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              Since our founding, Fisher&apos;s Exteriors has been defined by a singular
              commitment to architectural integrity and premium structural protection.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/5 shadow-2xl">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Fisher's Exteriors team"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
                {/* Float Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white text-slate-950 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
                  <div className="text-5xl font-display font-bold mb-1 tracking-tight">15+</div>
                  <div className="text-xs font-bold tracking-widest uppercase opacity-70">Years of Mastery</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                Built on Trust <br />
                <span className="text-slate-400">Forged in Quality</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                <p>
                  Fisher&apos;s Exteriors was founded with a simple but uncompromising mission: to provide roofing solutions that survive time, weather, and shifting trends.
                </p>
                <p>
                  What began as a localized family operation has evolved into an elite firm specializing in luxury residential restoration and high-performance commercial roofing. We have grown not by cutting corners, but by obsessing over them.
                </p>
                <p>
                  Today, we continue to serve our discerning community with the same precision and artistry that built our name. Every project we accept is treated as a landmark of our own reputation.
                </p>
              </div>

              <div className="mt-12 flex gap-4">
                <Button href="/portfolio" className="bg-white text-slate-950 rounded-full px-8">
                  View Our Work
                </Button>
                <Button href="/contact" variant="outline" className="border-white/10 hover:border-white text-white rounded-full px-8">
                  Talk to our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Grid */}
      <section className="py-32 relative bg-slate-900/40 border-y border-white/5">
        <Container>
          <AnimatedSection className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Our Core Ethos
            </h2>
            <p className="text-slate-400 text-lg font-light">
              We operate under a strict code of professional conduct to ensure
              the longevity of your structure and the integrity of our partnership.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all hover:bg-slate-900 shadow-xl"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-teal-400 mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications - Premium Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <div className="bg-slate-900/60 rounded-[3rem] p-12 md:p-24 border border-white/5 backdrop-blur-sm relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                  Certified & <br />
                  <span className="text-slate-400">Highly Trusted</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
                  We maintain industry-leading certifications and insurance
                  coverages to provide you with absolute peace of mind. Our
                  credentials aren't just badges; they represent our relentless
                  standard for technical proficiency.
                </p>
                <div className="grid sm:grid-cols-1 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-teal-400/50 transition-colors">
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl font-display text-white tracking-tight">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="group relative rounded-3xl overflow-hidden aspect-square border border-white/5">
                  <Image
                    src="/images/project-2.jpg"
                    alt="Master Craftsmanship"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative text-center">
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
              Let&apos;s Build Success Together
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-light max-w-xl mx-auto">
              Experience the difference that obsessive quality and a
              master-level approach can make for your property.
            </p>
            <Button
              href="/contact"
              size="lg"
              className="bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-full px-12 py-4"
            >
              Consult an Expert
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
