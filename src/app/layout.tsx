import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { WalletProvider } from "@/lib/wallet-context";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICM.FUN | Buy the basket. Own the category.",
  description:
    "ICM.FUN lets you invest in curated baskets of top stocks and trending themes across the market. Simple. Smart. Diversified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${jetBrainsMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface overflow-x-hidden">
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
