"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Premium Roof Repair",
  "High-End New Installation",
  "Structural Diagnostic Inspection",
  "Luxury Preservation Maintenance",
  "Emergency Restoration",
  "Architectural Consultation"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Connect With Us
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              Secure Your <span className="text-slate-400">Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              Ready to elevate your property's protection? Our expert team is
              standing by to provide a detailed technical analysis.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Contact Info (LHS) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
                  Immediate Support & <br /> Technical Queries
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Direct communication is our standard. Whether you have an urgent
                  emergency or want to discuss a long-term architectural project,
                  we ensure meaningful responses within 24 business hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
                {/* Contact Items */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-teal-400/50 transition-colors">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-1 uppercase tracking-widest text-[10px] opacity-50">Direct Line</h3>
                    <a href="tel:+15551234567" className="text-xl text-slate-300 hover:text-white transition-all font-display font-medium">
                      (555) 123-4567
                    </a>
                    <p className="text-xs text-slate-500 mt-2 font-light">Mon-Fri 8am-6pm, Sat Special Orders</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-teal-400/50 transition-colors">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-1 uppercase tracking-widest text-[10px] opacity-50">Digital Correspondence</h3>
                    <a href="mailto:info@fishersexteriors.com" className="text-xl text-slate-300 hover:text-white transition-all font-display font-medium">
                      info@fishersexteriors.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-teal-400/50 transition-colors">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-1 uppercase tracking-widest text-[10px] opacity-50">Service Range</h3>
                    <p className="text-xl text-slate-300 font-display font-medium">Tri-County Metropolitan Area</p>
                    <p className="text-xs text-slate-500 mt-2 font-light">Free assessments and drone site-scans</p>
                  </div>
                </div>
              </div>

              {/* Sophisticated Placeholder for Map */}
              <div className="relative rounded-3xl overflow-hidden h-72 border border-white/5 bg-slate-900 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-slate-800)_0%,_transparent_70%)] opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-slate-600 group-hover:text-teal-400 transition-colors duration-500">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-slate-400 font-display font-semibold tracking-widest text-xs uppercase group-hover:text-white transition-colors">Interactive Service Map <br /><span className="text-slate-600">Launching Spring 2026</span></p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (RHS) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_0_80px_rgba(0,0,0,0.3)]">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-white/5 border border-teal-400/30 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(45,212,191,0.1)]">
                      <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Request Received</h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                      Your inquiry has been logged into our master schedule.
                      An expert consultant will review your case and reach out shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-12 text-teal-400 hover:text-white border-b border-teal-400/30 hover:border-white transition-all text-sm font-bold uppercase tracking-widest"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="px-1 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                          Full Legal Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-950/50 px-6 py-4 rounded-2xl border border-white/5 focus:border-white/20 focus:bg-slate-950 text-white outline-none transition-all duration-300 font-light placeholder:text-slate-700"
                          placeholder="Ex: Alexander Hamilton"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="phone" className="px-1 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-950/50 px-6 py-4 rounded-2xl border border-white/5 focus:border-white/20 focus:bg-slate-950 text-white outline-none transition-all duration-300 font-light placeholder:text-slate-700"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="px-1 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-950/50 px-6 py-4 rounded-2xl border border-white/5 focus:border-white/20 focus:bg-slate-950 text-white outline-none transition-all duration-300 font-light placeholder:text-slate-700"
                        placeholder="client@prestige-mail.com"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="service" className="px-1 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                        Primary Service Area
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-950/50 px-6 py-4 rounded-2xl border border-white/5 focus:border-white/20 focus:bg-slate-950 text-white outline-none transition-all duration-300 font-light appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">Select an Expertise...</option>
                        {serviceOptions.map(option => (
                          <option key={option} value={option} className="bg-slate-900">{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="px-1 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                        Project Synopsis
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-950/50 px-6 py-4 rounded-2xl border border-white/5 focus:border-white/20 focus:bg-slate-950 text-white outline-none transition-all duration-300 resize-none font-light placeholder:text-slate-700"
                        placeholder="Please describe the architectural requirements and any immediate vulnerabilities..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-white hover:bg-slate-200 text-slate-950 text-lg font-bold py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Request...
                        </span>
                      ) : (
                        "Initiate Consultation"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
