import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Casa do Sorvete | Distribuidora Premium B2B",
  description: "Distribuição de açaí, sorvetes e cremes para açaiterias, sorveterias, mercados, delivery e revendedores em São Luís - MA. Aumente suas vendas e lucratividade com a Casa do Sorvete.",
  keywords: "açaí, sorvete, creme, distribuidora, atacado, B2B, revenda, são luís, maranhão, casa do sorvete",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍦</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cs-white text-gray-900">{children}</body>
    </html>
  );
}
