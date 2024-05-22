import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi text-zinc- font-medium">
        <Header/>
        <main className="max-w-4xl mx-auto pt-24 px-5">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
