import "./globals.css";
import { dankMono, kollektif } from "@/utils/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`  bg-zinc-900 text-zinc-100 py-5  ${kollektif.className} ${dankMono.variable}`}
      >
        <Header />
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <main className="max-w-4xl mx-auto   flex flex-col gap-10 py-20 ">{children}</main>
        <Footer />
        <Analytics />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
