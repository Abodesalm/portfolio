import type { Metadata } from "next";
import "../public/css/globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ToUp from "@/components/ToUp";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "3bod Sa Portfolio",
  description: "The professional portfolio of 3bod Sa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ToUp />
        </Providers>
      </body>
    </html>
  );
}
