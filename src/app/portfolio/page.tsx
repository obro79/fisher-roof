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
    title: "Modern Home Roof Installation",
    category: "Residential",
    description: "Complete roof replacement with premium architectural shingles",
    image: "/images/project-1.jpg",
    beforeImage: "/images/project-2.jpg",
    afterImage: "/images/project-1.jpg"
  },
  {
    id: 2,
    title: "Storm Damage Repair",
    category: "Repairs",
    description: "Emergency repair after severe weather damage",
    image: "/images/project-2.jpg",
    beforeImage: "/images/project-1.jpg",
    afterImage: "/images/project-2.jpg"
  },
  {
    id: 3,
    title: "Luxury Estate Roofing",
    category: "Residential",
    description: "Custom roofing solution for a high-end property",
    image: "/images/project-1.jpg",
    beforeImage: "/images/project-2.jpg",
    afterImage: "/images/project-1.jpg"
  },
  {
    id: 4,
    title: "Commercial Building Roof",
    category: "Commercial",
    description: "Flat roof installation for office complex",
    image: "/images/project-2.jpg",
    beforeImage: "/images/project-1.jpg",
    afterImage: "/images/project-2.jpg"
  },
  {
    id: 5,
    title: "Historic Home Restoration",
    category: "Residential",
    description: "Careful restoration maintaining original character",
    image: "/images/project-1.jpg",
    beforeImage: "/images/project-2.jpg",
    afterImage: "/images/project-1.jpg"
  },
  {
    id: 6,
    title: "Leak Repair Project",
    category: "Repairs",
    description: "Complete waterproofing and leak prevention",
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
              Our <span className="text-[#14B8A6]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore our completed projects and see the quality craftsmanship we bring to every job
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#0D9488] text-white"
                    : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-[#0D9488] text-white text-sm rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Before/After Showcase */}
      <section className="py-24 bg-[#F8FAFC]">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Before & After
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
              Drag the slider to see the transformation
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/project-2.jpg"
              afterImage="/images/project-1.jpg"
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D9488]">
        <Container>
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Let us transform your roof with the same quality and care shown in our portfolio
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-[#0D9488] hover:bg-gray-100">
              Get Your Free Quote
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
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

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] text-sm rounded-full mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{selectedProject.title}</h3>
                <p className="text-[#64748B]">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
