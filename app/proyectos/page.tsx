"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTA from "@/components/CTA";
import { projects } from "@/lib/data";

const categories = ["Todos", "Landing Page", "Tienda Online", "Catálogo Digital", "Marca Personal", "Corporativo"];

export default function ProyectosPage() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-0">
        {/* Hero */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#3B82F6]/8 rounded-full blur-[100px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-5">
              Mis <span className="gradient-text">proyectos</span>
            </h1>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Webs reales para negocios reales. Cada proyecto diseñado para convertir visitas en clientes.
            </p>
          </motion.div>
        </section>

        {/* Filter tabs */}
        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    : "glass-card text-[#6B7280] hover:text-[#0F0F0F] hover:border-black/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects grid */}
        <section className="px-6 pb-10 max-w-6xl mx-auto">
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl p-16 text-center col-span-3"
            >
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-bold mb-2">Próximamente</h3>
              <p className="text-[#9CA3AF] text-sm">Estoy trabajando en proyectos de esta categoría. ¡Volvé pronto!</p>
            </motion.div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
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
                    <span className="absolute top-4 left-4 text-xs font-medium bg-[#3B82F6]/20 border border-[#3B82F6]/30 text-[#3B82F6] rounded-full px-3 py-1 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[#9CA3AF] bg-black/5 rounded-md px-2 py-1">
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
            </AnimatePresence>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
