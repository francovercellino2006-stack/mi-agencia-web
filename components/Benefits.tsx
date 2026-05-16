"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Search, Gauge, MessageCircle, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Diseño único para vos",
    description: "Cada página es creada desde cero para tu negocio. Nada de plantillas genéricas que se ven iguales a todos.",
  },
  {
    icon: Smartphone,
    title: "Se ve bien en el celular",
    description: "El 80% de los clientes navega desde el celu. Tu página va a funcionar perfecto en cualquier pantalla.",
  },
  {
    icon: Search,
    title: "Aparecés en Google",
    description: "Cuando alguien busca lo que vos ofrecés, tu negocio aparece. Más visitas, más clientes.",
  },
  {
    icon: Gauge,
    title: "Abre rápido",
    description: "Si una página tarda en cargar, el cliente se va. La tuya abre en segundos, siempre.",
  },
  {
    icon: MessageCircle,
    title: "Tus clientes te escriben directo",
    description: "Botón de WhatsApp visible en toda la página para que te contacten con un solo clic.",
  },
  {
    icon: Zap,
    title: "Diseño que sorprende",
    description: "Movimientos suaves y detalles visuales que hacen que tu página se vea diferente a todas las demás.",
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
            Por qué elegirme
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
