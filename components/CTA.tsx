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
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#3B82F6]"
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="hidden md:block absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-[100px]" />
          <div className="hidden md:block absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full blur-[80px]" />

          {/* Content */}
          <div className="relative z-10 px-10 py-16 text-center">
            <span className="text-blue-100 text-sm font-semibold tracking-widest uppercase">
              ¿Listo para crecer?
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-5 leading-tight text-white">
              ¿Querés que más clientes
              <br />
              te encuentren?
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Escribime hoy por WhatsApp y en menos de 48hs te muestro cómo podría quedar tu página.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/542920528440?text=Hola%2C%20quiero%20hablar%20sobre%20mi%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white hover:bg-blue-50 text-[#1D4ED8] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] text-base"
              >
                Escribirme por WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:francovercellino2006@gmail.com"
                className="text-white/80 hover:text-white border border-white/30 hover:border-white/60 font-medium px-8 py-4 rounded-xl transition-all duration-300 text-base"
              >
                Enviar un email
              </a>
            </div>

            <p className="text-blue-200 text-xs mt-6">
              Respondo en menos de 1 hora · Sin compromiso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
