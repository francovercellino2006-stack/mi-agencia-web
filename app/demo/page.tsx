"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Search, Heart } from "lucide-react";

const categorias = ["Todo", "Conjuntos", "Corpiños", "Bombachas", "Pijamas"];

const productos = [
  {
    id: 1,
    nombre: "Conjunto Encaje Rosa",
    precio: 18500,
    categoria: "Conjuntos",
    talles: ["S", "M", "L", "XL"],
    imagen: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&q=80",
    nuevo: true,
  },
  {
    id: 2,
    nombre: "Corpiño Satén Negro",
    precio: 9800,
    categoria: "Corpiños",
    talles: ["32", "34", "36", "38", "40"],
    imagen: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&q=80",
    nuevo: false,
  },
  {
    id: 3,
    nombre: "Conjunto Algodón Lila",
    precio: 14200,
    categoria: "Conjuntos",
    talles: ["S", "M", "L"],
    imagen: "https://images.unsplash.com/photo-1594938298603-c8148c4b4f6e?w=600&q=80",
    nuevo: true,
  },
  {
    id: 4,
    nombre: "Pijama Premium Rojo",
    precio: 22000,
    categoria: "Pijamas",
    talles: ["S", "M", "L", "XL"],
    imagen: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80",
    nuevo: false,
  },
  {
    id: 5,
    nombre: "Bombacha Tiro Alto",
    precio: 4500,
    categoria: "Bombachas",
    talles: ["S", "M", "L", "XL", "XXL"],
    imagen: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80",
    nuevo: false,
  },
  {
    id: 6,
    nombre: "Conjunto Floral Verano",
    precio: 16900,
    categoria: "Conjuntos",
    talles: ["S", "M", "L"],
    imagen: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=80",
    nuevo: true,
  },
];

export default function DemoPage() {
  const [categoria, setCategoria] = useState("Todo");
  const [busqueda, setBusqueda] = useState("");
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const filtrados = productos.filter((p) => {
    const matchCat = categoria === "Todo" || p.categoria === categoria;
    const matchBusq = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return matchCat && matchBusq;
  });

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const waMessage = (nombre: string) =>
    `Hola! Vi el catálogo y me interesa el producto: *${nombre}*. ¿Está disponible?`;

  return (
    <div className="min-h-screen bg-[#0f0a0d]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0f0a0d]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-xs font-black">
              M
            </div>
            <div>
              <span className="font-bold text-white text-sm">Lencería</span>
              <span className="text-pink-400 font-bold text-sm"> Marines</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/50 text-xs">
            <span className="hidden sm:block">📍 Viedma, Río Negro</span>
            <a
              href="https://wa.me/542920528440"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <span className="text-xs text-pink-400 font-semibold tracking-widest uppercase">
            Catálogo digital
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mt-2 mb-2">
            Nueva colección 🌸
          </h1>
          <p className="text-white/40 text-sm">
            Elegí lo que te gusta y escribinos por WhatsApp para reservar
          </p>
        </div>

        {/* Buscador */}
        <div className="relative mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-400/50"
          />
        </div>

        {/* Filtros */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                categoria === cat
                  ? "bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filtrados.map((producto) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden group"
              >
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a0d] via-transparent to-transparent" />

                  {/* Nuevo badge */}
                  {producto.nuevo && (
                    <span className="absolute top-3 left-3 text-xs font-bold bg-pink-500 text-white px-2 py-1 rounded-full">
                      Nuevo
                    </span>
                  )}

                  {/* Favorito */}
                  <button
                    onClick={() => toggleFavorito(producto.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Heart
                      size={14}
                      className={favoritos.includes(producto.id) ? "fill-pink-400 text-pink-400" : "text-white/60"}
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-white mb-1">{producto.nombre}</h3>

                  {/* Talles */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {producto.talles.map((t) => (
                      <span key={t} className="text-xs text-white/40 bg-white/5 rounded px-1.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-black text-white text-base">
                      ${producto.precio.toLocaleString("es-AR")}
                    </span>
                    <a
                      href={`https://wa.me/542920528440?text=${encodeURIComponent(waMessage(producto.nombre))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all"
                    >
                      <ShoppingBag size={12} />
                      Pedir
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer demo */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="text-white/20 text-xs mb-3">¿Querés un catálogo como este para tu negocio?</p>
          <a
            href="https://vercellinodev.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 text-xs font-semibold hover:text-pink-300 transition-colors"
          >
            Hecho por vercellinodev.com.ar ✦
          </a>
        </div>
      </main>
    </div>
  );
}
