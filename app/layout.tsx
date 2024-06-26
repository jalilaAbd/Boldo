import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans, Manrope } from "next/font/google";

const inter = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const roboto_mono = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Boldo",
  description: "Generated by Jalila",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon-boldo.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
