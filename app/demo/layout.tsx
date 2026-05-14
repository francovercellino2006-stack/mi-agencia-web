import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lencería Luna — Catálogo Digital",
  description:
    "Explorá nuestra nueva colección de lencería. Conjuntos, corpiños, bombachas y pijamas. Escribinos por WhatsApp para reservar.",
  openGraph: {
    title: "Lencería Luna — Nueva Colección 🌸",
    description:
      "Mirá nuestra colección completa. ¡Encontrá lo que te gusta y reservá por WhatsApp!",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lencería Luna — Catálogo Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lencería Luna — Nueva Colección 🌸",
    description: "Mirá nuestra colección completa. ¡Reservá por WhatsApp!",
    images: ["https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=1200&q=80"],
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
