"use client";

import { motion } from "framer-motion";
import {
  Zap, ShoppingBag, BookOpen, User, Search, Smartphone, ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTA from "@/components/CTA";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Zap, ShoppingBag, BookOpen, User, Search, Smartphone,
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-0">
        {/* Hero */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3B82F6]/8 rounded-full blur-[120px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
              Lo que ofrezco
            </span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-5">
              Mis <span className="gradient-text">servicios</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Desde una landing page que convierte hasta una tienda online completa. Todo lo que necesita tu negocio para estar en el nivel que merece.
            </p>
          </motion.div>
        </section>

        {/* Services grid */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Zap;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card rounded-2xl p-7 flex flex-col gap-5 group hover:border-[#3B82F6]/30 transition-all duration-300 hover:bg-white/[0.06]"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Icon size={22} className="text-[#3B82F6]" />
                  </div>

                  {/* Title & description */}
                  <div>
                    <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Benefits list */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-none" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/5491100000000?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
                  >
                    Solicitar este servicio
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
