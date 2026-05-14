import Link from "next/link";
import { Camera, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#080808] px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center text-sm font-black">
                F
              </div>
              <span className="font-bold text-lg">
                Franco<span className="text-[#3B82F6]">Dev</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Diseño y desarrollo de páginas web premium para negocios que quieren vender más y verse modernos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">Navegación</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/servicios", label: "Servicios" },
                { href: "/proyectos", label: "Proyectos" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors group"
              >
                <MessageCircle size={16} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/francodev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors group"
              >
                <Camera size={16} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
                @francodev
              </a>
              <a
                href="mailto:franco@miagencia.com"
                className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors group"
              >
                <Mail size={16} className="text-[#3B82F6] group-hover:scale-110 transition-transform" />
                franco@miagencia.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>© {year} FrancoDev. Todos los derechos reservados.</span>
          <span>Hecho con ❤️ en Argentina</span>
        </div>
      </div>
    </footer>
  );
}
