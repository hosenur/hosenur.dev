import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi text-zinc- font-medium">
        <Header />
        <main className="max-w-4xl mx-auto pt-24 px-5">
          <NextTopLoader  color="black"/>

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
