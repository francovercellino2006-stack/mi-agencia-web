"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

function FadeUp({ children, delay = 0, className }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <FadeUp delay={0} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-xs font-medium text-[#3B82F6]">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            Disponible para nuevos proyectos
          </span>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.12}>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Páginas web{" "}
            <span className="gradient-text">premium</span>
            <br />
            para marcas modernas
          </h1>
        </FadeUp>

        {/* Subheadings */}
        <FadeUp delay={0.24}>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
            Diseño, velocidad y conversión en una sola experiencia.
          </p>
          <p className="text-base text-white/40 max-w-xl mx-auto mb-12">
            Creo sitios web modernos, rápidos y optimizados para que tu negocio venda más.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.36}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20solicitar%20mi%20p%C3%A1gina%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-base"
            >
              Solicitar mi página
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/proyectos"
              className="group flex items-center gap-2 glass-card hover:border-white/20 text-white/80 hover:text-white font-medium px-7 py-4 rounded-xl transition-all duration-300 text-base"
            >
              <Play size={16} className="text-[#3B82F6]" />
              Ver proyectos
            </Link>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.5}>
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "50+", label: "Proyectos entregados" },
              { value: "100%", label: "Clientes satisfechos" },
              { value: "48hs", label: "Primer diseño listo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/40 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
