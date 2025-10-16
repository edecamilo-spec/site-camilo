export const metadata = {
  title: "Edemilson Camilo — Créditos & Investimentos",
  description: "Consórcio como investimento para construir patrimônio — Ademicon Palhoça.",
};

import "./(site)/styles/globals.css";
import type { Metadata } from "next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}