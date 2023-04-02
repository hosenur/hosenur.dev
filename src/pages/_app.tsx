import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { AuthProvider } from "@/contexts/AuthContext";
import NextNProgress from 'nextjs-progressbar';

const space = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="lofi" enableSystem={false}>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <NextNProgress color="#000000" />
      
      <AuthProvider>
        <main className={space.className}>
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </ThemeProvider>
  );
}
