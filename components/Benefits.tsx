"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Search, Gauge, MessageCircle, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Diseño premium",
    description: "Cada web es única y diseñada para impresionar. Nada de templates genéricos.",
  },
  {
    icon: Smartphone,
    title: "Responsive perfecto",
    description: "Funciona impecable en iPhone, Android y cualquier pantalla.",
  },
  {
    icon: Search,
    title: "Optimización SEO",
    description: "Aparecé en Google cuando tus clientes buscan lo que ofrecés.",
  },
  {
    icon: Gauge,
    title: "Velocidad extrema",
    description: "Carga en menos de 1 segundo. Tu web nunca pierde visitas por lentitud.",
  },
  {
    icon: MessageCircle,
    title: "Integración WhatsApp",
    description: "Botón flotante y CTAs directos para que los clientes te contacten fácil.",
  },
  {
    icon: Zap,
    title: "Experiencia moderna",
    description: "Animaciones fluidas y microinteracciones que sorprenden a tus visitas.",
  },
];

export default function Benefits() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Todo lo que tu web{" "}
            <span className="gradient-text">necesita</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Cada proyecto incluye lo que hace falta para destacar, posicionarse y convertir visitas en clientes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 group hover:border-[#3B82F6]/30 transition-all duration-300 hover:bg-white/[0.06]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/20 transition-colors">
                <b.icon size={20} className="text-[#3B82F6]" />
              </div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
