"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href}>
        <motion.div
          whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(13, 148, 136, 0.12)" }}
          className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 h-full"
        >
          <div className="w-16 h-16 bg-[#0D9488]/10 rounded-xl flex items-center justify-center text-[#0D9488] mb-8">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-4">{title}</h3>
          <p className="text-[#64748B] leading-relaxed">{description}</p>
          <div className="mt-6 text-[#0D9488] font-medium flex items-center gap-2 group">
            Learn more
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
