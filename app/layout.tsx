import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { OpenpanelProvider } from '@openpanel/nextjs';





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <OpenpanelProvider
        url="https://api.openpanel.dev"
        clientId="1ea3b32c-608e-456d-91f0-9cd157045532"
        trackScreenViews={true}
      // trackAttributes={true}
      // trackOutgoingLinks={true}
      // If you have a user id, you can pass it here to identify the user
      // profileId={'123'}
      />
      <body className="font-satoshi text-zinc- font-medium">

        <Header />
        <main className="max-w-5xl mx-auto pt-24 px-5">
          <NextTopLoader color="black" />

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
