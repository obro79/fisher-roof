"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.png"
              alt="Fisher's Exteriors"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 group ${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                } hover:text-[#0D9488]`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D9488] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2 bg-[#0F172A]"
                    : isScrolled
                    ? "bg-[#0F172A]"
                    : "bg-white"
                }`}
              />
              <span
                className={`h-0.5 w-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-[#0F172A]"
                    : "bg-white"
                }`}
              />
              <span
                className={`h-0.5 w-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-[#0F172A]"
                    : isScrolled
                    ? "bg-[#0F172A]"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <Container>
              <div className="py-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#0F172A] font-medium py-2 hover:text-[#0D9488] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button href="/contact" className="mt-2">
                  Get a Quote
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
