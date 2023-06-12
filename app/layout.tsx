import "./globals.css";
import { dankMono, kollektif } from "@/utils/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-zinc-900 text-zinc-100 ${kollektif.className} ${dankMono.variable}`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <div className="max-w-4xl mx-auto p-5">
          <Header />
          <main className="py-20">{children}</main>
          <Footer />
        </div>
        <Analytics />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
