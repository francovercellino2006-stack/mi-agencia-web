"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Rocket, Heart } from "lucide-react";

const highlights = [
  { icon: MapPin, text: "Viedma, Río Negro, Argentina" },
  { icon: Code2, text: "Desarrollo con Next.js, React y Tailwind CSS" },
  { icon: Rocket, text: "Webs listas en tiempo récord" },
  { icon: Heart, text: "Apasionado por el diseño y los negocios digitales" },
];

export default function About() {
  return (
    <section className="py-28 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-[#3B82F6]/20 blur-2xl scale-110" />
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 glass-card">
                {/* Placeholder con iniciales — reemplazá por tu foto */}
                <div className="w-full h-full bg-gradient-to-br from-[#3B82F6]/20 to-[#1E40AF]/20 flex items-center justify-center">
                  <span className="text-7xl font-black gradient-text">FC</span>
                </div>
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-2 border border-white/10">
                <span className="text-xs font-semibold text-[#3B82F6]">✦ Disponible ahora</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
              Sobre mí
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5 leading-tight">
              Hola, soy{" "}
              <span className="gradient-text">Franco</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-3">
              Soy <strong className="text-white">Franco Casas Vercellino</strong>, desarrollador web de Viedma, Río Negro. Me especializo en crear páginas web modernas, rápidas y diseñadas para que los negocios vendan más.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Trabajo con las últimas tecnologías del mercado para entregar sitios que no solo se ven increíbles, sino que también convierten visitas en clientes reales. Cada proyecto es único y pensado estratégicamente para el negocio de cada cliente.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-none">
                    <h.icon size={14} className="text-[#3B82F6]" />
                  </div>
                  <span className="text-white/60 text-sm">{h.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/542920528440?text=Hola%20Franco%2C%20quiero%20hablar%20sobre%20mi%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] text-sm"
            >
              Hablemos por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
