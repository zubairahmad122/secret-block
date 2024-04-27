import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/components/comp.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight:["100","200","300","400","500","600","700","800","900"],subsets:["devanagari"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
