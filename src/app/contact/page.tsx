"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Roof Repair",
  "New Installation",
  "Roof Inspection",
  "Maintenance",
  "Emergency Service",
  "Other"
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
    await new Promise(resolve => setTimeout(resolve, 1500));

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
              Get Your <span className="text-[#14B8A6]">Free Quote</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to start your project? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0D9488]/10 border border-[#0D9488] rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Thank You!</h3>
                  <p className="text-[#64748B] text-lg">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0F172A] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#0F172A] mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all duration-300 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
                  Get in Touch
                </h2>
                <p className="text-[#64748B] text-lg">
                  Have questions? We&apos;re here to help. Reach out to us through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-[#64748B] hover:text-[#0D9488] transition-colors">
                      (555) 123-4567
                    </a>
                    <p className="text-sm text-[#94A3B8] mt-1">Mon-Fri 8am-6pm, Sat 9am-2pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">Email</h3>
                    <a href="mailto:info@fishersexteriors.com" className="text-[#64748B] hover:text-[#0D9488] transition-colors">
                      info@fishersexteriors.com
                    </a>
                    <p className="text-sm text-[#94A3B8] mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">Service Area</h3>
                    <p className="text-[#64748B]">Serving the greater metropolitan area</p>
                    <p className="text-sm text-[#94A3B8] mt-1">Free estimates within 30 miles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">Emergency Service</h3>
                    <p className="text-[#64748B]">24/7 emergency repairs available</p>
                    <p className="text-sm text-[#94A3B8] mt-1">Call anytime for urgent issues</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#94A3B8] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-[#94A3B8]">Map coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
