"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Proyectos <span className="gradient-text">destacados</span>
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] font-medium transition-colors text-sm"
          >
            Ver todos los proyectos
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 text-xs font-medium bg-[#3B82F6]/20 border border-[#3B82F6]/30 text-[#3B82F6] rounded-full px-3 py-1 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/40 bg-white/5 rounded-md px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
                >
                  Ver proyecto <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
