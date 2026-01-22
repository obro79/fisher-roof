"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageIcon?: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  imageIcon,
  href,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:bg-slate-900/60 shadow-xl">
          {/* Subtle Glow Background */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-teal-500/10 transition-colors duration-500" />

          <div className="relative z-10 flex flex-col h-full">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${imageIcon ? "" : "bg-white/5 border border-white/10 text-teal-400 group-hover:scale-110 group-hover:border-teal-400/30"
              }`}>
              {imageIcon ? (
                <div className="relative w-full h-full overflow-hidden rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={imageIcon}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                icon
              )}
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
              {title}
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8 flex-grow font-light group-hover:text-slate-300 transition-colors duration-300">
              {description}
            </p>

            <div className="flex items-center text-slate-500 font-semibold text-sm uppercase tracking-widest group-hover:text-teal-400 group-hover:gap-2 transition-all duration-300">
              Explore expertise
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
