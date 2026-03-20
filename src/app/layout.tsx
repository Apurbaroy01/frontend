import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import Navbar from "@/components/Shared/Navbar";
import AOSProvider from "@/components/Shared/AOSProvider";
import Footer from "@/components/Shared/footer";
import { cn } from "@/lib/utils";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apurba | Portfolio",
  description: "Apurba's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Background */}
        <AnimatedGridPattern
          numSquares={30}
          className={cn(
            "[mask-image:radial-gradient(500px_transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fixed",
          )}
        />

        <AOSProvider />
        <Navbar />


        {/* Content */}
        <div className="relative z-10 text-white mt-25">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
