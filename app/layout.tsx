import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Franco Dev — Páginas Web Premium",
  description:
    "Diseño y desarrollo de páginas web modernas, rápidas y optimizadas para vender más. Landing pages, tiendas online y catálogos digitales.",
  keywords: "páginas web, diseño web, tienda online, landing page, desarrollo web, Argentina",
  openGraph: {
    title: "Franco Dev — Páginas Web Premium",
    description: "Diseño y desarrollo de páginas web modernas para negocios que quieren vender más.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#0B0B0B] text-white antialiased">{children}</body>
    </html>
  );
}
