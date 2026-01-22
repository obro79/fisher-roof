"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const categories = ["All", "Residential", "Commercial", "Repairs"];

const projects = [
  {
    id: 1,
    title: "The Glass House Estate",
    category: "Residential",
    description: "Complete architectural shingle restoration for a modern luxury residence.",
    image: "/images/project-1.jpg",
    beforeImage: "/images/project-2.jpg",
    afterImage: "/images/project-1.jpg"
  },
  {
    id: 2,
    title: "Metro Plaza HQ",
    category: "Commercial",
    description: "Multi-layered performance system for a downtown commercial complex.",
    image: "/images/project-2.jpg",
    beforeImage: "/images/project-1.jpg",
    afterImage: "/images/project-2.jpg"
  },
  {
    id: 3,
    title: "Heritage Restoration",
    category: "Residential",
    description: "Careful preservation of a historic landmark's original roof profile.",
    image: "/images/project-1.jpg",
    beforeImage: "/images/project-2.jpg",
    afterImage: "/images/project-1.jpg"
  },
  {
    id: 4,
    title: "Cloud9 Logistics Center",
    category: "Commercial",
    description: "Industrial-grade flat roof installation with extreme weather durability.",
    image: "/images/project-2.jpg",
    beforeImage: "/images/project-1.jpg",
    afterImage: "/images/project-2.jpg"
  },
  {
    id: 5,
    title: "Coastal Modern Villa",
    category: "Residential",
    description: "Impact-resistant installation designed for harsh ocean environments.",
    image: "/images/project-1.jpg",
    beforeImage: "/images/project-2.jpg",
    afterImage: "/images/project-1.jpg"
  },
  {
    id: 6,
    title: "Emergency Storm Repair",
    category: "Repairs",
    description: "Rapid-response structural restoration following severe hail damage.",
    image: "/images/project-2.jpg",
    beforeImage: "/images/project-1.jpg",
    afterImage: "/images/project-2.jpg"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 font-semibold text-sm tracking-wider uppercase backdrop-blur-sm">
              Our Showcase
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              Craftsmanship <span className="text-slate-400">Captured</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              Explore the transformations we&apos;ve delivered for discerning clients across
              luxury residential and high-performance commercial sectors.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 relative">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 text-sm tracking-wide ${activeCategory === category
                    ? "bg-white text-slate-950"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer border border-white/5 bg-slate-900"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-3 backdrop-blur-md">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm font-light leading-snug">{project.description}</p>
                  </div>

                  {/* Permanent Identifier for touch */}
                  <div className="absolute top-4 left-4 p-2 opacity-100 group-hover:opacity-0 transition-opacity">
                    <span className="inline-block px-3 py-1 bg-slate-950/50 text-white text-[10px] font-bold tracking-widest uppercase rounded-full backdrop-blur-sm border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Visual Contrast / Transformation Section */}
      <section className="py-32 bg-slate-900/50 border-y border-white/5">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Precision Transformations
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              See the direct impact of our restoration process. Drag the slider to
              witness how we turn aging structures into architectural masterpieces.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <BeforeAfterSlider
              beforeImage="/images/project-2.jpg"
              afterImage="/images/project-1.jpg"
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Start Your Own Story
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-light">
              Let us bring this same level of obsessive quality and aesthetic
              vision to your property. Your transformation begins with a conversation.
            </p>
            <Button
              href="/contact"
              size="lg"
              className="bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-full px-12 py-4 text-lg"
            >
              Consult an Expert
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="aspect-[16/10] relative">
                <BeforeAfterSlider
                  beforeImage={selectedProject.beforeImage}
                  afterImage={selectedProject.afterImage}
                />
              </div>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-teal-400 text-[10px] font-bold tracking-widest uppercase rounded-full backdrop-blur-md">
                    {selectedProject.category}
                  </span>
                  <div className="h-[1px] flex-grow bg-white/5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-3xl">{selectedProject.description}</p>

                <div className="mt-8">
                  <Button href="/contact" className="bg-white text-slate-950 rounded-full px-8">
                    Inquire About Similar Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
