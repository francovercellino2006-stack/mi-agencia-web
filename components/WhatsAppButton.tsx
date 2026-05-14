"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

function InstagramSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Instagram */}
      <motion.a
        href="https://instagram.com/francoocasasvercellino"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(225,48,108,0.4)] hover:shadow-[0_4px_30px_rgba(225,48,108,0.6)] transition-shadow"
        style={{
          background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
        aria-label="Instagram"
      >
        <InstagramSVG />
        <span className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "linear-gradient(45deg, #f09433, #bc1888)" }}
        />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/542920528440?text=Hola%2C%20quiero%20una%20p%C3%A1gina%20web"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-shadow"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </div>
  );
}
