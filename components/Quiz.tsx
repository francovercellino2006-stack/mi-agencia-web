"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Describí tu situación",
    options: [
      { emoji: "🆕", label: "Recién arranco", value: "nuevo" },
      { emoji: "🏪", label: "Ya tengo un negocio", value: "negocio" },
      { emoji: "🧑‍💼", label: "Soy profesional o freelancer", value: "profesional" },
      { emoji: "🛍️", label: "Vendo productos", value: "productos" },
    ],
  },
  {
    id: 2,
    question: "¿Qué querés lograr con tu web?",
    options: [
      { emoji: "📞", label: "Que me contacten clientes", value: "contacto" },
      { emoji: "💰", label: "Vender mis productos online", value: "vender" },
      { emoji: "👀", label: "Mostrar lo que hago", value: "mostrar" },
      { emoji: "📣", label: "Promocionar un servicio", value: "promocionar" },
    ],
  },
  {
    id: 3,
    question: "¿Cómo te ven hoy tus clientes?",
    options: [
      { emoji: "😶", label: "No me encuentran en internet", value: "invisible" },
      { emoji: "📱", label: "Solo por Instagram o redes", value: "redes" },
      { emoji: "😬", label: "Tengo una web pero se ve vieja", value: "vieja" },
      { emoji: "✨", label: "Quiero dar un salto de nivel", value: "nivel" },
    ],
  },
];

const results: Record<string, { title: string; description: string; emoji: string; waMessage: string }> = {
  "nuevo-contacto": {
    emoji: "🚀",
    title: "Landing Page",
    description: "Una página impactante que presenta tu negocio y hace que los clientes te contacten directo.",
    waMessage: "Hola Franco, hice el quiz y me recomendaron una Landing Page. ¿Me podés dar más info?",
  },
  "nuevo-vender": {
    emoji: "🛒",
    title: "Tienda Online",
    description: "Una tienda completa para vender tus productos 24/7 sin que tengas que estar presente.",
    waMessage: "Hola Franco, hice el quiz y me recomendaron una Tienda Online. ¿Me podés dar más info?",
  },
  "productos-vender": {
    emoji: "🛒",
    title: "Tienda Online",
    description: "Una tienda completa para vender tus productos 24/7 sin que tengas que estar presente.",
    waMessage: "Hola Franco, hice el quiz y me recomendaron una Tienda Online. ¿Me podés dar más info?",
  },
  "profesional-mostrar": {
    emoji: "🧑‍💼",
    title: "Web de Marca Personal",
    description: "Tu carta de presentación digital. Mostrá quién sos, qué hacés y por qué elegirte.",
    waMessage: "Hola Franco, hice el quiz y me recomendaron una Web de Marca Personal. ¿Me podés dar más info?",
  },
  "negocio-mostrar": {
    emoji: "📋",
    title: "Catálogo Digital",
    description: "Mostrá todo lo que ofrecés de forma ordenada y profesional. Los clientes ven y te escriben.",
    waMessage: "Hola Franco, hice el quiz y me recomendaron un Catálogo Digital. ¿Me podés dar más info?",
  },
  default: {
    emoji: "⭐",
    title: "Landing Page Premium",
    description: "Una página profesional y moderna que transmite confianza y convierte visitas en clientes.",
    waMessage: "Hola Franco, hice el quiz en tu web. ¿Me podés ayudar a elegir qué tipo de página necesito?",
  },
};

function getResult(answers: string[]) {
  const key = answers.join("-");
  return results[key] || results[`${answers[0]}-${answers[1]}`] || results.default;
}

export default function Quiz() {
  const [step, setStep] = useState(0); // 0 = intro, 1-3 = preguntas, 4 = resultado
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const currentQuestion = questions[step - 1];
  const result = step === 4 ? getResult(answers) : null;

  const handleSelect = (value: string) => {
    setSelected(value);
    setTimeout(() => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);
      setSelected(null);
      setStep(step + 1);
    }, 300);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">
            ¿No sabés por dónde empezar?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Encontrá tu <span className="gradient-text">página ideal</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            3 preguntas simples y te decimos qué tipo de web necesita tu negocio.
          </p>
        </motion.div>

        {/* Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[360px] flex flex-col justify-center">
          <AnimatePresence mode="wait">

            {/* Intro */}
            {step === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="text-6xl mb-6">🤔</div>
                <h3 className="text-2xl font-bold mb-3">¿Qué página necesita tu negocio?</h3>
                <p className="text-white/50 mb-8 max-w-md mx-auto">
                  Respondé 3 preguntas sencillas y te recomendamos la mejor opción para vos.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                >
                  Empezar el quiz
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {/* Questions */}
            {step >= 1 && step <= 3 && currentQuestion && (
              <motion.div
                key={`question-${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="flex items-center gap-2 mb-8">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        i < step ? "bg-[#3B82F6]" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs text-white/40 mb-3 uppercase tracking-widest">
                  Pregunta {step} de 3
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-8">
                  {currentQuestion.question}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {currentQuestion.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                        selected === opt.value
                          ? "border-[#3B82F6] bg-[#3B82F6]/20 scale-95"
                          : "border-white/10 bg-white/5 hover:border-[#3B82F6]/50 hover:bg-white/10"
                      }`}
                    >
                      <span className="text-2xl">{opt.emoji}</span>
                      <span className="text-sm font-medium leading-tight">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {step === 4 && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{result.emoji}</div>
                <p className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase mb-2">
                  Tu página ideal es
                </p>
                <h3 className="text-3xl md:text-4xl font-black mb-4">{result.title}</h3>
                <p className="text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
                  {result.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/542920528440?text=${encodeURIComponent(result.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                  >
                    Quiero esta página
                    <ArrowRight size={16} />
                  </a>
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 glass-card hover:border-white/20 text-white/60 hover:text-white px-5 py-3.5 rounded-xl transition-all duration-300 text-sm"
                  >
                    <RotateCcw size={14} />
                    Volver a hacer el quiz
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
