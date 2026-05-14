"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center text-sm font-black">
            F
          </div>
          <span className="font-bold text-lg tracking-tight">
            Franco <span className="text-[#3B82F6]">Dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/542920528440?text=Hola%2C%20quiero%20una%20p%C3%A1gina%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Contactar
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#111111] border-t border-white/5 px-6 py-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white text-base transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/542920528440?text=Hola%2C%20quiero%20una%20p%C3%A1gina%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center font-semibold bg-[#3B82F6] text-white px-5 py-3 rounded-lg"
            >
              Contactar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
