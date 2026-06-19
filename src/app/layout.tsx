import type { Metadata } from "next";
import "./globals.css";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import Navbar from "@/components/Shared/Navbar";
import AOSProvider from "@/components/Shared/AOSProvider";
import Footer from "@/components/Shared/footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";



export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url!),
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Apurba Roy Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/logo.png"],
  },

  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],

  creator: "Apurba Roy",

  publisher: "Apurba Roy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
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
      <GoogleAnalytics gaId="G-8Z507DKRFP" />
    </html>
  );
}
