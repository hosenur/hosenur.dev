import "./globals.css";
import { dankMono, kollektif } from "@/utils/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white text-slate-900 ${kollektif.className} ${dankMono.variable}`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <div className="max-w-2xl mx-auto p-5">
          <Header />
          <main className="py-5">{children}</main>
          <Footer />
        </div>
        {/* <Analytics /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
