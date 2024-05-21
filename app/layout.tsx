import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "@/lib/provider/query-provider";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "300"
});


export const metadata: Metadata = {
  title: "Crypto Checker",
  description: "Browse trends, and latest prices on your cryptocurrencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <div className="container px-0 h-screen min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
