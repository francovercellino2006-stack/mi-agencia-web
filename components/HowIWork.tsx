"use client";

import { motion } from "framer-motion";
import { steps } from "@/lib/data";

export default function HowIWork() {
  return (
    <section className="py-28 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
            Proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Cómo <span className="gradient-text">trabajo</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Un proceso claro, rápido y sin sorpresas. De la idea a la web en tiempo récord.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6]/50 via-[#3B82F6]/20 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} text-left`}>
                  <div className="glass-card rounded-2xl p-7 hover:border-[#3B82F6]/30 transition-all duration-300">
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Number bubble */}
                <div className="flex-none relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#3B82F6] flex items-center justify-center blue-glow">
                    <span className="font-black text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
