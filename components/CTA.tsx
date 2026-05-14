"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 via-[#1E40AF]/10 to-[#D4AF37]/10" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#D4AF37]/10 rounded-full blur-[80px]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/10" />

          {/* Content */}
          <div className="relative z-10 px-10 py-16 text-center">
            <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
              ¿Listo para crecer?
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-5 leading-tight">
              Tu negocio necesita una web
              <br />
              <span className="gradient-text">a otro nivel</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Hablemos hoy. En menos de 48hs tenés el diseño de tu futura web lista para revisar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20hablar%20sobre%20mi%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] text-base"
              >
                Escribirme por WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:franco@miagencia.com"
                className="glass-card hover:border-white/20 text-white/80 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 text-base"
              >
                Enviar un email
              </a>
            </div>

            <p className="text-white/30 text-xs mt-6">
              Respondo en menos de 1 hora · Sin compromiso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
