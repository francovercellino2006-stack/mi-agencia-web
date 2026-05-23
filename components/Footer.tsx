import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[#F3F4F6] px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center text-sm font-black text-white">
                F
              </div>
              <span className="font-bold text-lg text-[#0F0F0F]">
                Franco <span className="text-[#3B82F6]">Dev</span>
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Diseño y desarrollo de páginas web para negocios que quieren vender más y verse modernos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#4B5563]">Navegación</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/servicios", label: "Servicios" },
                { href: "/proyectos", label: "Proyectos" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#9CA3AF] hover:text-[#0F0F0F] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#4B5563]">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/542920528440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#9CA3AF] hover:text-[#0F0F0F] text-sm transition-colors group"
              >
                <MessageCircle size={16} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/francoocasasvercellino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#9CA3AF] hover:text-[#0F0F0F] text-sm transition-colors group"
              >
                <span className="text-[#E1306C] group-hover:scale-110 transition-transform inline-flex">
                  <InstagramIcon size={16} />
                </span>
                @francoocasasvercellino
              </a>
              <a
                href="mailto:francovercellino2006@gmail.com"
                className="flex items-center gap-2.5 text-[#9CA3AF] hover:text-[#0F0F0F] text-sm transition-colors group"
              >
                <Mail size={16} className="text-[#3B82F6] group-hover:scale-110 transition-transform" />
                francovercellino2006@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#9CA3AF] text-xs">
          <span>© {year} Franco Dev. Todos los derechos reservados.</span>
          <span>Hecho con ❤️ en Argentina</span>
        </div>
      </div>
    </footer>
  );
}
